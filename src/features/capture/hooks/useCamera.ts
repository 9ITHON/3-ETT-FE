import { useRef, useState } from "react";
import { CameraView } from "expo-camera";
import { useURIContext } from "../context";

export type FlashType = "off" | "on";

const useCamera = () => {
  // camera ref
  const cameraRef = useRef<CameraView>(null);

  // capture
  const { setPhotoURI } = useURIContext();
  const takePhoto = async () => {
    const photo = await cameraRef.current?.takePictureAsync();
    if (photo?.uri) {
      setPhotoURI(photo.uri);
    }
  };

  // flash
  const [flashMode, setFlashMode] = useState<FlashType>("off");
  const toggleFlash = () => {
    setFlashMode((prev) => (prev === "off" ? "on" : "off"));
  };

  return { cameraRef, takePhoto, flashMode, toggleFlash };
};

export default useCamera;
