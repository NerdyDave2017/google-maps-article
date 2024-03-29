import React, { useContext } from "react";
import GlobalVariableContext from "../../context/GlobalVaribales";

type SearchBarProps = {
  value: string;
  style?: React.CSSProperties;
  setSearch?: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar = ({ value, style, setSearch }: SearchBarProps) => {
  /* It's destructuring the `autoCompleteResponse` and `setAutoCompleteResponse` from the
  `GlobalVariableContext` */
  const { setAutoCompleteResponse } = useContext(GlobalVariableContext);

  /**
   * We're using the Google Maps API to get a list of predictions based on the input value
   * @param e - React.ChangeEvent<HTMLInputElement> - This is the event that is triggered when the
   * input value changes.
   */
  const onInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    setSearch(e.target.value);

    // Initialize auto complete service class
    const service = new google.maps.places.AutocompleteService();

    // Call the service with the input value
    service.getPlacePredictions(
      {
        input: value,
        // location: new google.maps.LatLng(mapCenter), // Initialize new LatLng class by passing the map center/user location for search bias
      },
      (predictions, status) => {
        if (status !== google.maps.places.PlacesServiceStatus.OK) {
          console.error(status);
          return;
        }
        /* It's setting the `autoCompleteResponse` state to the `predictions` array. */
        setAutoCompleteResponse(predictions);
      }
    );
  };

  return (
    <div
      className="w-full h-12 lg:h-14 bg-purple-light"
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
