import * as React from "react";

function AddIcon(props) {
  return (
    <svg width={60} height={60} fill="none" {...props}>
      <path
        d="M30 5C16.2 5 5 16.2 5 30s11.2 25 25 25 25-11.2 25-25S43.8 5 30 5zm12.5 27.5h-10v10h-5v-10h-10v-5h10v-10h5v10h10v5z"
        fill="url(#prefix__paint0_linear_1_202)"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear_1_202"
          x1={30}
          y1={5}
          x2={30}
          y2={55}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#06286E" />
          <stop offset={1} stopColor="#164EC0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default AddIcon;
