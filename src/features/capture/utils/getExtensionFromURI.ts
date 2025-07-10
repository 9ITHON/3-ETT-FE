import { formatType } from "../type";

/** image의 확장자를 return합니다. */
const getExtensionFromURI = (uri: string): formatType => {
  const extension: formatType = uri.split(".")[1] as formatType;
  return extension;
};

export default getExtensionFromURI;
