import { SCREEN } from "@/constants/screen";
import { RootStackParamList } from "@/navigation/Navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import HeaderBar from "@/components/headerBar";

type Props = NativeStackScreenProps<RootStackParamList, typeof SCREEN.Home>;

const slides = [
  {
    text: "어렵고 이해하기\n어려운 문서,",
    image: require("../../assets/images/home-icon1.png"),
  },
  {
    text: "제가 쉬운말로\n바꿔드릴게요!",
    image: require("../../assets/images/home-icon2.png"),
  },
];

const Home = ({ navigation }: Props) => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // 5초마다 변경

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 해제
  }, []);

  return (
    <LinearGradient
      colors={["#F4F5F7", "#DBE7FF"]}
      className="flex-1"
    >
      <StatusBar style="dark" />
      <HeaderBar className="mb-[62px]" />

      <View className="items-center justify-center mb-6">
        <Text
          className="text-2xl font-semibold text-[#3D3D3D] text-center"
          style={{
            fontFamily: "NanumSquareRoundOTFEB",
            fontWeight: "800",
            lineHeight: 36,
          }}
        >
          {slides[slideIndex].text}
        </Text>

        <Image
          source={slides[slideIndex].image}
          style={{
            width: 320,
            height: 328,
            marginTop: 18,
          }}
          resizeMode="contain"
        />
      </View>

      {/* 버튼 그룹 */}
      <View className="w-full px-6 items-center mt-6">
        <View className="flex-row justify-center gap-4">
          {/* 문장 입력하기 */}
          <TouchableOpacity
            className="bg-white rounded-[12px] items-center justify-center px-6 py-4"
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.12,
              shadowRadius: 8,
              elevation: 4,
            }}
            onPress={() => navigation.navigate(SCREEN.TextInput)}
          >
            <Image
              source={require("../../assets/images/enterSentence-icon.png")}
              style={{ width: 40, height: 40, marginBottom: 12 }}
              resizeMode="contain"
            />
            <Text
              style={{
                fontFamily: "NanumSquareRoundOTF",
                fontWeight: "700",
                fontSize: 20,
                lineHeight: 28,
                color: "#3F6AAF",
                textAlign: "center",
              }}
            >
              문장 입력하기
            </Text>
          </TouchableOpacity>

          {/* 문서 촬영하기 */}
          <TouchableOpacity
            className="bg-white rounded-[12px] items-center justify-center px-6 py-4"
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.12,
              shadowRadius: 8,
              elevation: 4,
            }}
            onPress={() => navigation.navigate(SCREEN.PhotoCapture)}
          >
            <Image
              source={require("../../assets/images/camera-icon.png")}
              style={{ width: 40, height: 40, marginBottom: 12 }}
              resizeMode="contain"
            />
            <Text
              style={{
                fontFamily: "NanumSquareRoundOTF",
                fontWeight: "700",
                fontSize: 20,
                lineHeight: 28,
                color: "#3F6AAF",
                textAlign: "center",
              }}
            >
              문서 촬영하기
            </Text>
          </TouchableOpacity>
        </View>

        {/* 임시 로딩 텍스트 버튼 (작고 아래쪽) */}
        <TouchableOpacity
          onPress={() => navigation.navigate(SCREEN.Loading)}
          className="mt-3"
        >
          <Text
            style={{
              fontSize: 14,
              color: "#666",
              fontFamily: "NanumSquareRoundOTF",
              textAlign: "center",
            }}
          >
            임시 로딩
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default Home;
