import { useRef, useState } from "react";
import { CameraView } from "expo-camera";
import { useURIContext } from "../context";
import { requestOCR } from "@/features/ocr/api/requestOCR";

export type FlashType = "off" | "on"; // "off" is default value.

const useCamera = () => {
  // camera ref
  const cameraRef = useRef<CameraView>(null);

  // capture
  const { setPhotoURI } = useURIContext();
  const takePhoto = async () => {
    const photo = await cameraRef.current?.takePictureAsync();
    if (photo?.uri) {
      console.log(photo);
      //
      //____API TEST SECTION ____//

      const { texts } = await requestOCR({
        uri: photo?.uri,
        format: photo?.format,
      });
      const newText = texts.join(", ");
      console.log(newText);

      //____API TEST SECTION ____//
      //
      setPhotoURI(photo.uri); // height, width, format(png, jpg), uri
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
