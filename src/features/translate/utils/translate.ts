import { mask, unMask } from "@/features/mask/utils";

const translate = (text: string) => {
  // mask on
  const { maskedText, PIIMap } = mask(text);

  // get easy text from server

  // mask off
  const unMaskedText = unMask({ maskedText, PIIMap }); // TODO: maskedText: 서버에서 받아온 이해하기 쉬운 말로 변경
  console.log(unMaskedText);
  // return easy text
};
export default translate;
