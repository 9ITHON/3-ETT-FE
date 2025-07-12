import { View, Text, TouchableOpacity, Image, ViewProps } from "react-native";
import { useState } from "react";
import UserSetting from "./UserSetting";
import { useAuthStore } from "@/store/useAuthStore";

type HeaderBarProps = ViewProps & {
  className?: string;
};

const HeaderBar = ({ className, ...rest }: HeaderBarProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isLoggedIn } = useAuthStore(); // Zustand에서 가져오기

  return (
    <>
      {/* Header */}
      <View
        className={`w-full px-6 pt-14 pb-4 flex-row justify-between items-center ${className ?? ""}`}
        {...rest}
      >
        <Text
          style={{
            fontFamily: "NanumSquareRoundOTF",
            fontWeight: "700",
            fontSize: 20,
            lineHeight: 28,
          }}
          className="text-[#558BCF]"
        >
          쉬운말 번역기
        </Text>

        <TouchableOpacity onPress={() => setIsSidebarOpen(true)}>
          <Image
            source={require("../../../assets/images/user-setting-icon.png")}
            style={{ width: 32, height: 32 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      {/* 사이드바 */}
      {isSidebarOpen && (
        <UserSetting
          isLoggedIn={isLoggedIn} // Zustand 값 주입
          onClose={() => setIsSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default HeaderBar;
