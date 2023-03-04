import type { NextPage } from "next";
import MyLocationIcon from "@mui/icons-material/MyLocation";

import IconButton from "../components/IconButton";

import Map from "../components/map";

const Home: NextPage = () => {
  return (
    <>
      <Map />
    </>
  );
};

export default Home;
