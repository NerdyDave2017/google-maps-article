import React from "react";
import { Spinner } from "flowbite-react";

type SpinnerProps = {
  className?: string;
};

const Index = ({ className }: SpinnerProps) => {
  return <Spinner className={className} />;
};

export default Index;
