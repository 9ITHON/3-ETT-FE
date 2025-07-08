import { Image } from "expo-image";
import { Text, TouchableOpacity, View } from "react-native";
import { useURIContext } from "../context/URIContext";

const CapturePreview = () => {
  const { photoURI, setPhotoURI } = useURIContext();

  return (
    <View className="flex-1">
      <Image source={{ uri: photoURI as string }} className="flex-1" />
      <TouchableOpacity
        className="px-4 py-2 rounded-lg border border-[#558BCF]"
        onPress={() => setPhotoURI(null)}
      >
        <Text className="text-[#558BCF] font-semibold">다시 촬영</Text>
      </TouchableOpacity>
      <TouchableOpacity className="px-4 py-2 rounded-lg bg-[#558BCF]">
        <Text className="font-semibold text-white">다음</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CapturePreview;
