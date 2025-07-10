import { PIIType } from "../constants/PIIRegExp";

export const DummyValues: Record<PIIType, string> = {
  이름: "김철수",
  주민등록번호: "900101-1234567",
  운전면허번호: "12-34-567890-12",
  건강보험증번호: "12345678901",
  사업자등록번호: "123-45-67890",
  법인등록번호: "000000-0000000",
  전화번호: "010-1234-5678",
  이메일: "example@example.com",
  주소: "서울특별시 중구 세종대로 110",
};
const maskPII = (text: string) => {};
export default maskPII;
