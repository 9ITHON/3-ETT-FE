import useCameraPermission from "@/features/capture/hooks/useCameraPermission";
import { useURIContext } from "@/features/capture/context/URIContext";
import { View } from "react-native";
import { Capture, CapturePreview } from "@/features/capture";

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
