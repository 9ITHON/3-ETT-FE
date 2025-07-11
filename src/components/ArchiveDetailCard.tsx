import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import ConfirmModal from "@/components/common/ConfirmModal";

type Props = {
  date: string;
  content: string;
  title: string;
};

const ArchiveDetailCard = ({ date, content, title }: Props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleDelete = () => {
    setIsModalVisible(false);
    // TODO: 삭제 로직 처리 (예: Zustand, API 등)
    console.log("기록 삭제 완료");
  };

  return (
    <View className="px-6 pb-10 w-full">
      {/* 날짜 */}
      <Text
        style={{
            fontFamily: "Pretendard",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: 16,
            lineHeight: 19,
            color: "#999999",
        }}
        className="mb-3"
        >
        {date}
        </Text>

      {/* 텍스트 박스 */}
      <LinearGradient
        colors={["#FFFFFF", "#FFFFFF", "rgba(255,255,255,0.75)", "rgba(255,255,255,0)"]}
        locations={[0, 0.5, 0.75, 1]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={{
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            padding: 1.2,
            marginBottom: 24,
            height: 450,
        }}
        >
        <View
            style={{
            flex: 1,
            backgroundColor: "white",
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            padding: 16,
            }}
        >
        <ScrollView 
          showsVerticalScrollIndicator={true}
          persistentScrollbar={true}
        >
            <Text
            className="mb-2"
            style={{
                fontFamily: "Pretendard",
                fontSize: 18,
                lineHeight: 30,
                fontWeight: "700",
                color: "#333333",
            }}
            >
            {title}
            </Text>
            <Text
                style={{
                fontFamily: "Pretendard",
                fontSize: 18,
                lineHeight: 28,
                color: "#333333",
                }}
            >
                {content}
            </Text>
            </ScrollView>
        </View>
        </LinearGradient>

      {/* 복사/공유 버튼 그룹 */}
      <View className="flex-row justify-between mb-4">
        <TouchableOpacity
          className="w-[48%] flex-row justify-center items-center px-10 py-3 rounded-[8px] bg-white border"
          style={{ borderColor: "#D3D8E1", borderWidth: 1.2 }}
        >
          <Text
            style={{
              fontFamily: "NanumSquareRoundOTFB",
              fontSize: 20,
              fontWeight: "700",
              lineHeight: 28,
              color: "#3F6AAF",
            }}
          >
            복사하기
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="w-[48%] flex-row justify-center items-center px-10 py-3 rounded-[8px] bg-white border"
          style={{ borderColor: "#D3D8E1", borderWidth: 1.2 }}
        >
          <Text
            style={{
              fontFamily: "NanumSquareRoundOTFB",
              fontSize: 20,
              fontWeight: "700",
              lineHeight: 28,
              color: "#3F6AAF",
            }}
          >
            공유하기
          </Text>
        </TouchableOpacity>
      </View>

      {/* 삭제 버튼 */}
      <TouchableOpacity
        onPress={() => setIsModalVisible(true)}
        className="flex-row justify-center items-center px-4 py-[14px] mt-1"
        style={{
          backgroundColor: "#558BCF",
          borderRadius: 100,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.08,
          shadowRadius: 4,
          elevation: 2,
        }}
      >
        <Text
          style={{
            fontFamily: "NanumSquareRoundOTFB",
            fontSize: 20,
            fontWeight: "700",
            lineHeight: 28,
            color: "#FFFFFF",
          }}
        >
          기록 삭제하기
        </Text>
      </TouchableOpacity>
        <ConfirmModal
        visible={isModalVisible}
        title="정말 삭제할까요?"
        onCancel={() => setIsModalVisible(false)}
        onConfirm={handleDelete}
        >
        {/* 추가 안내 문구 */}
        <Text className="text-center text-[#999] text-base mb-5 -mt-3 font-[Pretendard]">
            삭제한 기록은 복구할 수 없어요.
        </Text>
        </ConfirmModal>
    </View>
  );
};

export default ArchiveDetailCard;
