import { Gesture } from "react-native-gesture-handler";
import { useSharedValue, useAnimatedProps } from "react-native-reanimated";

const ZOOM_VALUE = {
  min: 0,
  max: 1,
  speed: 0.02,
} as const;

const useZoom = () => {
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

  return { pinchGesture, zoomAnimateProps };
};

export default useZoom;
