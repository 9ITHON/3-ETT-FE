import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/navigation/Navigation";
import useInputText from "@/hooks/useInputText";
import { useKeyboardDrivenInput } from "@/hooks/useKeyboardDrivenInput";
import { SCREEN } from "@/constants/screen";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "@/components/layout";

// type
type Navigation = NativeStackNavigationProp<
  RootStackParamList,
  typeof SCREEN.TranslateViewer
>;

// constants
const LAYOUT = {
  input: {
    initHeight: 440, // 키보드 닫혔을 때 입력창 높이
    minHeight: 220, // 키보드 열렸을 때 입력창 높이
  },
  button: {
    initTranslateY: 100, // 키보드 닫혔을 때 버튼 위치
    raisedTranslateY: 30, // 키보드 열렸을 때 버튼 위치
  },
} as const;
const InitialInputText = "어려운 문장을 입력해주세요." as const;

const TextInputViewer = () => {
  const { inputText, setInputText, isEmptyInputText } = useInputText();

  const { textInputHeight, buttonTranslateY } = useKeyboardDrivenInput(
    LAYOUT.input.initHeight,
    LAYOUT.input.minHeight,
    LAYOUT.button.initTranslateY,
    LAYOUT.button.raisedTranslateY
  );

  const navigation = useNavigation<Navigation>();
  const payload = { type: "text", text: inputText } as const;

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header title="문장 입력하기" />
      <KeyboardAvoidingView
        className="flex-1 bg-background"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="flex-1 px-5 justify-normal">
            <View className="items-center justify-center my-5">
              <Text className="text-[24px] font-bold text-center">
                {InitialInputText}
              </Text>
            </View>
            <Animated.View style={{ height: textInputHeight }} className="mb-5">
              <TextInput
                className="flex-1 p-3 text-[18px] bg-white border rounded-lg border-outline"
                placeholder={InitialInputText}
                multiline
                scrollEnabled
                value={inputText}
                onChangeText={setInputText}
                textAlignVertical="top"
              />
            </Animated.View>

            <Animated.View
              style={{
                transform: [{ translateY: buttonTranslateY }],
              }}
              className="mb-6"
            >
              <TouchableOpacity
                disabled={isEmptyInputText}
                className={`items-center py-4 rounded-lg ${
                  isEmptyInputText ? "bg-gray-300" : "bg-[#558BCF]"
                }`}
                onPress={() =>
                  navigation.navigate(SCREEN.TranslateViewer, { payload })
                }
              >
                <Text className="text-base font-bold text-white">
                  입력 완료
                </Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default TextInputViewer;
