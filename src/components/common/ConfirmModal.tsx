import React from "react";
import { View, Text, TouchableOpacity, Modal, Pressable } from "react-native";
import { BlurView } from "expo-blur";

interface ConfirmModalProps {
  visible: boolean;
  title: string;
  onCancel: () => void;
  onConfirm: () => void;
  children?: React.ReactNode;
}

const ConfirmModal = ({ visible, title, onCancel, onConfirm, children }: ConfirmModalProps) => {
  return (
    <Modal transparent animationType="fade" visible={visible}>
      <View className="flex-1 justify-center items-center bg-black/75">
        {/* 블러 백그라운드 */}
        <BlurView intensity={50} className="absolute inset-0" tint="dark" />

        {/* 모달 카드 */}
        <View className="bg-white rounded-2xl p-5 w-[320px] shadow-md">
          {/* 타이틀 */}
          <Text className="font-[NanumSquareRoundOTFB] font-extrabold text-[24px] leading-[36px] text-center text-[#333333] mb-5">
            {title}
          </Text>
          
          {/* children이 전달되면 표시 */}
          {children}

          {/* 버튼 그룹 */}
          <View className="flex-row justify-between">
            <Pressable
              onPress={onCancel}
              className="flex-1 bg-[#F4F5F7] border border-[#D3D8E1] rounded-lg py-3.5 mr-4 justify-center items-center"
            >
              <Text className="font-[NanumSquareRoundOTFB] font-bold text-[20px] leading-[28px] text-[#333333]">
                아니요
              </Text>
            </Pressable>

            <Pressable
              onPress={onConfirm}
              className="flex-1 bg-[#558BCF] rounded-lg py-2 justify-center items-center"
            >
              <Text className="font-[NanumSquareRoundOTFB] font-bold text-[20px] leading-[28px] text-white">
                예
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmModal;
