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
  markerType: IMarkerType;
  setMarkerType: (markerType: IMarkerType) => void;
  overlayMarkers: Array<IOverlayMarkers>;
  setOverlayMarkers: (overlayMarkers: Array<IOverlayMarkers>) => void;
  mapCenter: google.maps.LatLngLiteral;
  setMapCenter: (userLocation: google.maps.LatLngLiteral) => void;
  mapInstance: google.maps.Map | undefined;
  setMapInstance: (mapInstance: google.maps.Map) => void;
  autoCompleteResponse: google.maps.places.AutocompletePrediction[] | null;
  setAutoCompleteResponse: (
    autoCompleteResponse: google.maps.places.AutocompletePrediction[] | null
  ) => void;
  distanceMarkers: Array<IMarker>;
  setDistanceMarkers: (distanceMarkers: Array<IMarker>) => void;
  addPoint: boolean;
  setAddPoint: (addPoint: boolean) => void;
}

// Type for the global variable provider
type GlobalVariableProp = {
  children: ReactNode;
};

/* This is the interface for the marker object. */
export interface IMarker {
  position: google.maps.LatLngLiteral;
  markerType: IMarkerType;
  description?: string;
}

/* This is the type for the Overlay marker object. */
export interface IOverlayMarkers {
  position: google.maps.LatLngLiteral;
}

export type IMarkerType =
  | "Default"
  | "Home"
  | "Restaurant"
  | "Taxi"
  | "Overlay";

const GlobalVariableContext = createContext<GlobalVariableContext>(
  {} as GlobalVariableContext
);

export const GlobalVariableProvider = ({ children }: GlobalVariableProp) => {
  const [mapInstance, setMapInstance] = useState<google.maps.Map>();
  // Global loading state
  const [loading, setLoading] = useState<boolean>(false);
  // Global Banner state
  const [showBanner, setShowBanner] = useState<boolean>(false);
  const [bannerMessage, setBannerMessage] = useState("");

  // Global Marker state
  const [markers, setMarkers] = useState<Array<IMarker>>([]);
  const [addMarker, setAddMarker] = useState<boolean>(false);
  const [markerType, setMarkerType] = useState<IMarkerType>("Default");

  // Overlay Marker state
  const [overlayMarkers, setOverlayMarkers] = useState<Array<IOverlayMarkers>>(
    []
  );

  // Map Center state
  const [mapCenter, setMapCenter] = useState<google.maps.LatLngLiteral>({
    lat: 53.344250668504806,
    lng: -6.261668903294844,
  });

  // AutoComplete prediction service
  const [autoCompleteResponse, setAutoCompleteResponse] = useState<
    google.maps.places.AutocompletePrediction[] | null
  >([]);

  // Distance between two points
  const [distanceMarkers, setDistanceMarkers] = useState<IMarker[]>([]);
  const [addPoint, setAddPoint] = useState<boolean>(false);

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
        markerType,
        setMarkerType,
        overlayMarkers,
        setOverlayMarkers,
        mapCenter,
        setMapCenter,
        mapInstance,
        setMapInstance,
        autoCompleteResponse,
        setAutoCompleteResponse,
        distanceMarkers,
        setDistanceMarkers,
        addPoint,
        setAddPoint,
      }}
    >
      {children}
    </GlobalVariableContext.Provider>
  );
};

export default GlobalVariableContext;
