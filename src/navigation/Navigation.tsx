import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { SCREEN } from "@/constants/screen";
import {
  Home,
  Loading,
  Splash,
  PhotoCapture,
  TextInputViewer,
  Login,
  Archive,
  ArchiveDetail,
} from "@/screens";
import { TranslatePayload } from "@/features/translate/types";
import TranslateViewer from "@/screens/translate/complete/TranslateViewer";
import FeedBack from "@/screens/feedback/FeedBack";

export type RootStackParamList = {
  [SCREEN.Splash]: undefined;
  [SCREEN.Login]: undefined;
  [SCREEN.Home]: undefined;
  [SCREEN.PhotoCapture]: undefined;
  [SCREEN.TextInputViewer]: undefined;
  [SCREEN.Loading]: undefined;
  [SCREEN.Archive]: undefined;
  [SCREEN.ArchiveDetail]: {
    id: string;
    date: string;
    content: string;
    title: string;
  };
  [SCREEN.TranslateViewer]: { payload: TranslatePayload };
  [SCREEN.FeedBack]: undefined;
};

export type ScreenType = keyof RootStackParamList;

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={SCREEN.Splash}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={SCREEN.Splash} component={Splash} />
        <Stack.Screen
          name={SCREEN.Home}
          component={Home}
          options={{ title: "홈" }}
        />
        <Stack.Screen
          name={SCREEN.Login}
          component={Login}
          options={{ title: "로그인" }}
        />
        <Stack.Screen
          name={SCREEN.TextInputViewer}
          component={TextInputViewer}
          options={{ title: "문장 입력" }}
        />
        <Stack.Screen
          name={SCREEN.PhotoCapture}
          component={PhotoCapture}
          options={{ title: "문서 사진 촬영" }}
        />
        <Stack.Screen
          name={SCREEN.TranslateViewer}
          component={TranslateViewer}
          options={{ title: "번역 결과" }}
        />
        <Stack.Screen
          name={"Loading"}
          component={Loading}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={SCREEN.Archive}
          component={Archive}
          options={{ title: "아카이브" }}
        />
        <Stack.Screen
          name={SCREEN.ArchiveDetail}
          component={ArchiveDetail}
          options={{ title: "기록 상세" }}
        />
        <Stack.Screen
          name={SCREEN.FeedBack}
          component={FeedBack}
          options={{ title: "피드백" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
