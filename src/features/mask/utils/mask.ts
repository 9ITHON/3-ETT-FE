import { PIIMapper } from "./PIIMapper";
import { PIIRegExp, PIIType } from "../constants/PIIRegExp";

interface MaskResult {
  maskedText: string;
  PIIMap: Map<string, string>;
}

const isNameGroupValid = (type: PIIType, groups: string[]) => {
  return type === "이름" && groups[1];
};

const replacePII = (
  text: string,
  type: PIIType,
  regexp: RegExp,
  mapper: PIIMapper
): string => {
  return text.replace(regexp, (...args) => {
    const fullPIIText = args[0];
    const PIIGroups = args.slice(1, -2); // -2: match start index
    const PII = isNameGroupValid(type, PIIGroups) ? PIIGroups[1] : fullPIIText;
    const maskedPII = mapper.getMaskedPII(type, PII);

    return fullPIIText.replace(PII, maskedPII);
  });
};

const mask = (text: string): MaskResult => {
  const mapper = new PIIMapper();
  const maskedText = Object.entries(PIIRegExp).reduce((acc, [key, regexp]) => {
    return replacePII(acc, key as PIIType, regexp, mapper);
  }, text);

  const PIIMap = mapper.getPIIMap();

  return { maskedText, PIIMap };
};

export default mask;
