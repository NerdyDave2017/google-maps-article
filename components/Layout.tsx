import React from "react";
// import icons
import MyLocationIcon from "@mui/icons-material/MyLocation";
import SearchIcon from "@mui/icons-material/Search";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";

import Map from "./map";
import IconButton from "./IconButton";

const Layout = () => {
  return (
    <div className="relative w-full h-full ">
      {/* User location and side bar */}
      <div className="flex-col justify-center items-center space-y-2 md:space-y-4 absolute z-50 top-10 right-5 md:right-20">
        <IconButton>
          <MyLocationIcon className="w-6 h-6 lg:w-7 lg:h-7" />
        </IconButton>
        <IconButton>
          <SearchIcon className="w-6 h-6 lg:w-7 lg:h-7" />
        </IconButton>
      </div>
      {/* Bottom Nav */}
      <div
        className="flex w-auto rounded-2xl bg-white absolute z-50 bottom-20"
        style={{ left: "50%", transform: "translateX(-50%)" }}
      >
        <IconButton>
          <AddLocationAltIcon className="w-6 h-6 lg:w-7 lg:h-7" />
        </IconButton>
        <IconButton>
          <LocalOfferIcon className="w-6 h-6 lg:w-7 lg:h-7" />
        </IconButton>
        <IconButton>
          <TransferWithinAStationIcon className="w-6 h-6 lg:w-7 lg:h-7" />
        </IconButton>
        <IconButton>
          <ZoomInIcon className="w-6 h-6 lg:w-7 lg:h-7" />
        </IconButton>
        <IconButton>
          <ZoomOutIcon className="w-6 h-6 lg:w-7 lg:h-7" />
        </IconButton>
      </div>
      {/* GoogleMap */}
      <Map />
    </div>
  );
};

export default Layout;
