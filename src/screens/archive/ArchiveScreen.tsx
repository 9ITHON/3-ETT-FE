import React, { useState, useMemo } from "react";
import {  View, Text, FlatList, Image, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ArchiveHeader from "@/components/archive/ArchiveHeader";
import ArchiveItemCard from "@/components/archive/ArchiveItemCard";
import SearchBar from "@/components/archive/SearchBar";
import { useArchiveStore } from "@/store/useArchiveStore";

const ArchiveScreen = () => {
  const archiveItems = useArchiveStore((state) => state.archiveItems);
  const [query, setQuery] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // 검색 필터링
  const filteredItems = useMemo(() => {
    if (query.trim() === "") return archiveItems;
    return archiveItems.filter(
      (item) =>
        item.title.includes(query.trim()) ||
        item.content.includes(query.trim())
    );
  }, [query, archiveItems]);

  const handleClear = () => setQuery("");

  // Pull to refresh
  const onRefresh = async () => {
    setRefreshing(true);
    // TODO: 실제 데이터 새로고침 로직
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setRefreshing(false);
  };

  // 무한스크롤
  const handleLoadMore = async () => {
    if (isLoadingMore || query !== "") return; // 검색 중엔 무한스크롤 중단
    setIsLoadingMore(true);
    // TODO: 데이터 추가 로딩 로직
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoadingMore(false);
  };

  const hasData = filteredItems.length > 0;

  return (
    <SafeAreaView className="flex-1 bg-white">
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
          onRefresh={onRefresh}
          refreshing={refreshing}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.4}
          ListFooterComponent={
            isLoadingMore ? (
              <View style={{ paddingVertical: 24 }}>
                <ActivityIndicator size="large" color="#999999" style={{ transform: [{ scale: 0.9 }] }} />
              </View>
            ) : null
          }
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
