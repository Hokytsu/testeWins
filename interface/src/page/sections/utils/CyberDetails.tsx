import { UtilsInterface } from "../../../interface/Utils.Interface";

function CyberDetails({ ...props }: UtilsInterface) {
  const { type } = props;

  return type === "left" ? (
    <svg
      width={"18.33vw"}
      height={"12.59vh"}
      viewBox="0 -2 352 135"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M56 71l17.272-18H351"
        stroke="url(#paint0_linear_1_1362)"
        strokeWidth={2}
      />
      <g filter="url(#filter0_d_1_1362)">
        <path d="M74.943 56H99L84 72H60l14.943-16z" fill="#568EFF" />
      </g>
      <g filter="url(#filter1_d_1_1362)">
        <path d="M101.943 56H126l-15 16H87l14.943-16z" fill="#568EFF" />
      </g>
      <g filter="url(#filter2_d_1_1362)">
        <path
          d="M128.943 56H153l-15 16h-24l14.943-16z"
          fill="#568EFF"
          fillOpacity={0.7}
          shapeRendering="crispEdges"
        />
      </g>
      <g filter="url(#filter3_d_1_1362)">
        <path
          d="M155.943 56H180l-15 16h-24l14.943-16z"
          fill="#568EFF"
          fillOpacity={0.5}
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1_1362"
          x={"0"}
          y={0}
          width={"8.28vw"}
          height={"12.59vh"}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={30} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.337255 0 0 0 0 0.556863 0 0 0 0 1 0 0 0 1 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_1362"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_1362"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_1_1362"
          x={27}
          y={0}
          width={"8.28vw"}
          height={'12.59vh'}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={30} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.337255 0 0 0 0 0.556863 0 0 0 0 1 0 0 0 1 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_1362"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_1362"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_d_1_1362"
          x={54}
          y={0}
          width={'8.28vw'}
          height={'12.59vh'}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={30} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.337255 0 0 0 0 0.556863 0 0 0 0 1 0 0 0 1 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_1362"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_1362"
            result="shape"
          />
        </filter>
        <filter
          id="filter3_d_1_1362"
          x={81}
          y={0}
          width={'8.28vw'}
          height={'12.59vh'}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={30} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.337255 0 0 0 0 0.556863 0 0 0 0 1 0 0 0 1 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_1362"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_1362"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1_1362"
          x1={55}
          y1={65}
          x2={333.54}
          y2={65}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.447421} stopColor="#568EFF" />
          <stop offset={0.985} stopColor="#568EFF" stopOpacity={0.13} />
        </linearGradient>
      </defs>
    </svg>
  ) : (
    <svg
      width={'18.33vw'}
      height={'12.59vh'}
      viewBox="0 -2 352 136"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M296 71l-17.272-18H1"
        stroke="url(#paint0_linear_1_1366)"
        strokeWidth={2}
      />
      <g filter="url(#filter0_d_1_1366)">
        <path d="M277.057 56H253l15 16h24l-14.943-16z" fill="#568EFF" />
      </g>
      <g filter="url(#filter1_d_1_1366)">
        <path d="M250.057 56H226l15 16h24l-14.943-16z" fill="#568EFF" />
      </g>
      <g filter="url(#filter2_d_1_1366)">
        <path
          d="M223.057 56H199l15 16h24l-14.943-16z"
          fill="#568EFF"
          fillOpacity={0.7}
          shapeRendering="crispEdges"
        />
      </g>
      <g filter="url(#filter3_d_1_1366)">
        <path
          d="M196.057 56H172l15 16h24l-14.943-16z"
          fill="#568EFF"
          fillOpacity={0.5}
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1_1366"
          x={193}
          y={0}
          width={"8.28vw"}
          height={"12.59vh"}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={30} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.337255 0 0 0 0 0.556863 0 0 0 0 1 0 0 0 1 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_1366"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_1366"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_1_1366"
          x={166}
          y={0}
          width={"8.28vw"}
          height={"12.59vh"}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={30} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.337255 0 0 0 0 0.556863 0 0 0 0 1 0 0 0 1 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_1366"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_1366"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_d_1_1366"
          x={139}
          y={0}
          width={"8.28vw"}
          height={"12.59vh"}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={30} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.337255 0 0 0 0 0.556863 0 0 0 0 1 0 0 0 1 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_1366"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_1366"
            result="shape"
          />
        </filter>
        <filter
          id="filter3_d_1_1366"
          x={112}
          y={0}
          width={"8.28vw"}
          height={"12.59vh"}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={30} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.337255 0 0 0 0 0.556863 0 0 0 0 1 0 0 0 1 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_1366"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_1366"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1_1366"
          x1={297}
          y1={65}
          x2={18.4596}
          y2={65}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.447421} stopColor="#568EFF" />
          <stop offset={0.985} stopColor="#568EFF" stopOpacity={0.13} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default CyberDetails;
