import useCameraPermission from "@/features/capture/hooks/useCameraPermission";
import { useURIContext } from "@/features/capture/context/URIContext";
import { View } from "react-native";
import { CapturePreview, Capture } from "@/components";

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
