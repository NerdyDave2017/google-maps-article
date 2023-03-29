/*eslint-disable*/
import { useLoadScript, GoogleMap } from "@react-google-maps/api";
import React, {
  useMemo,
  useRef,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import Spinner from "./Spinner";

import GlobalVariableContext from "../context/GlobalVaribales";

import Marker from "./Marker";
import Overlay from "./Overlay/Overlay";
import OverlayMarker from "./Overlay/OverlayMarker";
import UserLocationOverlay from "./UserGeolocation/UserLocationOverlay";
import PolylineComponent from "./Polyline";

// Map Types
type LatLngLiteral = google.maps.LatLngLiteral;
type MapOptions = google.maps.MapOptions;
type Libraries = (
  | "drawing"
  | "geometry"
  | "localContext"
  | "places"
  | "visualization"
)[];

/* Map libraries passed to the useLoaadScript hook. */
const newLibraries: Libraries = ["places"];

const Map = () => {
  // Component state to display overlay
  const [overlayPosition, setOverlayPosition] = useState<LatLngLiteral>({
    lat: 0,
    lng: 0,
  });
  const [showOverlay, setShowOverlay] = useState(false);

  // import glonal states  from global variable context
  const {
    markers,
    setMarkers,
    addMarker,
    setAddMarker,
    setShowBanner,
    overlayMarkers,
    setOverlayMarkers,
    markerType,
    mapCenter,
    mapInstance,
    setMapInstance,
    distanceMarkers,
    setDistanceMarkers,
    addPoint,
    setAddPoint,
    showPolyline,
    setShowPolyline,
  } = useContext(GlobalVariableContext);

  useEffect(() => {}, [
    markers,
    overlayMarkers,
    mapInstance,
    mapCenter,
    distanceMarkers,
  ]);

  /* Creating a reference to the map. */
  const mapRef = useRef<GoogleMap>();

  /* Hardcoded map center value. useMemo hook to memorize center values */
  const center = useMemo<LatLngLiteral>(() => mapCenter, []);

  /* A React hook that is used to memoize the value of the options. */
  const options = useMemo<MapOptions>(
    () => ({
      disableDefaultUI: true,
      minZoom: 3,
      // zoomControl: true,
    }),
    []
  );

  /* A callback function that is called when the map is loaded. */
  const onLoad = useCallback(
    // eslint-disable-next-line
    (map: any) => {
      mapRef.current = map;
      setMapInstance(map);
      console.log("map loaded");
    },
    []
  );

  /* Loading the Google Maps API. */
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: `${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`,
    libraries: newLibraries,
  });

  /* Google map styling */
  const mapContainerStyle = {
    width: "100vw",
    height: "100vh",
  };

  // Function to handle map click
  const handleMapClick = async (e: google.maps.MapMouseEvent) => {
    console.log("polyline 2", showPolyline);
    // Check if adding a point is enabled
    if (!addPoint) return;

    // get clicked point location value
    //@ts-ignore
    const latLng: google.maps.LatLng = e.latLng;
    const lat = latLng.lat();
    const lng = latLng.lng();

    const newMarker = {
      position: { lat, lng },
      markerType: markerType,
    };

    // Check if distance marker lenght equals 1
    // set addPoint to false
    // set show banner false
    if (distanceMarkers.length === 1) {
      setShowPolyline(true);
      setAddPoint(false);
      setShowBanner(false);
    }

    // update global distance marker state
    setDistanceMarkers([...distanceMarkers, newMarker]);
  };

  // Function to handle map double click
  const handleMapDoubleClick = (e: google.maps.MapMouseEvent) => {
    // Check if adding a new marker is enabled
    if (!addMarker) return;

    // get clicked point location value
    //@ts-ignore
    const latLng: google.maps.LatLng = e.latLng;
    const lat = latLng.lat();
    const lng = latLng.lng();
    // Check if marker type is overlay
    if (markerType === "Overlay") {
      // Object to create new marker
      const newMarker = {
        position: { lat, lng },
      };

      // update global marker state with new variable
      setOverlayMarkers([...overlayMarkers, newMarker]);
      // update add marker to prevent adding new marker
      setAddMarker(false);
      // Close Banner prompt
      setShowBanner(false);
      return;
    }

    // Object to create new marker
    const newMarker = {
      position: { lat, lng },
      markerType: markerType,
    };

    // update global marker state with new variable
    setMarkers([...markers, newMarker]);

    // Close Banner prompt
    setShowBanner(false);
    // update add marker to prevent adding new marker
    setAddMarker(false);
  };

  // Function to handle overlay marker click
  const handleOverlayClick = (position: LatLngLiteral) => {
    // Check if overlay position is same as clicked position
    if (
      overlayPosition.lat === position.lat &&
      overlayPosition.lng === position.lng
    ) {
      // If same, set show overlay to false
      setShowOverlay(false);
      // If same, set overlay position to 0,0
      // setOverlayPosition({ lat: 0, lng: 0 });
      return;
    }
    setOverlayPosition(position);
    setShowOverlay(true);
  };

  if (!isLoaded) {
    return (
      <div
        style={mapContainerStyle}
        className="flex justify-center items-center bg-white"
      >
        <Spinner style={{ width: "3rem", height: "3rem" }} />
      </div>
    );
  }

  return (
    /* Creating a Google Map. */
    <GoogleMap
      zoom={12}
      center={center}
      mapContainerStyle={mapContainerStyle}
      options={options}
      onLoad={onLoad}
      onClick={handleMapClick}
      onDblClick={handleMapDoubleClick}
    >
      <UserLocationOverlay position={mapCenter} />
      {/* Child components, such as markers, info windows, etc. */}
      {markers?.map((marker, index) => (
        <Marker
          position={marker.position}
          key={index}
          markerType={marker.markerType}
        />
      ))}
      {overlayMarkers?.map((marker, index) => (
        <OverlayMarker
          position={marker.position}
          key={index}
          onClick={() => handleOverlayClick(marker.position)}
        />
      ))}
      {showOverlay && <Overlay position={overlayPosition} />}
      {distanceMarkers.map((marker, index) => (
        <Marker
          position={marker.position}
          key={index}
          markerType={marker.markerType}
        />
      ))}
      {/* {showPolyline && <PolylineComponent />} */}
    </GoogleMap>
  );
};

export default Map;
