import React from "react";
import SearchIcon from "@mui/icons-material/Search";

import IconButton from "../IconButton";

import SearchBar from "./SearchBar";

const Index = () => {
  return (
    <div className="flex flex-1">
      <SearchBar />
      <IconButton
        shadow={true}
        style={{
          borderTopLeftRadius: "0rem",
          borderBottomLeftRadius: "0rem",
        }}
      >
        <SearchIcon className="w-6 h-6 lg:w-7 lg:h-7" />
      </IconButton>
    </div>
  );
};

export default Index;
