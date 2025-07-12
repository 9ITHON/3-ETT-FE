import { PIIMapType } from "../types";

interface Props {
  maskedEasyText: string;
  PIIMap: PIIMapType;
}

const getReversedMap = (map: PIIMapType): PIIMapType =>
  new Map([...map.entries()].map(([raw, masked]) => [masked, raw]));

const isValidMap = (map?: Map<any, any>): boolean =>
  map instanceof Map && map.size > 0;

const createUnmaskRegex = (maskedKeys: string[]): RegExp => {
  const escapedPattern = maskedKeys
    .map((s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|");
  return new RegExp(escapedPattern, "g");
};

const applyUnmasking = (text: string, reversedMap: PIIMapType, regex: RegExp) =>
  text.replace(regex, (token) => reversedMap.get(token) || token);

export const unMask = ({ maskedEasyText, PIIMap }: Props): string => {
  const reversedMap = getReversedMap(PIIMap);
  if (!isValidMap(reversedMap)) return maskedEasyText;

  const regex = createUnmaskRegex([...reversedMap.keys()]);
  return applyUnmasking(maskedEasyText, reversedMap, regex);
};

export default unMask;
