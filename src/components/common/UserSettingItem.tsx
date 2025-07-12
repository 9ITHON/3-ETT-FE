import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

type Props = {
  label: string;
  onPress: () => void;
};

const UserSettingItem = ({ label, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <View className="flex-row justify-between items-center py-4 border-b border-gray-200 px-6">
        <Text
          style={{
            fontFamily: "NanumSquareRoundOTF",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: 20,
            lineHeight: 28,
            color: "#333333",
          }}
        >
          {label}
        </Text>
        <Image
          source={require("../../../assets/images/arrow-right.png")}
          className="w-6 h-6"
          resizeMode="contain"
        />
      </View>
    </TouchableOpacity>
  );
};

export default UserSettingItem;
