import { Image } from "expo-image";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TranslateLoading = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="items-center justify-center flex-1 gap-4 m-5">
        <Image
          source={require("assets/gif/loading.gif")}
          style={{ height: 160, width: 160 }}
          autoplay
        ></Image>
        <Text className="text-xl font-medium">
          쉬운말로 바꾸는 중이에요 ...
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default TranslateLoading;
