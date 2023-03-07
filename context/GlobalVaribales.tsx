import { createContext, useState, ReactNode } from "react";

// Interface for the global variable context
interface GlobalVariableContext {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  showBanner: boolean;
  setShowBanner: (showBanner: boolean) => void;
  bannerMessage: string;
  setBannerMessage: (bannerMessage: string) => void;
  markers: Array<IMarker>;
  setMarkers: (markers: Array<IMarker>) => void;
  addMarker: boolean;
  setAddMarker: (addMarker: boolean) => void;
}

// Type for the global variable provider
type GlobalVariableProp = {
  children: ReactNode;
};

/* This is the interface for the marker object. */
export interface IMarker {
  position: google.maps.LatLngLiteral;
  markerType?: string;
  description?: string;
}

const GlobalVariableContext = createContext<GlobalVariableContext>(
  {} as GlobalVariableContext
);

export const GlobalVariableProvider = ({ children }: GlobalVariableProp) => {
  // Global loading state
  const [loading, setLoading] = useState(false);
  // Global Banner state
  const [showBanner, setShowBanner] = useState(false);
  const [bannerMessage, setBannerMessage] = useState("");

  // Global Marker state
  const [markers, setMarkers] = useState<Array<IMarker>>([]);
  const [addMarker, setAddMarker] = useState(false);
  const [markerType, setMarkerType] = useState();

  return (
    <GlobalVariableContext.Provider
      value={{
        loading,
        setLoading,
        showBanner,
        setShowBanner,
        bannerMessage,
        setBannerMessage,
        markers,
        setMarkers,
        addMarker,
        setAddMarker,
      }}
    >
      {children}
    </GlobalVariableContext.Provider>
  );
};

export default GlobalVariableContext;
