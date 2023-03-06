import React, { FC } from "react";
import { Marker as MarkerF } from "@react-google-maps/api";

interface IMarker {
  position: { lat: number; lng: number };
  id?: number | string;
}
const marker: FC<IMarker> = ({ position, id }) => {
  return <MarkerF key={id} position={position} />;
};

export default marker;
