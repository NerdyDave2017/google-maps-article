import React, { useContext } from "react";
import PlaceIcon from "@mui/icons-material/Place";

import GlobalVariableContext from "../../context/GlobalVaribales";
import { Description } from "@mui/icons-material";
import { jsx } from "@emotion/react";

type SearchCardProps = {
  style?: React.CSSProperties;
};

const SearchCard = ({ style }: SearchCardProps) => {
  const { autoCompleteResponse } = useContext(GlobalVariableContext);

  const formatDescription = (description: string): JSX.Element => {
    let initial = description.split(" ")[0];
    let strSplit = description
      .split(",")
      .splice(1, description.length - 1)
      .join();

    return (
      <>
        <span className="font-bold">{initial}</span>
        <span className="whitespace-pre-wrap">{strSplit}</span>
      </>
    );
  };

  return (
    <div
      className="w-full h-auto lg:h-auto bg-white rounded-2xl"
      style={{
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
        transition: "all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        ...style,
      }}
    >
      {autoCompleteResponse?.map((response, index) => (
        <div
          className="flex justify-start items-center space-x-2 w-full h-12 lg:h-14 text-purple-default hover:bg-purple-default hover:text-white px-3 rounded-2xl cursor-pointer"
          key={index}
        >
          <div className="">
            <PlaceIcon />
          </div>
          <div className="">{formatDescription(response.description)}</div>
        </div>
      ))}
    </div>
  );
};

export default SearchCard;
