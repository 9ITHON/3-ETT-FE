import { useEffect, useRef } from "react";
import { Platform, Keyboard, Animated } from "react-native";

export const useKeyboardDrivenInput = (
  initInputHeight: number,
  minInputHeight: number,
  initButtonY: number,
  raisedButtonY: number
) => {
  const textInputHeight = useRef(new Animated.Value(initInputHeight)).current;
  const buttonTranslateY = useRef(new Animated.Value(initButtonY)).current;

  useEffect(() => {
    const showEvt =
      Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow";
    const hideEvt =
      Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide";

    const showSub = Keyboard.addListener(showEvt, () => {
      Animated.parallel([
        Animated.timing(textInputHeight, {
          toValue: minInputHeight,
          duration: 200,
          useNativeDriver: false,
        }),
        Animated.timing(buttonTranslateY, {
          toValue: raisedButtonY,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    });

    const hideSub = Keyboard.addListener(hideEvt, () => {
      Animated.parallel([
        Animated.timing(textInputHeight, {
          toValue: initInputHeight,
          duration: 200,
          useNativeDriver: false,
        }),
        Animated.timing(buttonTranslateY, {
          toValue: initButtonY,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    });

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  return { textInputHeight, buttonTranslateY };
};
