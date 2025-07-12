import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "@/navigation/Navigation";
import { SCREEN } from "@/constants/screen";
import { JSX, useCallback, useEffect, useState } from "react";
import {
  TranslateError,
  TranslateLoading,
  TranslateSuccess,
} from "@/components";
import { translate } from "@/features/translate";

// type
type TranslateScreenRouteProp = RouteProp<
  RootStackParamList,
  typeof SCREEN.TranslateViewer
>;

type TranslateStatus = "loading" | "success" | "error";

const TranslateViewer = () => {
  const { payload } = useRoute<TranslateScreenRouteProp>().params;

  const [translateTime, setTranslateTime] = useState<string>("");

  /** 번역 상태 */
  const [translateStatus, setTranslateStatus] =
    useState<TranslateStatus>("error");

  /** 번역 결과물 */
  const [easyText, setEasyText] = useState<string | null>(null);

  const runTranslation = useCallback(async () => {
    setTranslateStatus("loading");
    try {
      const { easyText, timestamp } = await translate(payload);
      setTranslateTime(timestamp);
      setEasyText(easyText);
      setTranslateStatus("success");
    } catch {
      setTranslateStatus("error");
    }
  }, [payload]);

  useEffect(() => {
    runTranslation();
  }, [runTranslation]);

  const TranslateStatusMapper: Record<TranslateStatus, JSX.Element> = {
    loading: <TranslateLoading />,
    error: <TranslateError onRetry={runTranslation} />,
    success: (
      <TranslateSuccess
        easyText={easyText ?? ""}
        translateTime={translateTime}
        onRetry={runTranslation}
      />
    ),
  };

  return TranslateStatusMapper[translateStatus];
};

export default TranslateViewer;
