// src/features/translate/hooks/useArchiveEasyText.ts
import { useState } from "react";
import archiveEasyText from "../api/archiveEasyText";

const useArchiveEasyText = (text: string, timestamp: string) => {
  const [isArchiveSuccess, setIsArchiveSuccess] = useState(false);

  const handleArchive = () => {
    console.log("handleArchive");
    if (isArchiveSuccess) return;

    archiveEasyText({ text, timestamp }).then(() => {
      setIsArchiveSuccess(true);
      console.log("archive success");
    });
  };

  return { isArchiveSuccess, handleArchive };
};

export default useArchiveEasyText;
