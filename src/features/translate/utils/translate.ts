import { mask } from "@/features/mask/utils";

const translate = (text: string) => {
  // mask on
  const { maskedText, PIIMap } = mask(text);

  // server, easy text

  // mask off

  // return easy text
};
export default translate;
