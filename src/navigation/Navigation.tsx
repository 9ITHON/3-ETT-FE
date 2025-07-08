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
        <Stack.Screen name={SCREEN.Home} component={Home} />
        <Stack.Screen name={SCREEN.TextInput} component={TextInput} />
        <Stack.Screen name={SCREEN.PhotoCapture} component={PhotoCapture} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
