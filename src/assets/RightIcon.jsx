import * as React from "react";

function RightIcon(props) {
  return (
    <svg width={60} height={61} fill="none" {...props}>
      <path
        d="M30 .194a30 30 0 1030 30 30.058 30.058 0 00-30-30zm9.634 31.702L28.095 42.28c-.427.385-.981.6-1.556.606a2.283 2.283 0 01-1.702-.75 2.31 2.31 0 01.145-3.262l9.633-8.68-9.634-8.683a2.308 2.308 0 013.114-3.403l11.539 10.384a2.309 2.309 0 010 3.404z"
        fill="url(#prefix__paint0_linear_1_173)"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear_1_173"
          x1={30}
          y1={0.194}
          x2={30}
          y2={60.194}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#06286E" />
          <stop offset={1} stopColor="#164EC0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default RightIcon;
