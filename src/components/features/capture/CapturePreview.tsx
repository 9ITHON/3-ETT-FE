import { Header } from "@/components/layout";
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
      <Header title="사진 선택" showCallback={false} />

      <Image source={{ uri: photoURI as string }} className=" h-[540px]" />
      <View className="flex-row mt-[20px] px-[20px] space-x-[16px] w-full">
        {/* 다시 촬영 */}
        <TouchableOpacity
          className="h-[56px] flex-1 rounded-lg border border-[#558BCF] justify-center items-center"
          onPress={() => setPhotoURI(null)}
        >
          <Text className="text-[#558BCF] text-[20px] font-semibold">
            다시 촬영
          </Text>
        </TouchableOpacity>

        {/* 다음 */}
        <TouchableOpacity
          className="h-[56px] flex-1 rounded-lg bg-[#558BCF] justify-center items-center"
          onPress={() =>
            navigation.navigate(SCREEN.TranslateViewer, { payload })
          }
        >
          <Text className="font-semibold text-white text-[20px]">다음</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CapturePreview;
