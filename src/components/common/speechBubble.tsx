import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SpeechBubble = () => {
  return (
    <View style={styles.container}>
      {/* 삼각형 꼬리 */}
      <View style={styles.triangle} />
      {/* 말풍선 본체 */}
      <View style={styles.bubble}>
        <Text style={styles.text}>쉬운말 변환 기록을 저장할 수 있어요!</Text>
      </View>
    </View>
  );
};

export default SpeechBubble;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 6.5,
    borderRightWidth: 6.5,
    borderBottomWidth: 12,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#ffffff",
    marginBottom: -6, // 삼각형과 말풍선 사이 여백
    zIndex: 1,
  },
  bubble: {
    width: 256,
    height: 44,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.16,
    shadowRadius: 6,
    elevation: 4, // Android shadow
  },
  text: {
    fontFamily: "Pretendard",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#333333",
  },
});
