import { SCREEN } from "@/constants/screen";
import { useURIContext } from "@/features/capture";
import { RootStackParamList } from "@/navigation/Navigation";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image } from "expo-image";
import { Text, TouchableOpacity, View } from "react-native";

type Navigation = NativeStackNavigationProp<
  RootStackParamList,
  typeof SCREEN.TranslateViewer
>;

const CapturePreview = () => {
  const { photoURI, setPhotoURI } = useURIContext();
  if (!photoURI) return; // guard

  const navigation = useNavigation<Navigation>();
  const payload = { type: "picture", uri: photoURI } as const;

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
        onPress={() => navigation.navigate(SCREEN.TranslateViewer, { payload })}
      >
        <Text className="font-semibold text-white">다음</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CapturePreview;
