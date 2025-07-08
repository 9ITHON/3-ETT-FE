import { createContext, PropsWithChildren, useContext, useState } from "react";

interface URIContextType {
  photoURI: string | null;
  setPhotoURI: React.Dispatch<React.SetStateAction<string | null>>;
}

const URIContext = createContext<URIContextType | undefined>(undefined);

export const URIProvider = ({ children }: PropsWithChildren) => {
  const [photoURI, setPhotoURI] = useState<string | null>(null);

  return (
    <URIContext.Provider value={{ photoURI, setPhotoURI }}>
      {children}
    </URIContext.Provider>
  );
};

export const useURIContext = () => {
  const context = useContext(URIContext);
  if (!context) {
    throw new Error("useURIContext must be used within a URIProvider");
  }
  return context;
};
