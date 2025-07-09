import { useCamera } from "../hooks";
import usePickLibrary from "../hooks/usePickLibrary";
import CameraViewer from "./CameraViewer";
import { TouchableOpacity, View } from "react-native";

const Capture = () => {
  const { cameraRef, takePhoto, flashMode, toggleFlash } = useCamera();
  const pickPicture = usePickLibrary();
  return (
    <>
      <CameraViewer cameraRef={cameraRef} flashMode={flashMode} />

      {/*  camera view under section */}
      <View className="flex-row items-center justify-around px-8 py-4 bg-white">
        <TouchableOpacity
          onPress={pickPicture}
          className="items-center justify-center w-16 h-16 rounded-full shadow bg-slate-400"
        >
          <View className="w-8 h-8" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={takePhoto}
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
