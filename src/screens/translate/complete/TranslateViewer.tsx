import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "@/navigation/Navigation";
import { SCREEN } from "@/constants/screen";
import { translate } from "@/features/translate";
import { useCallback, useEffect, useState } from "react";
import {
  TranslateError,
  TranslateLoading,
  TranslateSuccess,
} from "@/components";

// type
type TranslateScreenRouteProp = RouteProp<
  RootStackParamList,
  typeof SCREEN.TranslateViewer
>;
type translateStatus = "loading" | "success" | "error";

const TranslateViewer = () => {
  const { payload } = useRoute<TranslateScreenRouteProp>().params;

  // 번역 상태
  const [translateStatus, setTranslateStatus] =
    useState<translateStatus>("loading");

  // 번역 결과물
  const [easyText, setEasyText] = useState<string | null>(null);

  const runTranslate = useCallback(async () => {
    setTranslateStatus("loading");
    try {
      const easyText = await translate(payload);
      setEasyText(easyText);
      setTranslateStatus("success");
    } catch (e) {
      setTranslateStatus("error");
    }
  }, [payload]);

  useEffect(() => {
    runTranslate();
  }, [runTranslate]);

  if (translateStatus === "loading") return <TranslateLoading />;
  if (translateStatus === "error")
    return <TranslateError onRetry={runTranslate} />;
  return <TranslateSuccess easyText={easyText} onRetry={runTranslate} />;
};

export default TranslateViewer;
