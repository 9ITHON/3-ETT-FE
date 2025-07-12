import { BASE_URL } from "@env";
import axios from "axios";

type ArchivePayload = {
  text: string;
  timestamp: string;
};

const archiveEasyText = async ({ text, timestamp }: ArchivePayload) => {
  await axios.post(`${BASE_URL}/archive/save`, {
    content: text,
    translatedAt: timestamp,
  });
};

export default archiveEasyText;
