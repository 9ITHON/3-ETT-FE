import useCameraPermission from "@/features/capture/hooks/useCameraPermission";
import { useURIContext } from "@/features/capture/context/URIContext";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CapturePreview, Capture } from "@/components";

const PhotoCapture = () => {
  useCameraPermission();

  const { photoURI } = useURIContext();
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-background">
        {photoURI ? <CapturePreview /> : <Capture />}
      </View>
    </SafeAreaView>
  );
};

export default PhotoCapture;
