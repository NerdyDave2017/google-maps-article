import React, { FC, useContext } from "react";
import { Marker as MarkerF } from "@react-google-maps/api";

interface MarkerProps {
  position: google.maps.LatLngLiteral;
  onClick?: () => void;
}

const marker: FC<MarkerProps> = ({ position, onClick }) => {
  return (
    <MarkerF
      position={position}
      onClick={onClick}
      icon="https://res.cloudinary.com/nerdydave2017/image/upload/v1678466110/present-tag_1_cqdp9p.svg"
      animation={google.maps.Animation.DROP}
    />
  );
};

export default marker;
