import React, { useContext, useEffect } from "react";
import PlaceIcon from "@mui/icons-material/Place";

import GlobalVariableContext, { IMarker } from "../../context/GlobalVaribales";

type SearchCardProps = {
  style?: React.CSSProperties;
};

const SearchCard = ({ style }: SearchCardProps) => {
  const { autoCompleteResponse, mapInstance } = useContext(
    GlobalVariableContext
  );

  /**
   *
   * @todo - Add a marker to the map on location search click
   */
  const panToLocation = async (
    response: google.maps.places.AutocompletePrediction
  ) => {
    //@ts-ignore
    const service = new google.maps.places.PlacesService(mapInstance);

    const request = {
      query: response.description,
      fields: ["geometry"],
    };

    service.findPlaceFromQuery(
      request,
      (
        results: google.maps.places.PlaceResult[] | null,
        status: google.maps.places.PlacesServiceStatus
      ) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && results) {
          //@ts-ignore
          const lat = results[0].geometry.location.lat();
          //@ts-ignore
          const lng = results[0].geometry.location.lng();

          const position = { lat: lat, lng: lng };

          const newMarker: IMarker = {
            position: position,
            markerType: "Default",
          };

          mapInstance?.panTo(position);
        }
      }
    );
  };

  /**
   * It takes a string, splits it into an array, removes the first element, joins the array back into a
   * string, and returns a JSX element with the first element in bold and the rest of the string
   * wrapped in a span
   * @param {string} description - string - The description of the item
   * @returns A JSX element
   */
  const formatDescription = (description: string): JSX.Element => {
    /* It takes a string, splits it into an array, removes the first element, joins the array back into
    a
        * string, and returns a JSX element with the first element in bold and the rest of the
    string
        * wrapped in a span */
    let initial = description.split(" ")[0];
    let strSplit = description
      .split(",")
      .splice(1, description.length - 1)
      .join();

    return (
      <>
        <span className="font-bold">{initial}</span>
        <span className="whitespace-pre-wrap">
          {strSplit.substring(0, 50)}
          {strSplit.length > 50 && "..."}
        </span>
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
          onClick={() => panToLocation(response)}
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
