import React, { useContext } from "react";
import IconButton from "../IconButton";

import GlobalVariableContext from "../../context/GlobalVaribales";

import PlaceIcon from "@mui/icons-material/Place";
import HomeIcon from "@mui/icons-material/Home";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
// import CommuteIcon from "@mui/icons-material/Commute";
// import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";

type MarkerDrawerProps = {
  closeDrawer: () => void;
};

const markerData = [
  {
    name: "Default",
    icon: <PlaceIcon className="w-6 h-6 lg:w-7 lg:h-7" />,
  },
  {
    name: "Home",
    icon: <HomeIcon className="w-6 h-6 lg:w-7 lg:h-7" />,
  },
  {
    name: "Restaurant",
    icon: <RestaurantIcon className="w-6 h-6 lg:w-7 lg:h-7" />,
  },
  {
    name: "Taxi",
    icon: <LocalTaxiIcon className="w-6 h-6 lg:w-7 lg:h-7" />,
  },
];

const MarkerDrawer = ({ closeDrawer }: MarkerDrawerProps) => {
  /* Destructuring the `setBannerMessage` and `setShowBanner` from the `GlobalVariableContext` */
  const { setBannerMessage, setShowBanner, setAddMarker } = useContext(
    GlobalVariableContext
  );

  // Function to add marker
  const addMarker = (markerType: string) => {
    // Show banner
    setShowBanner(true);
    // Add custom banner message
    setBannerMessage("Double click map to add marker");
    // set add marker value to true to allow adding new marker
    setAddMarker(true);
    // set marker type
    // Close marker drawer on click
    closeDrawer();
  };

  return (
    <div className="flex-col space-y-2 absolute bottom-16">
      {markerData.map((marker) => (
        <IconButton onClick={() => addMarker(marker.name)}>
          {marker.icon}
        </IconButton>
      ))}
    </div>
  );
};

export default MarkerDrawer;
