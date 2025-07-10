import { useURIContext } from "@/features/capture";
import { mask } from "@/features/mask/utils";
import getOcrTexts from "@/features/ocr/utils/getOcrTexts";
import { Image } from "expo-image";
import { Text, TouchableOpacity, View } from "react-native";

const CapturePreview = () => {
  const { photoURI, setPhotoURI } = useURIContext();

  const translate = async () => {
    // ocr text (hard text)
    if (!photoURI) return; // guard
    const ocrText = await getOcrTexts(photoURI);

    // mask on
    mask(ocrText);
    // server, easy text

    // mask off

    // return easy text
  };

  return (
    <View className="flex-1">
      <Image source={{ uri: photoURI as string }} className="flex-1" />
      <TouchableOpacity
        className="px-4 py-2 rounded-lg border border-[#558BCF]"
        onPress={() => setPhotoURI(null)}
      >
        <Text className="text-[#558BCF] font-semibold">다시 촬영</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="px-4 py-2 rounded-lg bg-[#558BCF]"
        onPress={translate}
      >
        <Text className="font-semibold text-white">다음</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CapturePreview;
