import { GestureDetector, Gesture } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedProps,
} from "react-native-reanimated";
import { CameraView } from "expo-camera";
import useCamera from "../hooks/useCamera";
import { TouchableOpacity, View } from "react-native";

const AnimatedCameraView = Animated.createAnimatedComponent(CameraView);

const ZOOM_VALUE = {
  min: 0,
  max: 1,
  speed: 0.02,
} as const;

const Capture = () => {
  const { cameraRef, takePhoto } = useCamera();
  const zoom = useSharedValue<number>(ZOOM_VALUE.min);

  const pinchGesture = Gesture.Pinch().onUpdate((event) => {
    zoom.value = Math.min(
      Math.max(0, zoom.value + (event.scale - 1) * ZOOM_VALUE.speed),
      ZOOM_VALUE.max
    );
  });

  const zoomAnimateProps = useAnimatedProps(() => ({
    zoom: zoom.value,
  }));

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
