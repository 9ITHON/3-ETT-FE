import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/navigation/Navigation";

type Navigation = NativeStackNavigationProp<RootStackParamList>;

const ArchiveHeader = () => {
  const navigation = useNavigation<Navigation>();

  return (
    <View
      className="flex-row items-center px-4 mb-5"
      style={{
        justifyContent: "center",
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.12,
        shadowRadius: 8,
        elevation: 4,
        height: 56,
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ position: "absolute", left: 16 }}
      >
        <Image
          source={require("../../../assets/images/arrow-left.png")}
          style={{ width: 32, height: 32 }}
        />
      </TouchableOpacity>

      <Text
        style={{
          fontFamily: "NanumSquareRoundOTFB",
          fontWeight: "700",
          fontSize: 20,
          lineHeight: 28,
          color: "#333333",
        }}
      >
        쉬운말 변환 기록
      </Text>
    </View>
  );
};

export default ArchiveHeader;
