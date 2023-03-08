import React, { useContext } from "react";
import IconButton from "../IconButton";

import GlobalVariableContext, {
  IMarkerType,
} from "../../context/GlobalVaribales";

import PlaceIcon from "@mui/icons-material/Place";
import HomeIcon from "@mui/icons-material/Home";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
// import CommuteIcon from "@mui/icons-material/Commute";
// import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";

/**
 * `MarkerDrawerProps` is an object with a single property, `closeDrawer`, which is a function that
 * takes no arguments and returns nothing.
 * @property closeDrawer - This is a function that closes the drawer.
 */
type MarkerDrawerProps = {
  closeDrawer: () => void;
};

interface IMarkerData {
  name: IMarkerType;
  icon: JSX.Element;
}

// Create an array of objects that contain the name of the marker type and the icon that will be rendered
const markerData: Array<IMarkerData> = [
  {
    name: "Default",
    icon: <PlaceIcon className="w-6 h-6 lg:w-7 lg:h-7" />,
  },
  {
    name: "Home",
    icon: <HomeIcon className="w-6 h-6 lg:w-7 lg:h-7" />,
  },
  {
    name: "Restaurant",
    icon: <RestaurantIcon className="w-6 h-6 lg:w-7 lg:h-7" />,
  },
  {
    name: "Taxi",
    icon: <LocalTaxiIcon className="w-6 h-6 lg:w-7 lg:h-7" />,
  },
];

const MarkerDrawer = ({ closeDrawer }: MarkerDrawerProps) => {
  /* Destructuring the `setBannerMessage` and `setShowBanner` from the `GlobalVariableContext` */
  const { setBannerMessage, setShowBanner, setAddMarker, setMarkerType } =
    useContext(GlobalVariableContext);

  /**
   * The addMarker function is called when a user clicks on a marker type in the drawer. It sets the
   * showBanner state to true, sets the bannerMessage state to a custom message, sets the addMarker
   * state to true, sets the markerType state to the marker type that was clicked on, and closes the
   * drawer
   * @param {IMarkerType} markerType - IMarkerType - This is the type of marker that will be added to
   * the map.
   */
  // Function to add marker
  const addMarker = (markerType: IMarkerType) => {
    // Show banner
    setShowBanner(true);
    // Add custom banner message
    setBannerMessage("Double click map to add marker");
    // set add marker value to true to allow adding new marker
    setAddMarker(true);
    // set marker type
    setMarkerType(markerType);
    // Close marker drawer on click
    closeDrawer();
  };

  return (
    <div className="flex-col space-y-2 absolute bottom-16">
      {markerData.map((marker: IMarkerData) => (
        <IconButton onClick={() => addMarker(marker.name)}>
          {marker.icon}
        </IconButton>
      ))}
    </div>
  );
};

export default MarkerDrawer;
