import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ArchiveHeader from "@/components/archive/ArchiveHeader";
import ArchiveDetailCard from "@/components/archive/ArchiveDetailCard";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "@/navigation/Navigation";

type DetailRoute = RouteProp<RootStackParamList, "ArchiveDetail">;

const ArchiveDetailScreen = () => {
  const route = useRoute<DetailRoute>();
  const { id, date, content, title } = route.params;

  return (
    <SafeAreaView className="flex-1 bg-[#F4F5F7]">
      <ArchiveHeader />
      <ArchiveDetailCard id={id} date={date} content={content} title={title} />
    </SafeAreaView>
  );
};

export default ArchiveDetailScreen;