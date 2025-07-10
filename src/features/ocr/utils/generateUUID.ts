import uuid from "react-native-uuid";

export const generateUUID = (): string => {
  return uuid.v4().toString();
};
