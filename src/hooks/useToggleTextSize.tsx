import { useState, useCallback } from "react";

export type TextSize = "base" | "lg";

const useToggleTextSize = (initialSize: TextSize = "base") => {
  const [textSize, setTextSize] = useState<TextSize>(initialSize);

  const toggleTextSize = useCallback(() => {
    setTextSize((prev) => (prev === "base" ? "lg" : "base"));
  }, []);

  return { textSize, toggleTextSize };
};

export default useToggleTextSize;
