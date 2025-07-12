import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import useToggleTextSize from "@/hooks/useToggleTextSize";
import useArchiveEasyText from "@/features/translate/hooks/useArchiveEasyText";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "@/components/layout";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/navigation/Navigation";
import { SCREEN } from "@/constants/screen";
import { useURIContext } from "@/features/capture";

// type
type Props = {
  easyText: string;
  onRetry: () => void;
};

const TranslateSuccess = ({ easyText, onRetry }: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const { textSize, toggleTextSize } = useToggleTextSize();
  const { isArchiveSuccess, handleArchive } = useArchiveEasyText(easyText);
  const { setPhotoURI } = useURIContext();

  const navigateFeedBack = () => {
    navigation.navigate(SCREEN.FeedBack);
    setPhotoURI(null);
  };

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 bg-background">
        <Header
          title="번역 결과"
          callback={navigateFeedBack}
          callbackText="확인"
        />
        <View className="flex-row items-center justify-between px-4 pt-4">
          <TouchableOpacity
            onPress={onRetry}
            className="px-4 py-2 bg-white rounded-full shadow-sm"
          >
            <Text className="text-[16px]">↻ 다시 시도</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={toggleTextSize}
            className="flex-row items-center px-4 py-2 bg-white rounded-full shadow-sm"
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

        <View className="h-[360px] mt-6 mx-4 border bg-white border-[#CEE2FF] rounded-xl p-4">
          <ScrollView showsVerticalScrollIndicator={true}>
            <Text className={`text-${textSize} leading-relaxed text-black`}>
              {easyText}
            </Text>
          </ScrollView>
        </View>

        {/* 복사/공유 버튼 */}
        <View className="flex-row justify-around px-4 mt-[24px]">
          <TouchableOpacity className="flex-1 h-[52px] py-3 mr-2 bg-white border border-[#D3D8E1] rounded-[5px] align-middle justify-center">
            <Text className="font-semibold text-center text-[#558BCF] text-[20px]">
              복사하기
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-1 h-[52px] py-3 ml-2 bg-white border border-[#D3D8E1] rounded-[5px] align-middle justify-center">
            <Text className="font-semibold text-center text-[#558BCF] text-[20px]">
              공유하기
            </Text>
          </TouchableOpacity>
        </View>

        {/* 결과 저장 버튼 : login인 경우 */}
        <TouchableOpacity
          onPress={handleArchive}
          disabled={isArchiveSuccess}
          className={`py-4 mx-4 mt-[16px] rounded-full ${
            isArchiveSuccess ? "bg-gray-300" : "bg-[#558BCF]"
          }`}
        >
          <Text className="text-base font-bold text-center text-white text-[20px]">
            {isArchiveSuccess ? "결과 저장 완료" : "결과 저장하기"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TranslateSuccess;
