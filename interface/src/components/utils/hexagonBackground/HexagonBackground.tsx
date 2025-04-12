import { useLayoutEffect, useState } from "react";
import { UtilsInterface } from "../../../interface/Utils.Interface";
import { getColorByClass } from "../../../utils/getClass";

function HexagonBackground({ ...props }: UtilsInterface) {
  const { width, height, type, stroketop, trapezio } = props;
  const [typecolor, setTypecolor] = useState<string>("");

  useLayoutEffect(() => {
    if (type) {
      setTypecolor(getColorByClass(type));
    }
  }, [type]);

  return (
    <svg
      width={width + "vw"}
      height={height + "vh"}
      viewBox="0 0 213 283"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_d_1_1140)">
        <path
          d="M38 201.961v-73.976l67.154-38.01L174 127.993v73.988l-65.745 39.692L38 201.961z"
          stroke={typecolor}
          strokeOpacity={0.4}
          strokeWidth={2}
          shapeRendering="crispEdges"
        />
      </g>
      <g filter="url(#filter1_d_1_1140)" shapeRendering="crispEdges">
        <path
          d="M50.145 133.844l56.297-31.058 57.704 31.058v60.504l-55.124 32.438-58.877-32.438v-60.504z"
          fill={typecolor}
          fillOpacity={0.3}
        />
        <path
          d="M51.145 193.758v-59.324l55.303-30.509 56.698 30.516v59.335l-54.14 31.859-57.86-31.877z"
          stroke={typecolor}
          strokeOpacity={0.4}
          strokeWidth={2}
        />
      </g>
      {trapezio && (
        <g filter="url(#filter2_d_1_1140)">
          {/*Trapezio topo*/}
          <path
            d="M167 36H45l11.267 9.968h99.788L167 36z"
            fill={typecolor}
            fillOpacity={0.3}
            shapeRendering="crispEdges"
          />
        </g>
      )}
      {stroketop && (
        <g filter="url(#filter3_d_1_1140)">
          {/*linha topo*/}
          <path
            stroke={typecolor}
            strokeOpacity={0.4}
            strokeWidth={2}
            shapeRendering="crispEdges"
            d="M106 46L106 89"
          />
        </g>
      )}
      <defs>
        <filter
          id="filter0_d_1_1140"
          x={0.142855}
          y={53.6872}
          width={212.857}
          height={228.857}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={0.571429} dy={2.28571} />
          <feGaussianBlur stdDeviation={18.7143} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_1140"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_1140"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_1_1140"
          x={13.2884}
          y={67.6433}
          width={188.857}
          height={198.857}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={0.571429} dy={2.28571} />
          <feGaussianBlur stdDeviation={18.7143} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_1140"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_1140"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_d_1_1140"
          x={8.14286}
          y={0.857141}
          width={196.857}
          height={84.8257}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={0.571429} dy={2.28571} />
          <feGaussianBlur stdDeviation={18.7143} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_1140"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_1140"
            result="shape"
          />
        </filter>
        <filter
          id="filter3_d_1_1140"
          x={68.1429}
          y={10.8571}
          width={76.8571}
          height={117.857}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={0.571429} dy={2.28571} />
          <feGaussianBlur stdDeviation={18.7143} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />

          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_1140"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_1140"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default HexagonBackground;
