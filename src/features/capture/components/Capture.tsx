import { CameraView } from "expo-camera";
import { useRef } from "react";
import { TouchableOpacity, View } from "react-native";
import { useURIContext } from "../context/URIContext";

const Capture = () => {
  const cameraRef = useRef<CameraView>(null);

  const { setPhotoURI } = useURIContext();

  const takePhoto = async () => {
    const photo = await cameraRef.current?.takePictureAsync();
    if (photo?.uri) {
      setPhotoURI(photo.uri);
    }
  };

  return (
    <>
      <CameraView // FIXME: custom here
        ref={cameraRef}
        className="flex-1"
        facing={"back"}
        zoom={1}
        animateShutter={true}
        // flash={flash}
      />
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
