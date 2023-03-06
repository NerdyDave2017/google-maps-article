import React from "react";
import IconButton from "../IconButton";

import PlaceIcon from "@mui/icons-material/Place";
import HomeIcon from "@mui/icons-material/Home";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
// import CommuteIcon from "@mui/icons-material/Commute";
// import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";

type MarkerDrawerProps = {
  style?: React.CSSProperties;
};

const MarkerDrawer = () => {
  return (
    <div className="flex-col space-y-2 absolute bottom-16">
      <IconButton>
        <PlaceIcon className="w-6 h-6 lg:w-7 lg:h-7" />
      </IconButton>
      <IconButton>
        <HomeIcon className="w-6 h-6 lg:w-7 lg:h-7" />
      </IconButton>
      <IconButton>
        <RestaurantIcon className="w-6 h-6 lg:w-7 lg:h-7" />
      </IconButton>
      <IconButton>
        <LocalTaxiIcon className="w-6 h-6 lg:w-7 lg:h-7" />
      </IconButton>
    </div>
  );
};

export default MarkerDrawer;
