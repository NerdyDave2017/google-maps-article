import React, { useEffect, useState, useContext } from "react";
import GlobalVariableContext from "../context/GlobalVaribales";

type LatLng = google.maps.LatLngLiteral;
const useGetDistance = () => {
  const {} = useContext(GlobalVariableContext);

  const [distance, setDistance] = useState(0);

  const getPositions = (point: LatLng) => {};
};

export default useGetDistance;
