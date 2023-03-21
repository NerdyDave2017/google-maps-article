import React from "react";
import { Polyline } from "@react-google-maps/api";

interface PolylineProps {
  pathDetails: google.maps.LatLngLiteral[];
}

const PolylineComponent = ({ pathDetails }: PolylineProps) => {
  const path = [...pathDetails];
  const options = {
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: 30000,
    zIndex: 1,
  };

  return <Polyline path={path} options={options} />;
};

export default PolylineComponent;
