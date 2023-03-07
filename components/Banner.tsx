import React, { ReactNode, FC, useContext } from "react";
import Spinner from "./Spinner";

import GlobalVariableContext from "../context/GlobalVaribales";

const Banner = () => {
  const { bannerMessage } = useContext(GlobalVariableContext);

  return (
    <div className="w-full h-8 bg-purple-default text-white z-50 absolute top-0 flex justify-center items-center space-x-4">
      <Spinner />
      {bannerMessage}
    </div>
  );
};

export default Banner;
