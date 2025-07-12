import React, { useCallback, useEffect, useState } from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "@/navigation/Navigation";
import { SCREEN } from "@/constants/screen";
import {
  TranslateError,
  TranslateLoading,
  TranslateSuccess,
} from "@/components";
import { MockTranslatedText } from "@/api/mock/mockData";

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
    useState<TranslateStatus>("error");

  // 번역 결과물
  const [easyText, setEasyText] = useState<string | null>(MockTranslatedText); // 성공을 위한 임시 텍스트

  const runTranslation = useCallback(async () => {
    setTranslateStatus("loading");
    try {
      // const easyText = await translate(payload); // clova api 호출을 막기 위한 주석
      setEasyText(easyText);
      // throw new Error(); // error 처리를 위한 주석
      setTranslateStatus("success");
    } catch (e) {
      setTranslateStatus("error");
    }
  }, [payload]);

  useEffect(() => {
    runTranslation();
  }, [runTranslation]);

  const TranslateStatusMapper: Record<TranslateStatus, any> = {
    loading: <TranslateLoading />,
    error: <TranslateError onRetry={runTranslation} />,
    success: (
      <TranslateSuccess 
        easyText={easyText ?? ""} 
        onRetry={runTranslation}
        enableTypewriter={true}
      />
    ),
  };

  return TranslateStatusMapper[translateStatus];
};

export default TranslateViewer;
