import * as React from "react";

function Square(props) {
  return (
    <svg width={30} height={31} fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.286 10.908H0V.194h10.714V4.48H4.286v6.428zM0 19.48h4.286v6.428h6.428v4.286H0V19.48zm25.714 6.428h-6.428v4.286H30V19.48h-4.286v6.428zM19.286 4.48V.194H30v10.714h-4.286V4.48h-6.428z"
        fill="url(#prefix__paint0_linear_1_174)"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear_1_174"
          x1={15}
          y1={0.194}
          x2={15}
          y2={30.194}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#06286E" />
          <stop offset={1} stopColor="#164EC0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Square;
