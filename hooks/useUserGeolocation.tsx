import { useState, useEffect, useContext } from "react";
import GlobalVariableContext from "../context/GlobalVaribales";

const useGetUserGeolocation = () => {
  const { setMapCenter, mapCenter } = useContext(GlobalVariableContext);

  const [locationLoading, setLocationLoading] = useState(true);

  useEffect(() => {
    const getUserLocation = async () => {
      const options = {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 0,
      };
      function success(pos: any) {
        const crd = pos.coords;
        const Location: google.maps.LatLngLiteral = {
          lat: crd.latitude,
          lng: crd.longitude,
        };

        setMapCenter(Location);
        setLocationLoading(false);
      }
      function error(error: any) {
        console.log("error");
        // console.warn(`ERROR(${error.code}): ${error.message}`);
        setLocationLoading(false);
        alert("Unable to retrieve your location");
      }
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error, options);
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    };

    getUserLocation();
  }, []);

  return { mapCenter, locationLoading };
};

export default useGetUserGeolocation;
