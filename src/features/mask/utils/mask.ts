import { PIIMapper } from "./PIIMapper";
import { PIIRegExp, PIIType } from "../constants/PIIRegExp";

interface MaskResult {
  maskedText: string;
  PIIMap: Map<string, string>;
}
const mask = (text: string): MaskResult => {
  const mapper = new PIIMapper();
  let maskedText = text;
  console.log("*************************");
  for (const type of Object.keys(PIIRegExp) as PIIType[]) {
    const _PIIRegExp = PIIRegExp[type];

    maskedText = maskedText.replace(_PIIRegExp, (...args) => {
      const fullPIIText = args[0];
      const PIIGroups = args.slice(1, -2); // -2: match start index
      const PII = type === "이름" && PIIGroups[1] ? PIIGroups[1] : fullPIIText;
      const maskedPII = mapper.getMaskedPII(type, PII);

      return fullPIIText.replace(PII, maskedPII);
    });
  }

  const PIIMap = mapper.getPIIMap();

  return { maskedText, PIIMap };
};

export default mask;
