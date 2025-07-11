import { View, Text, TouchableOpacity, Image, ViewProps } from "react-native";
import { styled } from "nativewind";

type HeaderBarProps = ViewProps & {
  className?: string;
};

const HeaderBar = ({ className, ...rest }: HeaderBarProps) => {
  return (
    <View
      className={`w-full px-6 pt-10 pb-4 flex-row justify-between items-center ${className ?? ""}`}
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

      <TouchableOpacity onPress={() => {}}>
        <Image
          source={require("../../assets/images/user-setting-icon.png")}
          style={{ width: 32, height: 32 }}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderBar;
