import React, { FC, ReactNode } from "react";

/**
 * `IconButtonProps` is an object with a single property, `Icon`, which is a function that takes an
 * `SVGProps` object and returns a `JSX.Element`.
 * @property Icon - This is the icon that will be displayed in the button.
 */
type IconButtonProps = {
  onClick?: () => void;
  shadow?: boolean;
  style?: React.CSSProperties;
  children?: ReactNode;
};

const IconButton = ({ onClick, shadow, style, children }: IconButtonProps) => {
  return (
    <div
      className="w-12 h-12 lg:w-14 lg:h-14 bg-white text-purple-default rounded-2xl hover:bg-purple-default hover:text-white cursor-pointer"
      style={{
        boxShadow: shadow ? "0px 0px 10px rgba(0, 0, 0, 0.25)" : "none",
        ...style,
      }}
      onClick={onClick}
    >
      <div className="flex justify-center items-center w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default IconButton;
