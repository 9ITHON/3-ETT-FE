import { StatusBar } from "expo-status-bar";
import { Button, Text, View } from "react-native";

const Home = () => {
  return (
    <View className="items-center justify-center flex-1 bg-background">
      <StatusBar style="auto" />
      {/* header */}
      {/* word */}
      {/* caracter */}
      <Text className="text-lg font-bold text-main1">Home</Text>
      <Button />
      <Button />
    </View>
  );
};

export default Home;
