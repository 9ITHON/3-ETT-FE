import { SCREEN } from "@/constants/screen";
import { RootStackParamList } from "@/navigation/Navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Button, Text, View } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, typeof SCREEN.Home>;

const Home = ({ navigation }: Props) => {
  return (
    <View className="items-center justify-center flex-1 bg-background">
      <StatusBar style="auto" />
      {/* setting here word */}
      {/* setting here caracter */}

      <Text className="text-lg font-bold text-main1">Home</Text>
      <Button
        title="문장 입력하기"
        onPress={() => navigation.navigate(SCREEN.TextInput)}
      />
      <Button
        title="문서 촬영하기"
        onPress={() => navigation.navigate(SCREEN.PhotoCapture)}
      />
    </View>
  );
};

export default Home;
