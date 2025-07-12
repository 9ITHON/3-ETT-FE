import { View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "@/components/layout";

interface Props {
  onRetry: () => void;
}

const TranslateError = ({ onRetry }: Props) => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header />
      <View className="items-center justify-center flex-1 px-6 bg-white">
        <Text className="mb-2 text-xl font-bold text-[20px]">번역 실패</Text>
        <Text className="text-base text-gray-500 text-[18px]">
          다시 한 번 시도해주세요.
        </Text>

        <Image
          source={require("../../../../assets/images/번역실패 1.jpg")}
          className="w-[200px] h-[200px]"
          resizeMode="contain"
        />

        <TouchableOpacity
          className="flex-row items-center px-6 py-3 bg-[#558BCF] rounded-xl"
          onPress={onRetry}
          activeOpacity={0.8}
        >
          <MaterialCommunityIcons name="reload" size={18} color="white" />
          <Text className="ml-2 text-base font-semibold text-white">
            다시 시도하기
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TranslateError;
