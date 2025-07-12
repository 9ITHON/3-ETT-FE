// src/api/auth.ts
import * as WebBrowser from "expo-web-browser";
import * as Linking from "expo-linking";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BACKEND_URL } from "@env";
import { useAuthStore } from "@/store/useAuthStore";

export const startKakaoLogin = async () => {
  try {
    const loginUrl = `${BACKEND_URL}/auth/login`;
    const result = await WebBrowser.openAuthSessionAsync(
      loginUrl,
      Linking.createURL("")
    );

    if (result.type === "success" && result.url) {
      const url = new URL(result.url);
      const code = url.searchParams.get("code");

      if (!code) throw new Error("code가 없습니다.");

      const res = await axios.get(`${BACKEND_URL}/auth/login/kakao?code=${code}`);
      const { access_token, refresh_token, user } = res.data;

      // 토큰 및 유저 정보 저장
      await AsyncStorage.setItem("access_token", access_token);
      await AsyncStorage.setItem("refresh_token", refresh_token);
      await AsyncStorage.setItem("user", JSON.stringify(user));

      // Zustand 상태 저장
      useAuthStore.getState().login({
        user,
        accessToken: access_token,
        refreshToken: refresh_token,
      });
    } else {
      throw new Error("로그인 실패 또는 취소됨");
    }
  } catch (error) {
    console.error("카카오 로그인 실패:", error);
    throw error;
  }
};
