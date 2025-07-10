import { PIIMapType } from "../types";

interface Props {
  maskedText: string;
  PIIMap: PIIMapType;
}

export const unmask = ({ maskedText, PIIMap }: Props): string => {
  const ReversedPIIMap: PIIMapType = new Map(
    [...PIIMap.entries()].map(([raw, masked]) => [masked, raw])
  );

  const pattern = Array.from(ReversedPIIMap.keys())
    .map((s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")) // 특수문자 escape
    .join("|");

  if (!pattern) return maskedText;

  const regex = new RegExp(pattern, "g");

  return maskedText.replace(
    regex,
    (token) => ReversedPIIMap.get(token) || token
  );
};

export default unmask;
