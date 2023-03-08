import React, { FC } from "react";
import { Marker as MarkerF } from "@react-google-maps/api";
import { IMarkerType } from "../context/GlobalVaribales";

import PlaceIcon from "@mui/icons-material/Place";
import HomeIcon from "@mui/icons-material/Home";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";

interface IMarker {
  position: google.maps.LatLngLiteral;
  markerType: IMarkerType;
}

interface ICustomMarkers {
  Default: string;
  Home: string;
  Restaurant: string;
  Taxi: string;
}

const customMarkersImage: ICustomMarkers = {
  Default: "",
  Home: "https://res.cloudinary.com/nerdydave2017/image/upload/v1678248572/house_1_qu5ps7.svg",
  Restaurant:
    "https://res.cloudinary.com/nerdydave2017/image/upload/v1678248572/cutlery_1_lj2x6x.svg",
  Taxi: "https://res.cloudinary.com/nerdydave2017/image/upload/v1678248572/taxi_1_njngbm.svg",
};

const marker: FC<IMarker> = ({ position, markerType }) => {
  return <MarkerF position={position} icon={customMarkersImage[markerType]} />;
};

export default marker;
