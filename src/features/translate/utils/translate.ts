import { mask, unMask } from "@/features/mask/utils";
import { TranslatePayload } from "../types";
import extractTextByType from "./extractTextByType";
import getEasyText from "../api/getEasyText";

const translate = async (paylaod: TranslatePayload) => {
  const originText = await extractTextByType(paylaod);

  const { maskedText, PIIMap } = mask(originText);

  const { translatedText, timestamp } = await getEasyText(maskedText);

  const maskedEasyText = translatedText;

  const unMaskedText = unMask({ maskedEasyText, PIIMap });

  const easyText = unMaskedText;

  return {
    easyText,
    timestamp,
  };
};

export default translate;
