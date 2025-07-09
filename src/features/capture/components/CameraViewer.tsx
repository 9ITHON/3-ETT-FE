import { CameraView } from "expo-camera";
import { RefObject } from "react";
import { FlashType } from "../hooks/useCamera";
import Animated from "react-native-reanimated";
import { useZoom } from "../hooks";
import { GestureDetector } from "react-native-gesture-handler";

type Props = {
  cameraRef: RefObject<CameraView | null>;
  flashMode: FlashType;
};

const AnimatedCameraView = Animated.createAnimatedComponent(CameraView);

const CameraViewer = ({ cameraRef, flashMode }: Props) => {
  const { pinchGesture, zoomAnimateProps } = useZoom();

  return (
    <GestureDetector gesture={pinchGesture}>
      <AnimatedCameraView
        ref={cameraRef}
        className="flex-1"
        facing="back"
        animateShutter
        animatedProps={zoomAnimateProps}
        flash={flashMode}
      />
    </GestureDetector>
  );
};

export default CameraViewer;
