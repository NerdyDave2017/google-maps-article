import React, { FC } from "react";
import { Marker, MarkerF } from "@react-google-maps/api";

interface marker {
  lat: number;
  lng: number;
  id: number | string;
  description: string;
  markerType: string;
}
const marker: FC<marker> = ({ lat, lng, id }: marker) => {
  let position = {
    lat: lat,
    lng: lng,
  };

  return <MarkerF key={id} position={position} />;
};

export default marker;
