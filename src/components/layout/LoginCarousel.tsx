import React from "react";
import { View, Text, Image, Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const carouselData = [
  {
    image: require("@/../assets/images/login-carousel1.png"),
    text: "생소한 단어가 많아\n이해하기 어려웠던 공공문서,\n이젠 쉬운말로 번역해요!",
  },
  {
    image: require("@/../assets/images/login-carousel2.png"),
    text: "어려운 문서의\n 사진만 찍으면\n 쉬운 말로 바뀌어요!",
  },
  {
    image: require("@/../assets/images/login-carousel3.png"),
    text: "카카오로 로그인하면\n 번역한 내용을 저장해두고\n 필요할 때 다시 볼 수 있어요.",
  },
];

type Props = {
  carouselRef: any;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
};

const LoginCarousel = ({ carouselRef, setActiveIndex }: Props) => {
  return (
    <View
      className="items-center w-full"
      style={{ backgroundColor: "rgba(230, 237, 252, 1)", height: 500 }}
    >
      <Carousel
        ref={carouselRef}
        width={SCREEN_WIDTH}
        height={500}
        data={carouselData}
        scrollAnimationDuration={500}
        onSnapToItem={(index) => setActiveIndex(index)}
        renderItem={({ item, index }) => (
          <View
            className="w-full"
            style={{
              height: 500,
              paddingTop: 60,
              paddingBottom: 28,
              paddingHorizontal: index === 1 ? 0 : 16,
              alignItems: index === 1 ? "flex-start" : "center",
              justifyContent: "flex-start",
              position: "relative",
            }}
          >
            <Text
              className="text-center font-bold text-[20px] leading-[28px] mb-[28px] w-full"
              style={{
                fontFamily: "NanumSquareRoundOTF",
                color: "#333333",
              }}
            >
              {item.text}
            </Text>

            <Image
              source={item.image}
              className={index === 1 ? undefined : "w-[320px] h-[328px]"}
              style={
                index === 1
                  ? {
                      width: 331,
                      height: 328,
                      marginLeft: 0,
                      position: "absolute",
                      bottom: -3,
                      left: 0,
                    }
                  : {}
              }
              resizeMode="contain"
            />
          </View>
        )}
      />
    </View>
  );
};

export default LoginCarousel;
