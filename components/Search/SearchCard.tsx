import React from "react";
import PlaceIcon from "@mui/icons-material/Place";

const SearchCard = () => {
  return (
    <div
      className="w-full h-auto lg:h-auto bg-white rounded-2xl "
      style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)" }}
    >
      <div className="flex justify-start items-center space-x-2 w-full h-12 lg:h-14 text-purple-default hover:bg-purple-default hover:text-white px-3 rounded-2xl cursor-pointer">
        <div className="">
          <PlaceIcon />
        </div>
        <div className="">New location</div>
      </div>
      <div className="flex justify-start items-center space-x-2 w-full h-12 lg:h-14 text-purple-default hover:bg-purple-default hover:text-white px-3 rounded-2xl cursor-pointer">
        <div className="">
          <PlaceIcon />
        </div>
        <div className="">New location</div>
      </div>
      <div className="flex justify-start items-center space-x-2 w-full h-12 lg:h-14 text-purple-default hover:bg-purple-default hover:text-white px-3 rounded-2xl cursor-pointer">
        <div className="">
          <PlaceIcon />
        </div>
        <div className="">New location</div>
      </div>
    </div>
  );
};

export default SearchCard;
