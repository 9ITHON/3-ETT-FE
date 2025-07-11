import { URIProvider } from "@/features/capture/context/URIContext";
import Navigation from "@/navigation/Navigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    NanumSquareRound: require("./assets/fonts/NanumSquareRoundOTFR.otf"),
  });

  console.log("fontsLoaded 상태:", fontsLoaded); // 폰트 로딩 확인용(추후 제거 예정)

  useEffect(() => {
    if (fontsLoaded) {
      console.log("폰트 로딩 완료, splash 숨깁니다");
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
