import { mask, unMask } from "@/features/mask/utils";
import { TranslatePayload } from "../types";
import { getOcrTexts } from "@/features/ocr/utils";

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

const translate = async (paylaod: TranslatePayload) => {
  const originText = await extractTextByType(paylaod);

  // mask on
  const { maskedText, PIIMap } = mask(originText);

  // get easy text from server

  // mask off
  const unMaskedText = unMask({ maskedText, PIIMap });
  console.log(unMaskedText);
  // return easy text
};
export default translate;
