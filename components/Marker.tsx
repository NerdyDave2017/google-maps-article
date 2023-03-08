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
  Home: JSX.Element;
  Restaurant: JSX.Element;
  Taxi: JSX.Element;
}

const customMarkersImage: ICustomMarkers = {
  Default: "",
  Home: <HomeIcon className="w-6 h-6 lg:w-7 lg:h-7" />,
  Restaurant: <RestaurantIcon className="w-6 h-6 lg:w-7 lg:h-7" />,
  Taxi: <LocalTaxiIcon className="w-6 h-6 lg:w-7 lg:h-7" />,
};

const marker: FC<IMarker> = ({ position, markerType }) => {
  return <MarkerF position={position} />;
};

export default marker;
