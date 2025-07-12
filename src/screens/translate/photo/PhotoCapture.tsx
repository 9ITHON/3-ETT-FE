import useCameraPermission from "@/features/capture/hooks/useCameraPermission";
import { useURIContext } from "@/features/capture/context/URIContext";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CapturePreview, Capture } from "@/components";

const PhotoCapture = () => {
  useCameraPermission();

  const { photoURI } = useURIContext();
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1">
        {photoURI ? <CapturePreview /> : <Capture />}
      </View>
    </SafeAreaView>
  );
};

export default PhotoCapture;
