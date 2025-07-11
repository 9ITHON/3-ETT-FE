import { useState } from "react";

const useInputText = () => {
  const [inputText, setInputText] = useState("");

  const isEmptyInputText = inputText.trim().length === 0;

  return { inputText, setInputText, isEmptyInputText };
};
export default useInputText;
