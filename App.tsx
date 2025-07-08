import { URIProvider } from "@/features/capture/context/URIContext";
import Navigation from "@/navigation/Navigation";

export default function App() {
  return (
    <URIProvider>
      <Navigation />
    </URIProvider>
  );
}
