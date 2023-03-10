import React, { FC } from "react";
import { Marker as MarkerF } from "@react-google-maps/api";

interface IMarker {
  position: google.maps.LatLngLiteral;
}

const marker: FC<IMarker> = ({ position }) => {
  return (
    <MarkerF
      position={position}
      icon="https://res.cloudinary.com/nerdydave2017/image/upload/v1678466110/present-tag_1_cqdp9p.svg"
    />
  );
};

export default marker;
