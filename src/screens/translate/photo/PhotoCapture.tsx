import { CameraView, useCameraPermissions } from "expo-camera";
import { Image } from "expo-image";
import { useEffect, useRef, useState } from "react";
import { Alert, Linking, Text, TouchableOpacity, View } from "react-native";

const PhotoCapture = () => {
  // permission
  const [permission, requestPermission] = useCameraPermissions();

  const checkPermissions = async () => {
    if (!permission) return; // 권한 정보가 없으면 리턴

    if (permission.status !== "granted") {
      if (!permission.canAskAgain) {
        Alert.alert(
          "권한 필요",
          "앱 설정에서 카메라 권한을 변경해주세요.",
          [
            { text: "취소", style: "cancel" },
            {
              text: "설정 열기",
              onPress: () => {
                Linking.openSettings();
              },
            },
          ],
          { cancelable: false }
        );
      } else {
        // 권한을 다시 요청할 수 있을 때
        requestPermission();
      }
    }
  };

  useEffect(() => {
    checkPermissions();
  }, [permission]);

  // picture
  const [photoUri, setPhotoUri] = useState<string | null>(null);

  // camera
  const cameraRef = useRef<CameraView>(null);

  const takePhoto = async () => {
    const photo = await cameraRef.current?.takePictureAsync();
    if (photo?.uri) {
      setPhotoUri(photo.uri);
    }
  };

  return (
    <View className="flex-1">
      {photoUri ? ( // TODO: seperate here
        <View className="flex-1">
          <Image source={{ uri: photoUri }} className="flex-1" />
          <TouchableOpacity
            className="px-4 py-2 rounded-lg border border-[#558BCF]"
            onPress={() => setPhotoUri(null)}
          >
            <Text className="text-[#558BCF] font-semibold">다시 촬영</Text>
          </TouchableOpacity>
          <TouchableOpacity className="px-4 py-2 rounded-lg bg-[#558BCF]">
            <Text className="font-semibold text-white">다음</Text>
          </TouchableOpacity>
        </View>
      ) : (
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
      )}
    </View>
  );
};

export default PhotoCapture;
