import useCamera from "../hooks/useCamera";
import { CameraView } from "expo-camera";
import { TouchableOpacity, View } from "react-native";

const Capture = () => {
  const { cameraRef, takePhoto } = useCamera();

  return (
    <>
      <CameraView // FIXME: custom here
        ref={cameraRef}
        className="flex-1"
        facing={"back"}
        zoom={1}
        animateShutter={true}
        // flash={flash}
      />
      <View className="flex-row items-center justify-around px-8 py-4 bg-white">
        <TouchableOpacity>
          <View className="w-8 h-8" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={takePhoto}
          className="items-center justify-center w-16 h-16 bg-white rounded-full shadow"
        >
          <View className="w-8 h-8" />
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="w-8 h-8" />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Capture;
