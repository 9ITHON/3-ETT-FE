import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ArchiveHeader from "@/components/ArchiveHeader";
import ArchiveItemCard from "@/components/ArchiveItemCard";
import { mockArchiveData } from "@/data/mockArchiveData";

const ArchiveScreen = () => {
  const hasData = mockArchiveData.length > 0;

  return (
    <SafeAreaView className="flex-1 bg-[#F4F5F7]">
      <ArchiveHeader />
      {hasData ? (
        <FlatList
          data={mockArchiveData}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 12, paddingBottom: 32, alignItems: "center", }}
          renderItem={({ item }) => <ArchiveItemCard item={item} />}
        />
      ) : (
        <View className="flex-1 items-center justify-center -mt-16">
          <Image
            source={require("../../assets/images/archive-empty.png")}
            style={{ width: 200, height: 205 }}
            resizeMode="contain"
          />
          <Text
            className="text-[#999999] text-base"
            style={{
              fontFamily: "NanumSquareRoundOTF",
              fontWeight: "700",
              fontSize: 20,
              lineHeight: 28,
              textAlign: "center",
            }}
          >
            아직 기록이 없어요
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default ArchiveScreen;
