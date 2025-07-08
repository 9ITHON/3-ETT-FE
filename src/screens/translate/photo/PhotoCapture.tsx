import Capture from "@/features/capture/components/Capture";
import CapturePreview from "@/features/capture/components/CapturePreview";
import { useURIContext } from "@/features/capture/context/URIContext";
import useCameraPermission from "@/features/capture/hooks/useCameraPermission";

import { View } from "react-native";

const PhotoCapture = () => {
  useCameraPermission();

  const { photoURI } = useURIContext();

  return (
    <View className="flex-1">
      {photoURI ? <CapturePreview /> : <Capture />}
    </View>
  );
};

export default PhotoCapture;
