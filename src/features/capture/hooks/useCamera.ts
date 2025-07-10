import { useRef, useState } from "react";
import { CameraView } from "expo-camera";
import { useURIContext } from "../context";
import { requestOCR } from "@/features/ocr/api/requestOCR";
import getExtensionFromURI from "../utils/getExtensionFromURI";

export type FlashType = "off" | "on"; // "off" is default value.

const useCamera = () => {
  // camera ref
  const cameraRef = useRef<CameraView>(null);

  // capture
  const { setPhotoURI } = useURIContext();
  const capture = async () => {
    const photo = await cameraRef.current?.takePictureAsync();
    if (photo?.uri) {
      setPhotoURI(photo.uri); // height, width, format(png, jpg), uri
    }
  };

  // flash
  const [flashMode, setFlashMode] = useState<FlashType>("off");
  const toggleFlash = () => {
    setFlashMode((prev) => (prev === "off" ? "on" : "off"));
  };

  return { cameraRef, capture, flashMode, toggleFlash };
};

export default useCamera;
