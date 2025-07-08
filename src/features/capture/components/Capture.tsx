import Animated from "react-native-reanimated";
import { CameraView } from "expo-camera";
import { GestureDetector } from "react-native-gesture-handler";
import { useCamera, useZoom } from "../hooks";
import { TouchableOpacity, View } from "react-native";

const AnimatedCameraView = Animated.createAnimatedComponent(CameraView);

const Capture = () => {
  const { cameraRef, takePhoto } = useCamera();
  const { pinchGesture, zoomAnimateProps } = useZoom();

  return (
    <>
      <GestureDetector gesture={pinchGesture}>
        <AnimatedCameraView
          ref={cameraRef}
          className="flex-1"
          facing="back"
          animateShutter
          animatedProps={zoomAnimateProps}
        />
      </GestureDetector>

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
