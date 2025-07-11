import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import UserSettingItem from "@/components/common/UserSettingItem";

type UserSettingProps = {
  isLoggedIn: boolean;
  onClose: () => void;
};

const UserSetting = ({ isLoggedIn, onClose }: UserSettingProps) => {
  return (
    <SafeAreaView
      className="absolute top-0 right-0 w-[300px] h-full bg-white shadow-lg z-50"
      style={{ width: 280 }}
      edges={["top", "right"]}
    >
      {/* 닫기 버튼 */}
      <View className="items-end mt-12 mr-5">
        <TouchableOpacity
        onPress={onClose}
        style={{
            position: "absolute",
            top: -40,
            right: 0,
            width: 32,
            height: 32,
            zIndex: 10,
        }}
        >
        <Image
            source={require("../../../assets/images/setting-close-icon.png")}
            style={{ width: 32, height: 32 }}
        />
        </TouchableOpacity>
      </View>

      {isLoggedIn ? (
        // 로그인된 경우
        <View className="mt-8">
          <View className="flex-row items-center mb-6 px-6">
            <Image
              source={require("../../../assets/images/sample-profile.png")}
              className="w-12 h-12 rounded-full mr-3"
            />
            <View>
              <View className="bg-[#FFE558] rounded px-2 py-0.5 mb-1 self-start">
                <Text className="text-xs font-bold text-[#333]">카카오</Text>
              </View>
              <Text className="font-bold text-base text-[#333]">쉬우니 님</Text>
            </View>
          </View>

          {/* 메뉴 */}
          <View className="border-t border-gray-200 mt-10">
            <TouchableOpacity>
              <UserSettingItem label="쉬운말 변환 기록" onPress={() => console.log("쉬운말 변환 기록")} />
            </TouchableOpacity>
            <TouchableOpacity>
              <UserSettingItem label="로그아웃" onPress={() => console.log("로그아웃")} />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        // 로그인되지 않은 경우
        <View className="mt-5">
            <View
            style={{ alignSelf: "flex-start", position: "relative" }}
            >
            <Text
                className="pl-6"
                style={{
                fontFamily: "NanumSquareRoundOTFB",
                fontWeight: "800",
                fontSize: 24,
                lineHeight: 36,
                color: "#333333",
                }}
            >
                로그인을 해주세요.
            </Text>

            {/* 밑줄 View */}
            <View
                className="ml-6"
                style={{
                position: "absolute",
                bottom: 4, // 글자 아래 간격
                left: 0,
                right: 0,
                height: 1,
                backgroundColor: "#333333",
                }}
            />
            </View>
            <Text
            style={{
                fontFamily: "Pretendard",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: 16,
                lineHeight: 19,
                color: "#333333",
            }}
            className="mb-9 mt-3 pl-6"
            >
            카카오로 로그인하면 쉬운말로{"\n"}
            번역한 결과를 저장하고, 필요할 때{"\n"}
            저장했던 기록을 다시 볼 수 있어요.
          </Text>
          <View className="border-t border-gray-200">
            <TouchableOpacity>
                <UserSettingItem label="카카오로 로그인" onPress={() => console.log("카카오로 로그인")} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default UserSetting;
