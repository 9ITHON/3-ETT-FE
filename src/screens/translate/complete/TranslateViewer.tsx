import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "@/navigation/Navigation";
import { SCREEN } from "@/constants/screen";
import { translate } from "@/features/translate";
import { JSX, useCallback, useEffect, useState } from "react";
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
type TranslateStatus = "loading" | "success" | "error";

const TranslateViewer = () => {
  const { payload } = useRoute<TranslateScreenRouteProp>().params;

  // 번역 상태
  const [translateStatus, setTranslateStatus] =
    useState<TranslateStatus>("loading");

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

  const TranslateStatusMapper: Record<TranslateStatus, JSX.Element> = {
    loading: <TranslateLoading />,
    error: <TranslateError onRetry={runTranslate} />,
    success: (
      <TranslateSuccess easyText={easyText ?? ""} onRetry={runTranslate} />
    ),
  };

  return TranslateStatusMapper[translateStatus];
};

export default TranslateViewer;
