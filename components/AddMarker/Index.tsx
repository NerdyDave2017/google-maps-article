import React, { useState } from "react";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";

import MarkerDrawer from "./MarkerDrawer";
import IconButton from "../IconButton";

const Index = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative">
      {/* Conditional rendering on visible change */}
      {visible && <MarkerDrawer closeDrawer={() => setVisible(false)} />}
      {/* Change visible value onClick */}
      <IconButton onClick={() => setVisible(!visible)}>
        <AddLocationAltIcon className="w-6 h-6 lg:w-7 lg:h-7" />
      </IconButton>
    </div>
  );
};

export default Index;
