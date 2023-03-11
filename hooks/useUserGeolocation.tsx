import { useState, useEffect, useContext } from "react";
import GlobalVariableContext from "../context/GlobalVaribales";

interface IGeolocation {
  latitude: number;
  longitude: number;
}
const useGetUserGeolocation = () => {
  const { setUserLocation, userLocation } = useContext(GlobalVariableContext);
  // const [userLocation, setUserLocation] = useState<google.maps.LatLngLiteral>({
  //   lat: 0,
  //   lng: 0,
  // });
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
        console.log(crd);
        // console.log("Your current position is:" + crd.latitude + crd.longitude);
        // alert("Your current position is:" + crd.latitude  crd.longitude);
        // alert(
        //   `Your current position is: latitude: ${crd.latitude}, longitude: ${crd.longitude}`
        // );
        setUserLocation(Location);
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

  return { userLocation, locationLoading };
};

export default useGetUserGeolocation;
