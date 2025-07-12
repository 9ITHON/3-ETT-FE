import { useEffect } from "react";
import * as Linking from "expo-linking";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuthStore } from "@/store/useAuthStore";
import { useNavigation } from "@react-navigation/native";
import { SCREEN } from "@/constants/screen";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "@/navigation/Navigation";

export const useHandleAuthRedirect = () => {
  const login = useAuthStore((state) => state.login);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    const handleUrl = async (event: { url: string }) => {
      const parsed = Linking.parse(event.url);
      const { queryParams } = parsed;

      if (parsed.path === "auth" && queryParams?.access_token && queryParams?.nickname) {
        const accessToken = queryParams.access_token as string;
        const nickname = queryParams.nickname as string;

        // 토큰 저장
        await AsyncStorage.setItem("access_token", accessToken);

        // Zustand 상태 설정
        login({
        user: { nickname },
        accessToken,
        refreshToken: "", // 없으면 빈 문자열로라도
        });

        // Home으로 이동
        navigation.replace(SCREEN.Home);
      }
    };

    // 이벤트 리스너 등록
    const subscription = Linking.addEventListener("url", handleUrl);

    // 앱이 처음 시작될 때 처리
    Linking.getInitialURL().then((url) => {
      if (url) handleUrl({ url });
    });

    // 리스너 정리
    return () => {
      subscription.remove();
    };
  }, []);
};
