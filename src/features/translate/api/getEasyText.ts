import axios from "axios";
import { BASE_URL } from "@env";

interface EasyTranslateResponse {
  original_text: string;
  translated_text: string;
  timestamp: string;
}

interface TranslatedResult {
  translatedText: string;
  timestamp: string;
}

const getEasyText = async (maskedText: string): Promise<TranslatedResult> => {
  const { data } = await axios.post<EasyTranslateResponse>(
    `${BASE_URL}/easy-translate`,
    { content: maskedText }
  );

  const { translated_text, timestamp } = data;

  return {
    translatedText: translated_text,
    timestamp,
  };
};

export default getEasyText;
