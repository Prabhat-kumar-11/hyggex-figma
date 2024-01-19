import * as React from "react";

function Reload(props) {
  return (
    <svg width={30} height={31} fill="none" {...props}>
      <path
        d="M25.591 4.594a14.93 14.93 0 00-10.6-4.41C6.698.185 0 6.902 0 15.195s6.698 15.01 14.99 15.01c6.999 0 12.834-4.785 14.503-11.258h-3.902a11.238 11.238 0 01-10.6 7.505c-6.21 0-11.257-5.047-11.257-11.257S8.78 3.937 14.99 3.937c3.114 0 5.89 1.295 7.917 3.34l-6.041 6.04H30V.186l-4.409 4.409z"
        fill="url(#prefix__paint0_linear_1_169)"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear_1_169"
          x1={15}
          y1={0.185}
          x2={15}
          y2={30.203}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#06286E" />
          <stop offset={1} stopColor="#164EC0" />
        </linearGradient>
      </defs>
    </svg>
  );
}


export default Reload;

