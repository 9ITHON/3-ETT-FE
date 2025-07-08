import { useCameraPermissions } from "expo-camera";
import { useEffect } from "react";
import { Alert, Linking } from "react-native";

const useCameraPermission = () => {
  const [permission, requestPermission] = useCameraPermissions();

  const checkPermission = async () => {
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
    checkPermission();
  }, [permission]);
};

export default useCameraPermission;
