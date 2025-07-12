// screens/ArchiveScreen.tsx
import React, { useState, useMemo } from "react";
import { View, Text, FlatList, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ArchiveHeader from "@/components/archive/ArchiveHeader";
import ArchiveItemCard from "@/components/archive/ArchiveItemCard";
import { useArchiveStore } from "@/store/useArchiveStore";
import SearchBar from "@/components/archive/SearchBar";

const ArchiveScreen = () => {
  const archiveItems = useArchiveStore((state) => state.archiveItems);
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    if (query.trim() === "") return archiveItems;
    return archiveItems.filter(
      (item) =>
        item.title.includes(query.trim()) ||
        item.content.includes(query.trim())
    );
  }, [query, archiveItems]);

  const handleClear = () => setQuery("");

  const hasData = filteredItems.length > 0;

  return (
    <SafeAreaView className="flex-1 bg-[#F4F5F7]">
      <ArchiveHeader />
      <SearchBar
        query={query}
        onChangeQuery={setQuery}
        onClear={handleClear}
        onSearch={() => {}}
      />

      {hasData ? (
        <FlatList
          data={filteredItems}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            paddingHorizontal: 16,
            paddingTop: 12,
            paddingBottom: 32,
            alignItems: "center",
          }}
          renderItem={({ item }) => <ArchiveItemCard item={item} />}
        />
      ) : (
        <View className="flex-1 items-center justify-center -mt-16">
          <Image
            source={require("../../../assets/images/archive-empty.png")}
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
