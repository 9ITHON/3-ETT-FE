import { mask } from "@/features/mask/utils";

const translate = (text: string) => {
  // mask on
  const { maskedText, PIIMap } = mask(text);

  //______ mask test section ______
  console.log("🔒 마스킹된 텍스트:\n ", maskedText);

  console.log("\n📌 매핑 정보:\n");
  for (const [original, masked] of PIIMap.entries()) {
    console.log(`${original} → ${masked}`);
  }
  console.log("________________");
  //______ mask test section ______

  // server, easy text

  // mask off

  // return easy text
};
export default translate;
