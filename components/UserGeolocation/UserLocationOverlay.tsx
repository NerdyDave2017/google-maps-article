import React, { useMemo } from "react";
import { OverlayViewF, OverlayView } from "@react-google-maps/api";

interface IOverlay {
  position: google.maps.LatLngLiteral;
}

const Overlay = ({ position }: IOverlay) => {
  return (
    <OverlayViewF position={position} mapPaneName={OverlayView.FLOAT_PANE}>
      <span className="relative flex h-8 w-8 justify-center items-center">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
        <span className="absolute inline-flex rounded-full h-5 w-5 bg-white"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-purple-default"></span>
      </span>
    </OverlayViewF>
  );
};

export default Overlay;
