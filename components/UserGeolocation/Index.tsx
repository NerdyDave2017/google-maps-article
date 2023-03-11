import React, { useContext } from "react";
import MyLocationIcon from "@mui/icons-material/MyLocation";

import IconButton from "../IconButton";

import GlobalVariableContext from "../../context/GlobalVaribales";

const Index = () => {
  const { mapInstance, mapCenter } = useContext(GlobalVariableContext);

  const PanToCenter = () => {
    mapInstance?.panTo(mapCenter);
  };

  return (
    <div className="flex justify-end" onClick={PanToCenter}>
      <IconButton shadow={true}>
        <MyLocationIcon className="w-6 h-6 lg:w-7 lg:h-7" />
      </IconButton>
    </div>
  );
};

export default Index;
