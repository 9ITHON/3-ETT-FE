declare module "@env" {
  export const OCR_URL: string;
  export const X_OCR_SECRET: string;
}

// 환경 변수가 없을 경우 대비
declare const OCR_URL: string;
declare const X_OCR_SECRET: string;
