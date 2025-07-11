import { View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface Props {
  onRetry: () => void;
}

const TranslateError = ({ onRetry }: Props) => {
  return (
    <View className="items-center justify-center flex-1 px-6 bg-white">
      <Text className="mb-2 text-xl font-bold">번역 실패</Text>
      <Text className="mb-6 text-base text-gray-500">
        다시 한 번 시도해주세요.
      </Text>

      {/* <Image
        source={require("@/assets/face_error.png")} 
        className="mb-10 w-28 h-28"
        resizeMode="contain"
      /> */}

      <TouchableOpacity
        className="flex-row items-center px-6 py-3 bg-blue-500 rounded-xl"
        onPress={onRetry}
        activeOpacity={0.8}
      >
        <MaterialCommunityIcons name="reload" size={18} color="white" />
        <Text className="ml-2 text-base font-semibold text-white">
          다시 시도하기
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TranslateError;
