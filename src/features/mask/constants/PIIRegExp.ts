// NOTE: pii (personally identifiable information) : 개인 식별 정보, 즉 개인 정보를 의미합니다.
export type PIIType =
  | "이름"
  | "주민등록번호"
  | "운전면허번호"
  | "건강보험증번호"
  | "사업자등록번호"
  | "법인등록번호"
  | "전화번호"
  | "이메일"
  | "주소";

export const PIIRegExp: Record<PIIType, RegExp> = {
  이름: /(성명|이름)\s*[:：]?\s*([가-힣]{2,4})/g,
  주민등록번호: /\b\d{6}-\d{7}\b/g,
  운전면허번호: /\b\d{2}-\d{2}-\d{6}-\d{2}\b/g,
  건강보험증번호: /\b\d{11}\b/g,
  사업자등록번호: /\b\d{3}-\d{2}-\d{5}\b/g,
  법인등록번호: /법인등록번호\s*[:：]?\s*\d{6}-\d{7}/g,
  전화번호: /\b01[016789]-\d{3,4}-\d{4}\b/g,
  이메일: /\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\b/g,
  주소: new RegExp(
    String.raw`(?:주소[:：]?\s*)?` +
      String.raw`(?:[가-힣]+?(도|광역시|특별시|시)\s+)?` +
      String.raw`[가-힣]+?(시|군|구)\s+` +
      String.raw`[가-힣]+?(구|읍|면|동|리)\s+` +
      String.raw`[가-힣0-9]+?(로|길)\s*` +
      String.raw`\d+`,
    "g"
  ),
};
