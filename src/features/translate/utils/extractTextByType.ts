import { getOcrTexts } from "@/features/ocr/utils";
import { TranslatePayload } from "../types";

const extractTextByType = async (paylaod: TranslatePayload) => {
  let originText = "";

  if (paylaod.type === "picture") {
    const ocrText = await getOcrTexts(paylaod.uri);
    originText = ocrText;
  }

  if (paylaod.type === "text") {
    originText = paylaod.text;
  }

  return originText;
};
export default extractTextByType;
