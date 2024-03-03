import { IconProps } from "@/types";

export const ProfileIcon: React.FC<IconProps> = (props) => {
  const {
    width = "25",
    height = "25",
    fill1 = "currentColor",
    ...otherProps
  } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={fill1}
      {...otherProps}
      viewBox="0 0 24 24"
    >
      <g clipPath="url(#clip0_15_82)">
        <path fill="#fff" d="M0 0H24V24H0z"></path>
        <g filter="url(#filter0_d_15_82)">
          <path
            fill="#000"
            d="M14.336 12.347l-.26-.428a.5.5 0 00.115.906l.145-.478zm-4.673 0l.146.478a.5.5 0 00.114-.905l-.26.427zm-5.601 6.655l-.497-.062.497.062zm15.876 0l.497-.062-.497.062zM16 8.5c0 1.448-.77 2.717-1.924 3.42l.52.854A4.997 4.997 0 0017 8.5h-1zm-4-4a4 4 0 014 4h1a5 5 0 00-5-5v1zm-4 4a4 4 0 014-4v-1a5 5 0 00-5 5h1zm1.923 3.42A3.997 3.997 0 018 8.5H7c0 1.811.963 3.397 2.403 4.274l.52-.854zm-.405-.052a8.509 8.509 0 00-5.953 7.072l.993.124a7.508 7.508 0 015.251-6.24l-.291-.956zM3.565 18.94c-.11.888.626 1.56 1.435 1.56v-1c-.295 0-.468-.228-.442-.436l-.993-.124zM5 20.5h14v-1H5v1zm14 0c.81 0 1.545-.672 1.434-1.56l-.992.124c.026.208-.147.436-.442.436v1zm1.434-1.56a8.509 8.509 0 00-5.952-7.072l-.291.957a7.508 7.508 0 015.251 6.239l.992-.124z"
          ></path>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_15_82"
          width="18.891"
          height="19"
          x="2.554"
          y="3.5"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="1"></feOffset>
          <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_15_82"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_15_82"
            result="shape"
          ></feBlend>
        </filter>
        <clipPath id="clip0_15_82">
          <path fill="#fff" d="M0 0H24V24H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};
