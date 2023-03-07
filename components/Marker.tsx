import React, { FC } from "react";
import { Marker as MarkerF } from "@react-google-maps/api";

interface IMarker {
  position: google.maps.LatLngLiteral;
}
const marker: FC<IMarker> = ({ position }) => {
  return <MarkerF position={position} />;
};

export default marker;
