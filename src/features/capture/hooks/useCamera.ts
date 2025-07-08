import { CameraView } from "expo-camera";
import { useRef } from "react";
import { useURIContext } from "../context";

const useCamera = () => {
  const cameraRef = useRef<CameraView>(null);

  const { setPhotoURI } = useURIContext();

  const takePhoto = async () => {
    const photo = await cameraRef.current?.takePictureAsync();
    if (photo?.uri) {
      setPhotoURI(photo.uri);
    }
  };

  return { cameraRef, takePhoto };
};

export default useCamera;
