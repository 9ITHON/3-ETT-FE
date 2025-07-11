import axios from "axios";

const BASEURL = "https://example.com/api/save";

const archiveEasyText = async (text: string): Promise<void> => {
  await axios.post(BASEURL, { content: text });
};

export default archiveEasyText;
