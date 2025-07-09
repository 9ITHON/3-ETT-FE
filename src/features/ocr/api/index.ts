import { OCR_URL, X_OCR_SECRET } from "@env";
import axios from "axios";
import { generateUUID } from "../utils/generateUUID";

export const requestOCR = async (photoURI: string) => {
  const formData = new FormData();

  formData.append(
    "message",
    JSON.stringify({
      version: "V2",
      requestId: generateUUID(),
      timestamp: Date.now(),
      lang: "ko",
      images: [
        {
          format: "jpg",
          name: "photo.jpg",
        },
      ],
    })
  );

  formData.append("file", {
    uri: photoURI,
    type: "image/jpeg",
    name: "photo.jpg",
  } as any);

  const response = await axios.post(OCR_URL, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      "X-OCR-SECRET": X_OCR_SECRET,
    },
  });

  const fields = response.data.images?.[0]?.fields || [];
  const texts = fields.map((field: any) => field.inferText);
  return texts;
};
