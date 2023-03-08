import React from "react";
import { InfoWindow } from "@react-google-maps/api";

interface InfoWindowProps {
  children: React.ReactNode;
}

const Infowindow = ({ children }: InfoWindowProps) => {
  return <InfoWindow>{children}</InfoWindow>;
};

export default Infowindow;
