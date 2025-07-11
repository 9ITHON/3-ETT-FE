import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { SCREEN } from "@/constants/screen";
import { Home, Loading, PhotoCapture, TextInputViewer } from "@/screens";

export type RootStackParamList = {
  [SCREEN.Home]: undefined;
  [SCREEN.PhotoCapture]: undefined;
  [SCREEN.TextInputViewer]: undefined;
  [SCREEN.Loading]: undefined;
};

export type ScreenType = keyof RootStackParamList;

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name={SCREEN.Home}
          component={Home}
          options={{ title: "홈" }}
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
          name={"Loading"}
          component={Loading}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
