import React, { useContext, useEffect } from "react";
// import icons
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
// import components
import Map from "./map";
import IconButton from "./IconButton";
import UserGeoLoacation from "./UserGeolocation/Index";
import Search from "./Search/Index";
import AddMarker from "./AddMarker/Index";
import Overlay from "./Overlay/Index";
import TwoPoints from "./TwoPoints/Index";
import Spinner from "./Spinner";
import Banner from "./Banner";

// import context
import GlobalVariableContext from "../context/GlobalVaribales";

import useGetUserGeolocation from "../hooks/useUserGeolocation";

const Layout = () => {
  const { mapCenter, locationLoading } = useGetUserGeolocation();

  const { showBanner } = useContext(GlobalVariableContext);

  useEffect(() => {}, [mapCenter]);

  /* This is a conditional rendering. If the location is loading, then show the spinner. */
  if (locationLoading) {
    return (
      <div
        style={{ width: "100vw", height: "100vh" }}
        className="flex justify-center items-center bg-white"
      >
        <Spinner style={{ width: "3rem", height: "3rem" }} />
      </div>
    );
  }

  // Conditionally render the map
  return (
    <div className="relative w-full h-full ">
      {/* Banner */}
      {showBanner && <Banner />}

      {/* User location and side bar */}
      <div className="w-auto md:w-80 lg:w-96 flex-col justify-center items-center space-y-2 md:space-y-4 space-x-0 absolute z-50 top-10 right-5 left-5 md:left-auto md:right-20">
        <UserGeoLoacation />
        <Search />
      </div>
      {/* Bottom Nav */}
      <div
        className="flex w-auto rounded-2xl bg-white absolute z-50 bottom-20"
        style={{
          left: "50%",
          transform: "translateX(-50%)",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
        }}
      >
        <AddMarker />
        <Overlay />
        <TwoPoints />
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
