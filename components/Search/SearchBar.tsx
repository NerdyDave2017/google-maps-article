import React from "react";

const SearchBar = () => {
  return (
    <div
      className="h-12 lg:h-14 w-80 bg-purple-light  flex-1"
      style={{
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
        borderTopLeftRadius: "1rem",
        borderBottomLeftRadius: "1rem",
      }}
    >
      <input
        type="text"
        placeholder="Enter your location..."
        className="box-border w-full h-full  outline-none outline-0 focus:outline-none focus:outline-0   border-none border-0 focus:border-transparent bg-transparent text-white  placeholder:text-white"
        style={{
          borderTopLeftRadius: "1rem",
          borderBottomLeftRadius: "1rem",
        }}
      />
    </div>
  );
};

export default SearchBar;
