import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { SCREEN } from "@/constants/screen";
import { Home, Loading, Splash, PhotoCapture, TextInput, Login } from "@/screens";

export type RootStackParamList = {
  [SCREEN.Splash]: undefined;
  [SCREEN.Login]: undefined;
  [SCREEN.Home]: undefined;
  [SCREEN.PhotoCapture]: undefined;
  [SCREEN.TextInput]: undefined;
  [SCREEN.Loading]: undefined;
};

export type ScreenType = keyof RootStackParamList;

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SCREEN.Splash} screenOptions={{ headerShown: false }}>
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
          name={SCREEN.TextInput}
          component={TextInput}
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
