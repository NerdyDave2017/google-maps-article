import React from "react";
import MyLocationIcon from "@mui/icons-material/MyLocation";

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
          <MyLocationIcon className="w-6 h-6 lg:w-7 lg:h-7" />
        </IconButton>
      </div>
      {/* Bottom Nav */}
      <div className=""></div>
      {/* GoogleMap */}
      <Map />
    </div>
  );
};

export default Layout;
