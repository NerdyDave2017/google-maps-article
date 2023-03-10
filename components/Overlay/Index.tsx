import React, { useContext } from "react";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

import IconButton from "../IconButton";
import GlobalVariableContext from "../../context/GlobalVaribales";

const Index = () => {
  const { setMarkerType, setShowBanner, setBannerMessage, setAddMarker } =
    useContext(GlobalVariableContext);

  const addOverlayMarker = () => {
    // Show banner
    setShowBanner(true);
    // Add custom banner message
    setBannerMessage("Double click map to add Overlay Marker");
    // set add marker value to true to allow adding new marker
    setAddMarker(true);
    // set marker type
    setMarkerType("Overlay");
    // Close marker drawer on click
  };

  return (
    <div onClick={addOverlayMarker}>
      <IconButton>
        <LocalOfferIcon className="w-6 h-6 lg:w-7 lg:h-7" />
      </IconButton>
    </div>
  );
};

export default Index;
