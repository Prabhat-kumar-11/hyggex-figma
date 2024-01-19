import * as React from "react";

function RightArrow(props) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
        fill="#06286E"
      />
    </svg>
  );
}

export default RightArrow;
