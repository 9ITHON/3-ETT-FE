import { StatusBar } from "expo-status-bar";
import { Button, Text, View } from "react-native";

const Home = () => {
  return (
    <View className="items-center justify-center flex-1 bg-background">
      <StatusBar style="auto" />
      {/* setting here header */}
      {/* setting here word */}
      {/* setting here caracter */}
      <Text className="text-lg font-bold text-main1">Home</Text>
    </View>
  );
};

export default Home;
