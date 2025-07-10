import { PIIMapType } from "../types";

interface Props {
  maskedText: string;
  PIIMap: PIIMapType;
}

const getReversedMap = (map: PIIMapType): PIIMapType => {
  return new Map([...map.entries()].map(([raw, masked]) => [masked, raw]));
};

const isValidMap = (map?: Map<any, any>): boolean => {
  return map instanceof Map && map.size > 0;
};

const createUnmaskRegex = (maskedKeys: string[]): RegExp => {
  const escapedPattern = maskedKeys
    .map((s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")) // 특수문자 escape
    .join("|");

  return new RegExp(escapedPattern, "g");
};

const applyUnmasking = (
  maskedText: string,
  reversedMap: PIIMapType,
  regex: RegExp
) => {
  return maskedText.replace(regex, (token) => reversedMap.get(token) || token);
};

export const unMask = ({ maskedText, PIIMap }: Props): string => {
  const reversedMap = getReversedMap(PIIMap);

  if (!isValidMap(reversedMap)) return maskedText;

  const regex = createUnmaskRegex(Array.from(reversedMap.keys()));

  const unMaskedText = applyUnmasking(maskedText, reversedMap, regex);

  return unMaskedText;
};

export default unMask;
