import { CameraView } from "expo-camera";
import { RefObject } from "react";
import Animated from "react-native-reanimated";
import { GestureDetector } from "react-native-gesture-handler";
import { FlashType } from "@/features/capture/hooks/useCamera";
import { useZoom } from "@/features/capture";

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
