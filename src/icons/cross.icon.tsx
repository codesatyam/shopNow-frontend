import { IconProps } from "@/types";
import React from "react";

export const CrossIcon: React.FC<IconProps> = (props) => {
  const {
    fill1 = "currentColor",
    height = "18px",
    width = "18px",
    ...otherProps
  } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 32 33"
      {...otherProps}
    >
      <path
        fill={fill1}
        d="M31.556 31.436l-1.073 1.106c-.593.61-1.553.61-2.146 0L16 19.819 3.663 32.542a1.485 1.485 0 01-2.146 0L.444 31.435a1.6 1.6 0 010-2.212L12.782 16.5.444 3.777a1.6 1.6 0 010-2.212L1.517.458a1.485 1.485 0 012.146 0L16 13.181 28.337.458a1.485 1.485 0 012.146 0l1.073 1.107a1.6 1.6 0 010 2.212L19.218 16.5l12.338 12.723a1.6 1.6 0 010 2.213z"
      ></path>
    </svg>
  );
};
