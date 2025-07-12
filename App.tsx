import React from "react";
import { URIProvider } from "@/features/capture/context/URIContext";
import Navigation from "@/navigation/Navigation"; // 여기 내부로 훅 이동 예정
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    NanumSquareRound: require("./assets/fonts/NanumSquareRoundOTFR.otf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <URIProvider>
        <Navigation />
      </URIProvider>
    </GestureHandlerRootView>
  );
}
