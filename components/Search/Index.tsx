import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

import IconButton from "../IconButton";
import SearchBar from "./SearchBar";
import SearchCard from "./SearchCard";

const Index = () => {
  /* A React Hook that is used to store the input value of the search bar. */
  const [search, setSearch] = useState("");
  /* A React Hook that is used to store the visibility of the search bar and card. */
  const [visible, setVisible] = useState(false);

  const handleVisible = () => {
    setSearch("");
    setVisible(!visible);
  };

  return (
    <div className="flex-col space-y-1 flex-1">
      <div className="flex justify-end">
        {/* Conditional Rendering onClick search IconButton */}
        <SearchBar
          style={{
            width: visible ? "24rem" : "0rem",
          }}
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          setSearch={setSearch}
        />
        {/* IconButton visible - opens and closes search bar and card onClick */}
        <IconButton
          shadow={true}
          style={{
            borderTopLeftRadius: visible ? "0rem" : "1rem",
            borderBottomLeftRadius: visible ? "0rem" : "1rem",
            transition: "all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
          }}
          onClick={handleVisible}
        >
          <SearchIcon className="w-6 h-6 lg:w-7 lg:h-7" />
        </IconButton>
      </div>
      {/* Conditional Rendering onClick search IconButton */}
      {search.length >= 3 && <SearchCard />}
    </div>
  );
};

export default Index;
