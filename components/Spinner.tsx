import React from "react";
import { Spinner } from "flowbite-react";

type SpinnerProps = {
  className?: string;
};

const Index = ({ className }: SpinnerProps) => {
  return <Spinner className={"fill-purple-default" + className} />;
};

export default Index;
