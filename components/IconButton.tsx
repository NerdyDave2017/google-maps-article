import React, { FC, ReactNode } from "react";

/**
 * `IconButtonProps` is an object with a single property, `Icon`, which is a function that takes an
 * `SVGProps` object and returns a `JSX.Element`.
 * @property Icon - This is the icon that will be displayed in the button.
 */
type IconButtonProps = {
  onClick?: () => void;
  children?: ReactNode;
};

const IconButton = ({ onClick, children }: IconButtonProps) => {
  return (
    <div
      className="w-12 h-12 lg:w-14 lg:h-14 bg-white text-purple-default rounded-2xl hover:bg-purple-default hover:text-white focus:outline-none"
      onClick={onClick}
    >
      <div className="flex justify-center items-center h-full text-purple-default">
        {children}
      </div>
    </div>
  );
};

export default IconButton;
