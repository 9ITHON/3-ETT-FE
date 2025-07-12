import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import { SCREEN } from "@/constants/screen";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/navigation/Navigation";

type ArchiveItemProps = {
  item: {
    id: string;
    title: string;
    content: string;
    date: string;
  };
};

const ArchiveItemCard = ({ item }: ArchiveItemProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(SCREEN.ArchiveDetail, {
            id: item.id,
            date: item.date,
            content: item.content,
            title: item.title,
          })
        }
      >
      <View
        style={{
          padding: 16,
          gap: 8,
          width: 340,
          height: 125,
          backgroundColor: "#FFFFFF",
          borderColor: "#D3D8E1",
          borderWidth: 1.2,
          borderRadius: 12,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 16,
        }}
      >
        <Text
          style={{
            fontFamily: "Pretendard",
            fontSize: 16,
            fontWeight: "400",
            lineHeight: 19,
            color: "#999999",
          }}
        >
          {item.date}
        </Text>
        <Text
          style={{
            fontFamily: "Pretendard",
            fontWeight: "700",
            fontSize: 16,
            lineHeight: 19,
            color: "#333333",
          }}
          numberOfLines={1}
        >
          {item.title}
        </Text>
        <Text
          style={{
            fontFamily: "Pretendard",
            fontWeight: "400",
            fontSize: 15,
            lineHeight: 19,
            color: "#333333",
          }}
          numberOfLines={2}
        >
          {item.content}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ArchiveItemCard;
