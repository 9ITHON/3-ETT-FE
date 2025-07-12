import { useCamera, usePickLibrary } from "@/features/capture";
import CameraViewer from "./CameraViewer";
import { TouchableOpacity, View } from "react-native";
import { Header } from "@/components/layout";

const Capture = () => {
  const { cameraRef, capture, flashMode, toggleFlash } = useCamera();
  const pickPicture = usePickLibrary();
  return (
    <>
      <Header title="문서 사진 촬영" showCallback={false} />
      <View className="h-[540px]">
        <CameraViewer cameraRef={cameraRef} flashMode={flashMode} />
      </View>

      {/*  camera view under section */}
      <View className="flex-row items-center justify-around px-8 py-4 bg-background">
        <TouchableOpacity
          onPress={pickPicture}
          className="items-center justify-center w-16 h-16 rounded-full shadow bg-slate-400"
        >
          <View className="w-8 h-8" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={capture}
          className="items-center justify-center w-16 h-16 bg-white rounded-full shadow"
        >
          <View className="w-8 h-8" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={toggleFlash}
          className="items-center justify-center w-16 h-16 rounded-full shadow bg-slate-400"
        >
          <View className="w-8 h-8" />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Capture;
