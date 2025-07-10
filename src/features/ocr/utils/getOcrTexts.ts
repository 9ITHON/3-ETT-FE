import getExtensionFromURI from "@/features/capture/utils/getExtensionFromURI";
import { requestOCR } from "../api/requestOCR";

const getOcrTexts = async (uri: string) => {
  const format = getExtensionFromURI(uri);
  try {
    const { texts } = await requestOCR({
      uri: uri,
      format: format,
    });

    const ocrTexts = texts.join(" ");

    return ocrTexts;
  } catch {
    throw new Error("OCR 변환이 실패했습니다.");
  }
};
export default getOcrTexts;
