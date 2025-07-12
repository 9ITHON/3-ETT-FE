import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/navigation/Navigation";
import { Header } from "@/components/layout";
import { SCREEN } from "@/constants/screen";
import { useState } from "react";

const FeedBack = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [selected, setSelected] = useState<"good" | "bad" | null>(null);
  const [inputText, setInputText] = useState("");

  const goHome = () => {
    navigation.navigate(SCREEN.Home);
  };

  const postFeedback = async () => {};

  const saveFeedback = async () => {
    // save feedback api
    await postFeedback();
    console.log("feed back 저장");
    navigation.navigate(SCREEN.Home);
  };
  const placeholder =
    selected === "good"
      ? "좋았던 점을 알려주세요."
      : selected === "bad"
      ? "별로였던 점을 알려주세요."
      : "";

  return (
    <SafeAreaView className="flex-1 bg-white">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          className="flex-1"
        >
          <Header
            title="평가하기"
            showBack={false}
            callback={goHome}
            callbackText="x"
          />

          <View className="items-center justify-start flex-1 px-6 pt-10">
            <Text className="text-[24px] font-bold text-black mb-4">
              도움이 되셨나요?
            </Text>

            <View className="flex-row space-x-4">
              <TouchableOpacity
                className={`w-[152px] h-[140px] bg-white rounded-xl shadow p-[16px] items-center justify-between border ${
                  selected === "good"
                    ? "border-[#558BCF]"
                    : "border-transparent"
                }`}
                onPress={() => setSelected("good")}
              >
                <Image
                  source={require("../../../assets/images/굿 1.jpg")}
                  className="w-[80px] h-[80px]"
                  resizeMode="contain"
                />
                <Text className="text-[20px] font-medium text-black">
                  최고예요
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                className={`w-[152px] h-[140px] bg-white rounded-xl shadow p-[16px] items-center justify-between border ${
                  selected === "bad" ? "border-[#558BCF]" : "border-transparent"
                }`}
                onPress={() => setSelected("bad")}
              >
                <Image
                  source={require("../../../assets/images/별로 2.jpg")}
                  className="w-[80px] h-[80px]"
                  resizeMode="contain"
                />
                <Text className="text-[20px] font-medium text-black">
                  별로예요
                </Text>
              </TouchableOpacity>
            </View>

            <TextInput
              className="w-full p-3 mt-5 text-[18px] text-black bg-white border rounded-lg border-outline"
              placeholder={placeholder}
              placeholderTextColor="#999999"
              multiline
              scrollEnabled
              value={inputText}
              onChangeText={setInputText}
              textAlignVertical="top"
            />

            <TouchableOpacity
              className="w-[320px] h-[56px] px-4 py-[10px] flex-col justify-center items-center bg-[#558BCF] rounded-xl mt-10"
              onPress={saveFeedback}
            >
              <Text className="text-white text-[20px] font-semibold">
                평가 완료
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default FeedBack;
