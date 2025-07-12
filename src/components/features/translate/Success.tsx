import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import useToggleTextSize from "@/hooks/useToggleTextSize";
import useArchiveEasyText from "@/features/translate/hooks/useArchiveEasyText";

// type
type Props = {
  easyText: string;
  onRetry: () => void;
};

const TranslateSuccess = ({ easyText, onRetry }: Props) => {
  const { textSize, toggleTextSize } = useToggleTextSize();
  const { isArchiveSuccess, handleArchive } = useArchiveEasyText(easyText);
  return (
    <View className="flex-1 bg-white">
      {/* 상단 */}
      <View className="flex-row items-center justify-between px-4 pt-4">
        <TouchableOpacity
          onPress={onRetry}
          className="px-4 py-2 bg-gray-100 rounded-full"
        >
          <Text className="text-sm">↻ 다시 시도</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={toggleTextSize}
          className="flex-row items-center px-4 py-2 bg-gray-100 rounded-full"
        >
          <Text
            className={`text-[15.5px] mr-1 ${
              textSize === "base" ? "font-bold" : "font-normal"
            }`}
          >
            가
          </Text>
          <Text className="text-sm text-gray-500">|</Text>
          <Text
            className={`text-[18px] ml-1 ${
              textSize === "lg" ? "font-bold" : "font-normal"
            }`}
          >
            가
          </Text>
        </TouchableOpacity>
      </View>

      {/* 결과 텍스트 영역 */}
      <View className="h-[360px] mt-6 mx-4 border border-blue-300 rounded-xl p-4">
        <ScrollView showsVerticalScrollIndicator={true}>
          <Text className={`text-${textSize} leading-relaxed text-black`}>
            {easyText}
          </Text>
        </ScrollView>
      </View>

      {/* 복사/공유 버튼 */}
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

      {/* 결과 저장 버튼 : login인 경우 */}
      <TouchableOpacity
        onPress={handleArchive}
        disabled={isArchiveSuccess}
        className={`py-4 mx-4 mt-6 rounded-full ${
          isArchiveSuccess ? "bg-gray-300" : "bg-blue-500"
        }`}
      >
        <Text className="text-base font-bold text-center text-white">
          {isArchiveSuccess ? "결과 저장 완료" : "결과 저장하기"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TranslateSuccess;
