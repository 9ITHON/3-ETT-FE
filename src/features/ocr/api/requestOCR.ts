import axios, { AxiosError } from "axios";
import { OCR_URL, X_OCR_SECRET } from "@env";
import { formatType } from "@/features/capture/type";
import generateUUID from "../utils/generateUUID";

interface PhotoInfo {
  uri: string;
  format: formatType;
}
type OCRText = { texts: string[] };

const OCR_MESSAGE = { version: "V1", lang: "ko" } as const;
const API_TIMEOUT = 15_000 as const;

/** Axios 에러→가독성 높은 문자열 변환 */
const axiosErrorToMessage = (err: AxiosError): string => {
  if (err.code === "ECONNABORTED") return "TIMEOUT";
  if (!err.response) return "NETWORK_OFFLINE";

  // 서버가 JSON 형태로 에러코드·메시지를 내려줄 때
  const serverMsg =
    (err.response.data as any)?.message ||
    (err.response.data as any)?.error ||
    JSON.stringify(err.response.data);

  return `HTTP_${err.response.status}${serverMsg ? `:${serverMsg}` : ""}`;
};

export const requestOCR = async (photoInfo: PhotoInfo): Promise<OCRText> => {
  const { uri, format } = photoInfo;
  const uuid = generateUUID();
  const time = Date.now();

  const formData = new FormData();
  formData.append(
    "message",
    JSON.stringify({
      ...OCR_MESSAGE,
      requestId: uuid,
      timestamp: time,
      images: [{ format, name: `photo-${time}.${format}` }],
    })
  );
  formData.append("file", {
    uri,
    type: "image/jpeg",
    name: `photo-${time}.${format}`,
  } as any);

  try {
    const { data, status } = await axios.post(OCR_URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "X-OCR-SECRET": X_OCR_SECRET,
      },
      timeout: API_TIMEOUT,
    });

    if (status !== 200) throw new Error(`HTTP_${status}`);

    const img = data?.images?.[0];
    if (img?.inferResult !== "SUCCESS")
      throw new Error(`OCR_${img?.inferResult}:${img?.message || "UNKNOWN"}`);

    return { texts: (img?.fields ?? []).map((f: any) => f.inferText) };
  } catch (rawErr) {
    if (axios.isAxiosError(rawErr)) {
      // 상세 정보 로깅
      console.log("📡 AxiosError:", {
        code: rawErr.code,
        status: rawErr.response?.status,
        headers: rawErr.response?.headers,
        data: rawErr.response?.data,
      });

      throw new Error(axiosErrorToMessage(rawErr));
    }

    // 예상 외 에러
    console.error("❗️Unknown Error:", rawErr);
    throw rawErr;
  }
};
