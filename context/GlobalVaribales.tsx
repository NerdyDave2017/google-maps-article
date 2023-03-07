import { createContext, useState, ReactNode } from "react";

// Interface for the global variable context
interface GlobalVariableContext {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  showBanner: boolean;
  setShowBanner: (showBanner: boolean) => void;
  bannerMessage: string;
  setBannerMessage: (bannerMessage: string) => void;
}

// Type for the global variable provider
type GlobalVariableProp = {
  children: ReactNode;
};

const GlobalVariableContext = createContext<GlobalVariableContext>(
  {} as GlobalVariableContext
);

export const GlobalVariableProvider = ({ children }: GlobalVariableProp) => {
  // Global loading state
  const [loading, setLoading] = useState(false);
  // Global Banner state
  const [showBanner, setShowBanner] = useState(false);
  const [bannerMessage, setBannerMessage] = useState("");

  return (
    <GlobalVariableContext.Provider
      value={{
        loading,
        setLoading,
        showBanner,
        setShowBanner,
        bannerMessage,
        setBannerMessage,
      }}
    >
      {children}
    </GlobalVariableContext.Provider>
  );
};

export default GlobalVariableContext;
