import React, { FC } from "react";
import { Marker as MarkerF } from "@react-google-maps/api";
import { IMarkerType } from "../context/GlobalVaribales";

interface IMarker {
  position: google.maps.LatLngLiteral;
  markerType: IMarkerType;
}

interface ICustomMarkers {
  Default: string;
  Home: string;
  Restaurant: string;
  Taxi: string;
  Overlay: string;
}

const customMarkersImage: ICustomMarkers = {
  Default: "",
  Home: "https://res.cloudinary.com/nerdydave2017/image/upload/v1678248572/house_1_qu5ps7.svg",
  Restaurant:
    "https://res.cloudinary.com/nerdydave2017/image/upload/v1678248572/cutlery_1_lj2x6x.svg",
  Taxi: "https://res.cloudinary.com/nerdydave2017/image/upload/v1678466466/taxi_1_dwzsmg.svg",
  Overlay: "",
};

const marker: FC<IMarker> = ({ position, markerType }) => {
  return <MarkerF position={position} icon={customMarkersImage[markerType]} />;
};

export default marker;
