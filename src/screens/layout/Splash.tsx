import { useEffect } from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/navigation/Navigation";
import { SCREEN } from "@/constants/screen";

const Splash = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace(SCREEN.Login);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex-1 items-center justify-center" style={{ backgroundColor: "#F4F5F7" }}>
      <Image
        source={require("../../../assets/images/logo-splash.gif")}
        style={{ width: 160, height: 160 }}
        resizeMode="contain"
      />
      <Text
        style={{
          fontFamily: "NanumSquareRound",
          fontWeight: "800",
          fontSize: 24,
          lineHeight: 36,
          color: "#3F6AAF",
          textAlign: "center",
          marginTop: 20,
        }}
      >
        쉬운말 번역기
      </Text>
    </View>
  );
};

export default Splash;
