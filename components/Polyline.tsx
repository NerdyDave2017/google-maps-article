import React, { useContext, useEffect } from "react";
import { Polyline } from "@react-google-maps/api";
import GlobalVariableContext from "../context/GlobalVaribales";

const PolylineComponent = () => {
  const { distanceMarkers } = useContext(GlobalVariableContext);
  useEffect(() => {}, [distanceMarkers]);

  let path =
    distanceMarkers.length < 2
      ? []
      : [distanceMarkers[0]?.position, distanceMarkers[1]?.position];
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
