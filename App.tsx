import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="items-center justify-center flex-1 bg-white">
      <Text className="text-lg font-bold text-blue-600">Open up!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
