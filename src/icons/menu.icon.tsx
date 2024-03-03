import { IconProps } from "@/types";
import React from "react";

export const MenuIcon: React.FC<IconProps> = (props) => {
  const {
    fill1 = "currentColor",
    height = "20px",
    width = "20px",
    ...otherProps
  } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...otherProps}
    >
      <path
        fill={fill1}
        fillRule="evenodd"
        d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"
      />
    </svg>
  );
};
