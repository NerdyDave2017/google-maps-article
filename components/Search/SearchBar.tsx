import React, { useContext } from "react";
import { StandaloneSearchBox } from "@react-google-maps/api";

import GlobalVariableContext from "../../context/GlobalVaribales";

type SearchBarProps = {
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
  setSearch?: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar = ({ value, onChange, style, setSearch }: SearchBarProps) => {
  /* Destructuring the mapInstance from the GlobalVariableContext. */
  const { mapInstance } = useContext(GlobalVariableContext);

  const onInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    setSearch(e.target.value);

    // Initialize auto complete service class
    const service = new google.maps.places.AutocompleteService();

    // Call the service with the input value
    service.getPlacePredictions(
      {
        input: value,
      },
      (predictions, status) => {
        if (status !== google.maps.places.PlacesServiceStatus.OK) {
          console.error(status);
          return;
        }

        console.log(predictions);
      }
    );
  };

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
      <input
        type="text"
        placeholder="Enter your location..."
        className="box-border w-full h-full  outline-none outline-0 focus:outline-none focus:outline-0 ring-0 focus:ring-0  border-none border-0 focus:border-transparent bg-transparent text-white  placeholder:text-white"
        style={{
          borderTopLeftRadius: "1rem",
          borderBottomLeftRadius: "1rem",
        }}
        onChange={(e) => onInputChange(e)}
        value={value}
      />
    </div>
  );
};

export default SearchBar;
