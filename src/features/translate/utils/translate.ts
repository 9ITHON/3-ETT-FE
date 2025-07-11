import { mask, unMask } from "@/features/mask/utils";
import { TranslatePayload } from "../types";
import extractTextByType from "./extractTextByType";

const translate = async (paylaod: TranslatePayload) => {
  const originText = await extractTextByType(paylaod);

  // mask on
  const { maskedText, PIIMap } = mask(originText);

  // get easy text from server

  // mask off
  const unMaskedText = unMask({ maskedText, PIIMap });

  const easyText = unMaskedText;

  return easyText;
};
export default translate;
