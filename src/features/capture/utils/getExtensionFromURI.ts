/** image의 확장자를 return합니다. */
const getExtensionFromURI = (uri: string) => {
  const extension = uri.split(".")[1];
  return extension;
};

export default getExtensionFromURI;
