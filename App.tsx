import { URIProvider } from "@/features/capture/context/URIContext";
import Navigation from "@/navigation/Navigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <URIProvider>
        <Navigation />
      </URIProvider>
    </GestureHandlerRootView>
  );
}
