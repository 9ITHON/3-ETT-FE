import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useState } from "react";

type Props = {
  easyText: string;
  onRetry: () => void;
};

type FontSize = "base" | "lg";

const TranslateSuccess = ({ easyText, onRetry }: Props) => {
  const [fontSize, setFontSize] = useState<FontSize>("base");

  const toggleFontSize = () => {
    setFontSize((prev) => (prev === "base" ? "lg" : "base"));
  };

  const handleConfirm = () => {
    // navigation.navigate(SCREEN.ResultArchive); // 예시용 목적지
  };

  return (
    <View className="flex-1 bg-white">
      {/* 상단 버튼 영역 */}
      <View className="flex-row items-center justify-between px-4 pt-4">
        {/* 다시 시도 */}
        <TouchableOpacity
          onPress={onRetry}
          className="px-4 py-2 bg-gray-100 rounded-full"
        >
          <Text className="text-sm">↻ 다시 시도</Text>
        </TouchableOpacity>

        {/* 글자 크기 조절 */}
        <TouchableOpacity
          onPress={toggleFontSize}
          className="flex-row items-center px-4 py-2 bg-gray-100 rounded-full"
        >
          <Text
            className={`text-[15.5px] mr-1 ${
              fontSize === "base" ? "font-bold" : "font-normal"
            }`}
          >
            가
          </Text>
          <Text className="text-sm text-gray-500">|</Text>
          <Text
            className={`text-[18px] ml-1 ${
              fontSize === "lg" ? "font-bold" : "font-normal"
            }`}
          >
            가
          </Text>
        </TouchableOpacity>
      </View>

      {/* 결과 텍스트 스크롤 영역 (고정 높이) */}
      <View className="h-[360px] mt-6 mx-4 border border-blue-300 rounded-xl p-4">
        <ScrollView showsVerticalScrollIndicator={true}>
          <Text className={`text-${fontSize} leading-relaxed text-black`}>
            {easyText}
          </Text>
        </ScrollView>
      </View>

      {/* 하단 복사/공유 버튼 */}
      <View className="flex-row justify-around px-4 mt-6">
        <TouchableOpacity className="flex-1 py-3 mr-2 bg-white border border-blue-500 rounded-xl">
          <Text className="font-semibold text-center text-blue-500">
            복사하기
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-1 py-3 ml-2 bg-white border border-blue-500 rounded-xl">
          <Text className="font-semibold text-center text-blue-500">
            공유하기
          </Text>
        </TouchableOpacity>
      </View>

      {/* 결과 저장하기 버튼 */}
      <TouchableOpacity
        onPress={handleConfirm}
        className="py-4 mx-4 mt-6 bg-blue-500 rounded-full"
      >
        <Text className="text-base font-bold text-center text-white">
          결과 저장하기
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TranslateSuccess;
