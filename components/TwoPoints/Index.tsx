import React, { useContext } from "react";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
import GlobalVariableContext from "../../context/GlobalVaribales";

import IconButton from "../IconButton";

const Index = () => {
  const {
    setShowBanner,
    setBannerMessage,
    setAddPoint,
    setMarkerType,
    distanceMarkers,
    setDistanceMarkers,
    showPolyline,
    setShowPolyline,
  } = useContext(GlobalVariableContext);

  // Function should prompt user to select two points on the map
  // Function should add a marker to the map at each point
  // Then calculate the distance between the two points
  // Then add the distance to the global state
  const addTwoPoints = () => {
    console.log("polylinw", showPolyline);
    // Clear distance markers array for new points
    // if (distanceMarkers.length == 2) {
    console.log("clear polyline also");
    setShowPolyline(false);
    setDistanceMarkers([]);
    // }
    // Show banner
    setShowBanner(true);
    // Add custom banner message
    setBannerMessage("Click map to add two points");
    // set add point value to true to allow adding new point
    setAddPoint(true);
    // set marker type to default
    setMarkerType("Default");
  };

  return (
    <div onClick={addTwoPoints}>
      <IconButton>
        <TransferWithinAStationIcon className="w-6 h-6 lg:w-7 lg:h-7" />
      </IconButton>
    </div>
  );
};

export default Index;
