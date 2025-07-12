import { mask, unMask } from "@/features/mask/utils";
import { TranslatePayload } from "../types";
import extractTextByType from "./extractTextByType";
import getEasyText from "../api/getEasyText";

const translate = async (paylaod: TranslatePayload) => {
  console.log(paylaod);
  console.log("⭐⭐⭐");

  const originText = await extractTextByType(paylaod);
  console.log("🔥1: ", originText);

  // mask on
  const { maskedText, PIIMap } = mask(originText);
  console.log("🔥2: ", maskedText);

  // get easy text from server
  const { translatedText, timestamp } = await getEasyText(maskedText);
  const maskedEasyText = translatedText;

  // mask off
  const unMaskedText = unMask({ maskedEasyText, PIIMap });
  console.log("🔥4: ", unMaskedText);

  const easyText = unMaskedText;
  console.log("🔥5: ", easyText);

  return {
    easyText,
    timestamp,
  };
};

export default translate;
