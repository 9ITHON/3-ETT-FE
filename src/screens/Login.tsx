import { View, Text, Pressable } from "react-native";
import { useState, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginCarousel from "@/components/layout/LoginCarousel";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SCREEN } from "@/constants/screen";
import { RootStackParamList } from "@/navigation/Navigation";
import SpeechBubble from "@/components/common/speechBubble";
import { useAuthStore } from "@/store/useAuthStore";
import { startKakaoLogin } from "@/api/auth";

type Navigation = NativeStackNavigationProp<RootStackParamList>;

const Login = () => {
  const navigation = useNavigation<Navigation>();
  const { login } = useAuthStore(); // Zustand 훅 사용
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<any>(null);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F4F6FB" }}>
      {/* 배경색 적용된 상단 500px */}
      <View style={{ backgroundColor: "#E6EDFC", height: 500 }}>
        <LoginCarousel
          carouselRef={carouselRef}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </View>

      {/* 인디케이터 (배경색 바깥) */}
      <View className="flex-row justify-center mt-[10px] mb-[22px]">
        {[0, 1, 2].map((i) => (
          <Pressable key={i} onPress={() => carouselRef.current?.scrollTo?.(i)}>
            <View
              className="mx-1"
              style={{
                width: activeIndex === i ? 16 : 8,
                height: 8,
                borderRadius: 100,
                backgroundColor: activeIndex === i ? "#558BCF" : "#D9D9D9",
              }}
            />
          </Pressable>
        ))}
      </View>

      {/* 버튼/설명 영역 */}
      <View className="flex-1 items-center justify-between pb-10 bg-[#F4F6FB]">
        <View className="w-full px-6 items-center space-y-3">
          {/* 로그인 없이 시작 */}
          <Pressable
            onPress={() => navigation.replace(SCREEN.Home)}
            className="w-[320px] h-[56px] bg-[#558BCF] rounded-[12px] flex-row items-center justify-center shadow-md"
          >
            <Text className="text-white text-[20px] leading-[28px] font-bold font-[NanumSquareRoundOTF]">
              로그인 없이 시작
            </Text>
          </Pressable>

          {/* 카카오로 로그인 */}
          <Pressable
            onPress={async () => {
              try {
                await startKakaoLogin();
                navigation.replace(SCREEN.Home);
              } catch (e) {
                console.error("로그인 오류:", e);
              }
            }}
            className="w-[320px] h-[56px] bg-[#FFE558] rounded-[12px] flex-row items-center justify-center shadow-md"
          >
            <Text className="text-[#333333] text-[20px] leading-[28px] font-bold font-[NanumSquareRoundOTF]">
              카카오로 로그인
            </Text>
          </Pressable>

          {/* 안내 텍스트 */}
          <View className="items-center mt-4">
            <SpeechBubble />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;