import { translate } from "@/features/translate";
import useInputText from "@/hooks/useInputText";
import { useKeyboardDrivenInput } from "@/hooks/useKeyboardDrivenInput";
import React from "react";
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

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-background"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="flex-1 px-5 justify-normal">
          <Text className="mt-5 mb-3 text-lg font-bold">
            {InitialInputText}
          </Text>

          <Animated.View style={{ height: textInputHeight }} className="mb-5">
            <TextInput
              className="flex-1 p-3 text-base bg-white border rounded-lg border-outline"
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
              onPress={() => translate({ type: "text", text: inputText })}
            >
              <Text className="text-base font-bold text-white">입력 완료</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default TextInputViewer;
