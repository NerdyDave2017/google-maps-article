import React, { useMemo } from "react";
import { InfoBox as InfoBoxF } from "@react-google-maps/api";

interface InfoWindowProps {
  children: React.ReactNode;
}

const Infowindow = ({ children }: InfoWindowProps) => {
  const center = { lat: 53.344250668504806, lng: -6.261668903294844 };

  const options = { closeBoxURL: "", enableEventPropagation: true };

  const onLoad = (infoBox: any) => {
    console.log("infoBox: ", infoBox);
  };

  return (
    <InfoBoxF position={center} onLoad={onLoad}>
      <div className="bg-white w-20 h-16">{children}</div>
    </InfoBoxF>
  );
};

export default Infowindow;
