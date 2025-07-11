import { useState } from "react";
import archiveEasyText from "../api/archiveEasyText";

const useArchiveEasyText = (easyText: string) => {
  const [isArchiveSuccess, setIsArchiveSuccess] = useState(false);

  const handleArchive = () => {
    if (isArchiveSuccess) return;

    archiveEasyText(easyText).then(() => {
      setIsArchiveSuccess(true);
    });
  };

  return { isArchiveSuccess, handleArchive };
};
export default useArchiveEasyText;
