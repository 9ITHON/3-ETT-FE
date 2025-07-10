import { getOcrTexts } from "@/features/ocr/utils";
import translate from "./translate";

const handleOCRTranslate = async (photoURI: string) => {
  const ocrText = await getOcrTexts(photoURI);
  translate(ocrText);
};

export default handleOCRTranslate;
