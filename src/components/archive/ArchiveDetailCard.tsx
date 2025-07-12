import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, TouchableOpacity, ScrollView, Share } from "react-native";
import ConfirmModal from "@/components/common/ConfirmModal";
import { useArchiveStore } from "@/store/useArchiveStore";
import { useNavigation } from "@react-navigation/native";
import useToggleTextSize from "@/hooks/useToggleTextSize";
import * as Clipboard from "expo-clipboard";
import { Alert } from "react-native";
import { deleteArchive } from "@/api/archive";

type Props = {
  id: string;
  date: string;
  content: string;
  title: string;
};

const ArchiveDetailCard = ({ id, date, content, title }: Props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const deleteByDate = useArchiveStore((state) => state.deleteByDate);
  const navigation = useNavigation();
  const { textSize, toggleTextSize } = useToggleTextSize();

const handleDelete = async () => {
  try {
    await deleteArchive(id); // API 요청
    Alert.alert("삭제 완료", "기록이 삭제되었습니다.");
    navigation.goBack(); // 뒤로 가기
  } catch (error) {
    console.error("삭제 실패:", error);
    Alert.alert("삭제 실패", "다시 시도해주세요.");
  } finally {
    setIsModalVisible(false);
  }
};

  return (
    <View className="px-6 pb-10 w-full">
      {/* 날짜 */}
      <View className="flex-row justify-between items-center mb-3">
        <Text
          style={{
            fontFamily: "Pretendard",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: 16,
            lineHeight: 19,
            color: "#999999",
          }}
        >
          {date}
        </Text>

        {/* 글자 크기 조절 */}
        <TouchableOpacity
          onPress={toggleTextSize}
          className="flex-row items-center px-3 py-2 bg-white rounded-full"
        >
          <Text
            className={`text-[15.5px] mr-1 ${
              textSize === "base" ? "font-bold" : "font-normal"
            }`}
          >
            가
          </Text>
          <Text className="text-sm text-gray-500">|</Text>
          <Text
            className={`text-[18px] ml-1 ${
              textSize === "lg" ? "font-bold" : "font-normal"
            }`}
          >
            가
          </Text>
        </TouchableOpacity>
      </View>

      {/* 텍스트 박스 */}
      <LinearGradient
        colors={["#FFFFFF", "rgba(255,255,255,0.75)", "rgba(255,255,255,0)"]}
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
                fontSize: textSize === "base" ? 18 : 22,
                lineHeight: textSize === "base" ? 30 : 34,
                fontWeight: "700",
                color: "#333333",
              }}
            >
              {title}
            </Text>

            <Text
              style={{
                fontFamily: "Pretendard",
                fontSize: textSize === "base" ? 18 : 22,
                lineHeight: textSize === "base" ? 28 : 32,
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
          onPress={() => {
            Clipboard.setStringAsync(content);
            Alert.alert("복사 완료", "내용이 클립보드에 복사되었어요!");
          }}
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
          onPress={async () => {
            try {
              await Share.share({
                message: `${title}\n\n${content}`,
              });
            } catch (error) {
              console.error("공유 실패:", error);
            }
          }}
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
        <Text className="text-center text-[#999] text-base mb-5 -mt-3 font-[Pretendard]">
          삭제한 기록은 복구할 수 없어요.
        </Text>
      </ConfirmModal>
    </View>
  );
};

export default ArchiveDetailCard;
