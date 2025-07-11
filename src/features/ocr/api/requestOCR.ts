import axios from "axios";
import { OCR_URL, X_OCR_SECRET } from "@env";
import { formatType } from "@/features/capture/type";
import generateUUID from "../utils/generateUUID";

interface PhotoInfo {
  uri: string;
  format: formatType;
}

type OCRText = { texts: string[] };

// constants
const OCR_MESSAGE = {
  version: "V1",
  lang: "ko",
} as const;
const API_TIMEOUT = 15000 as const;

// reauest api
export const requestOCR = async (photoInfo: PhotoInfo): Promise<OCRText> => {
  const { uri, format } = photoInfo;

  const formData = new FormData();

  let uuid = generateUUID();
  let time = Date.now();

  // set formData
  formData.append(
    "message",
    JSON.stringify({
      version: OCR_MESSAGE.version,
      requestId: uuid as string,
      timestamp: time,
      lang: OCR_MESSAGE.lang,
      images: [
        {
          format: `${format}`,
          name: `photo-${time}.${format}`,
        },
      ],
    })
  );

  formData.append("file", {
    uri: uri,
    type: "image/jpeg",
    name: `photo-${time}.${format}`,
  } as any);

  // post
  try {
    const { data, status } = await axios.post(OCR_URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "X-OCR-SECRET": X_OCR_SECRET,
      },
      timeout: API_TIMEOUT,
    });
    if (status !== 200) throw new Error(`HTTP_${status}`); // TODO: status code management

    const img = data?.images?.[0];
    // TODO: inferResult type 정의
    if (img?.inferResult !== "SUCCESS")
      throw new Error(`OCR_${img?.inferResult}`);

    return { texts: (img?.fields ?? []).map((f: any) => f.inferText) }; // 내부의 text만 return
  } catch (err: any) {
    // error
    if (axios.isAxiosError(err)) {
      console.log("❌err.response?.data", err.response?.data);

      if (!err.response) throw new Error("NETWORK_ERROR");
      if (err.code === "ECONNABORTED") throw new Error("TIMEOUT");

      throw new Error(`HTTP_${err.response.status}`);
    }
    throw err;
  }
};
