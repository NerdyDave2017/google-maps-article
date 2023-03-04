import React from "react";

const SearchBar = () => {
  return (
    <div
      className="h-12 lg:h-14 w-80 bg-purple-light rounded-2xl flex-1"
      style={{
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
      }}
    >
      <input
        type="text"
        placeholder="Enter your location..."
        className="w-full h-full rounded-xl focus:outline-none outline-none border-transparent focus:border-transparent bg-purple-light text-white pl-4 placeholder:text-white"
      />
    </div>
  );
};

export default SearchBar;
