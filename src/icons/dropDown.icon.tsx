import { IconProps } from "@/types";
import React from "react";

export const DropDownIcon: React.FC<IconProps> = (props) => {
  const {
    width = "14",
    height = "14",
    fill1 = "currentColor",
    ...otherProps
  } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={fill1}
      viewBox="0 0 12 8"
      {...otherProps}
    >
      <path
        fill="#C2C2C2"
        d="M10.594.578L12 1.984l-6 6-6-6L1.406.578 6 5.172 10.594.578z"
      ></path>
    </svg>
  );
};
