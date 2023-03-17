import React, { useContext } from "react";
import { StandaloneSearchBox } from "@react-google-maps/api";

import GlobalVariableContext from "../../context/GlobalVaribales";

type SearchBarProps = {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
};

const SearchBar = ({ value, onChange, style }: SearchBarProps) => {
  /* Destructuring the mapInstance from the GlobalVariableContext. */
  /* Destructuring the mapInstance from the GlobalVariableContext. */
  const { mapInstance } = useContext(GlobalVariableContext);

  // const onLoad = (ref) => (this.searchBox = ref);

  // const onPlacesChanged = () => console.log(searchBox.getPlaces());
  return (
    <div
      className="w-96 h-12 lg:h-14 bg-purple-light"
      style={{
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
        borderTopLeftRadius: "1rem",
        borderBottomLeftRadius: "1rem",
        transition: "all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        ...style,
      }}
    >
      {/* <StandaloneSearchBox
      // onLoad={onLoad} onPlacesChanged={onPlacesChanged}
      > */}
      <input
        type="text"
        placeholder="Enter your location..."
        className="box-border w-full h-full  outline-none outline-0 focus:outline-none focus:outline-0 ring-0 focus:ring-0  border-none border-0 focus:border-transparent bg-transparent text-white  placeholder:text-white"
        style={{
          borderTopLeftRadius: "1rem",
          borderBottomLeftRadius: "1rem",
        }}
        onChange={onChange}
        value={value}
      />
      {/* </StandaloneSearchBox> */}
    </div>
  );
};

export default SearchBar;
