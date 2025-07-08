import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { SCREEN } from "@/constants/screen";
import { Home, PhotoCapture, TextInput } from "@/screens";

export type RootStackParamList = {
  [SCREEN.Home]: undefined;
  [SCREEN.PhotoCapture]: undefined;
  [SCREEN.TextInput]: undefined;
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
          name={SCREEN.TextInput}
          component={TextInput}
          options={{ title: "문장 입력" }}
        />
        <Stack.Screen
          name={SCREEN.PhotoCapture}
          component={PhotoCapture}
          options={{ title: "문서 사진 촬영" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
