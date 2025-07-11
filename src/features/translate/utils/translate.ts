import { mask, unMask } from "@/features/mask/utils";
import { TranslatePayload } from "../types";
import { getOcrTexts } from "@/features/ocr/utils";

const translate = async (paylaod: TranslatePayload) => {
  let originText = "";

  if (paylaod.type === "picture") {
    const ocrText = await getOcrTexts(paylaod.uri);
    originText = ocrText;
  }

  if (paylaod.type === "text") {
    originText = paylaod.text;
  }

  // mask on
  const { maskedText, PIIMap } = mask(originText);

  // get easy text from server

  // mask off
  const unMaskedText = unMask({ maskedText, PIIMap }); // TODO: maskedText: 서버에서 받아온 이해하기 쉬운 말로 변경
  console.log(unMaskedText);
  // return easy text
};
export default translate;
