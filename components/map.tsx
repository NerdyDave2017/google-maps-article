/*eslint-disable*/
import { useLoadScript, GoogleMap } from "@react-google-maps/api";
import React, { useMemo, useRef, useCallback } from "react";

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

const Map = () => {
  /* Creating a reference to the map. */
  const mapRef = useRef<GoogleMap>();

  /* Hardcoded map center value. useMemo hook to memorize center values */
  const center = useMemo<LatLngLiteral>(
    () => ({ lat: 53.344250668504806, lng: -6.261668903294844 }),
    []
  );

  /* A React hook that is used to memoize the value of the options. */
  const options = useMemo<MapOptions>(
    () => ({
      disableDefaultUI: true,
      // zoomControl: true,
    }),
    []
  );

  /* A callback function that is called when the map is loaded. */
  const onLoad = useCallback(
    // eslint-disable-next-line
    (map: any) => ((mapRef.current = map), console.log("map loaded")),
    []
  );

  /* Map libraries passed to the useLoaadScript hook. */
  let newLibraries: Libraries = ["places"];

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

  /* Checking if the map is loaded. If it is not loaded, it will display a loading message. */
  if (!isLoaded) return <div>Loading ...</div>;

  return (
    /* Creating a Google Map. */
    <GoogleMap
      zoom={10}
      center={center}
      mapContainerStyle={mapContainerStyle}
      options={options}
      onLoad={onLoad}
    >
      {/* Child components, such as markers, info windows, etc. */}
    </GoogleMap>
  );
};

export default Map;