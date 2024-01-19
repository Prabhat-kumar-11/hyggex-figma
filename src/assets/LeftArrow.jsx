import * as React from "react";

function LeftArrow(props) {
  return (
    <svg width={60} height={61} fill="none" {...props}>
      <path
        d="M30 .194a30 30 0 11-30 30 30.058 30.058 0 0130-30zm-9.634 31.702L31.905 42.28c.428.385.981.6 1.556.606a2.283 2.283 0 001.702-.75 2.31 2.31 0 00-.144-3.262l-9.634-8.68 9.634-8.683a2.308 2.308 0 00-3.114-3.403L20.366 28.492a2.309 2.309 0 000 3.404z"
        fill="url(#prefix__paint0_linear_1_171)"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear_1_171"
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

export default LeftArrow;
