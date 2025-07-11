export type TranslateType = "text" | "picture";

export interface PictureTranslatePayload {
  type: "picture";
  uri: string;
}

export interface TextTranslatePayload {
  type: "text";
  text: string;
}

export type TranslatePayload = PictureTranslatePayload | TextTranslatePayload;
