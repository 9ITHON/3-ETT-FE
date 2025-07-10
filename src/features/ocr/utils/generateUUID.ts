import uuid from "react-native-uuid";

const generateUUID = (): string => {
  return uuid.v4().toString();
};

export default generateUUID;
