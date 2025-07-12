import { useCamera, usePickLibrary } from "@/features/capture";
import CameraViewer from "./CameraViewer";
import { Text, TouchableOpacity, View } from "react-native";
import { Header } from "@/components/layout";
import { AlbumSvg, CameraSvg, FlashSvg } from "@/components/atom/svg";

const Capture = () => {
  const { cameraRef, capture, flashMode, toggleFlash } = useCamera();
  const pickPicture = usePickLibrary();
  return (
    <>
      <Header title="문서 사진 촬영" />
      <View className="h-[540px]">
        <CameraViewer cameraRef={cameraRef} flashMode={flashMode} />
      </View>

      <View className="flex-row items-center justify-around px-8 py-[20px] bg-background">
        {/* 사진첩 */}
        <TouchableOpacity
          onPress={pickPicture}
          className="items-center justify-center w-[84px] aspect-square "
        >
          <AlbumSvg />
          <Text className=" text-center text-[#3F6AAF]">사진첩</Text>
        </TouchableOpacity>

        {/* 촬영 */}
        <TouchableOpacity
          onPress={capture}
          className="items-center justify-center w-[84px] aspect-square bg-white rounded-full shadow"
        >
          <CameraSvg />
        </TouchableOpacity>

        {/* 플래시 */}
        <TouchableOpacity
          onPress={toggleFlash}
          className="items-center justify-center w-[84px] aspect-square "
        >
          <FlashSvg />
          <Text className="mt-2 text-center text-[#3F6AAF]">플래쉬</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Capture;
