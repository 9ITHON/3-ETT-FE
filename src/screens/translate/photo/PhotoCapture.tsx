import CapturePreview from "@/features/capture/components/CapturePreview";
import { useURIContext } from "@/features/capture/context/URIContext";
import { CameraView, useCameraPermissions } from "expo-camera";
import { Image } from "expo-image";
import { useEffect, useRef, useState } from "react";
import { Alert, Linking, Text, TouchableOpacity, View } from "react-native";

const PhotoCapture = () => {
  // permission
  const [permission, requestPermission] = useCameraPermissions();

  const checkPermissions = async () => {
    if (!permission) return;

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
        requestPermission();
      }
    }
  };

  useEffect(() => {
    checkPermissions();
  }, [permission]);

  // camera
  const cameraRef = useRef<CameraView>(null);
  const { photoURI, setPhotoURI } = useURIContext();

  const takePhoto = async () => {
    const photo = await cameraRef.current?.takePictureAsync();
    if (photo?.uri) {
      setPhotoURI(photo.uri);
    }
  };

  return (
    <View className="flex-1">
      {photoURI ? ( // TODO: seperate here
        <CapturePreview />
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
