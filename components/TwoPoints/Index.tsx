import React, { use, useContext } from "react";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
import GlobalVariableContext from "../../context/GlobalVaribales";

import IconButton from "../IconButton";

const Index = () => {
  const { setShowBanner, setBannerMessage } = useContext(GlobalVariableContext);

  // Function should prompt user to select two points on the map
  // Function should add a marker to the map at each point
  // Then calculate the distance between the two points
  // Then add the distance to the global state
  const addTwoPoints = () => {
    // Show banner
    setShowBanner(true);
    // Add custom banner message
    setBannerMessage("Double click map to add points");
    // set add marker value to true to allow adding new marker
    // set marker type
    // Close marker drawer on click
  };

  return (
    <div>
      <IconButton>
        <TransferWithinAStationIcon className="w-6 h-6 lg:w-7 lg:h-7" />
      </IconButton>
    </div>
  );
};

export default Index;
