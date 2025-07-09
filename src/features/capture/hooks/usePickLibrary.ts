import { useURIContext } from "../context";
import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";

const checkLibraryPremission = async () => {
  const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();

  if (!granted) {
    Alert.alert("권한 필요", "사진 접근 권한이 필요합니다.");
  }

  return granted;
};

const usePickLibrary = async () => {
  const libraryGranted = await checkLibraryPremission();
  if (!libraryGranted) return;

  const { setPhotoURI } = useURIContext();

  const pickPicture = async () => {
    const pickedPicture = await ImagePicker.launchImageLibraryAsync({
      selectionLimit: 1,
      mediaTypes: "images",
    });

    if (!pickedPicture.canceled) {
      const uri = pickedPicture.assets[0].uri;
      setPhotoURI(uri);
    }
  };

  return pickPicture;
};
export default usePickLibrary;
