import React from "react";
import MyLocationIcon from "@mui/icons-material/MyLocation";

import IconButton from "../IconButton";

const Index = () => {
  return (
    <div className="flex justify-end">
      <IconButton shadow={true}>
        <MyLocationIcon className="w-6 h-6 lg:w-7 lg:h-7" />
      </IconButton>
    </div>
  );
};

export default Index;
