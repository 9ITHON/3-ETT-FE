import { Image } from "expo-image";
import { Text, View } from "react-native";

const Loading = () => {
  return (
    <View className="items-center justify-center flex-1 gap-4 m-5">
      {/* FIXME: test gif */}
      <Image
        source={require("assets/gif/loading.gif")}
        style={{ height: 200, width: 200 }}
        autoplay
      ></Image>
      <Text className="text-xl font-medium">쉬운말로 바꾸는 중이에요 ...</Text>
    </View>
  );
};

export default Loading;
