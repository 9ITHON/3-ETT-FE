import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const deleteArchive = async (archiveId: string) => {
  const token = await AsyncStorage.getItem("access_token"); // 토큰 가져오기
  if (!token) throw new Error("No access token");

  const response = await axios.delete(
    `https://easyword-d8b6dxd5hgfga6h2.koreacentral-01.azurewebsites.net/archive/delete/${archiveId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};
