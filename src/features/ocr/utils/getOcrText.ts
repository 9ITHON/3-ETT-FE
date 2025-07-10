import { requestOCR } from "../api/requestOCR";

type formatType = "jpg" | "png";

type Props = {
  uri: string;
  format: formatType;
};

const getOcrText = async ({ uri, format }: Props) => {
  const { texts } = await requestOCR({
    uri: uri,
    format: format,
  });

  const ocrTexts = texts.join(" ");

  return ocrTexts;
};
export default getOcrText;
