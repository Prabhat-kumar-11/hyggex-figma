import * as React from "react";

function DownArrow(props) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.855 7.496a.6.6 0 01.85 0l6.775 6.776 6.775-6.776a.601.601 0 01.85.85l-7.2 7.2a.6.6 0 01-.85 0l-7.2-7.2a.6.6 0 010-.85z"
        fill="#28262C"
      />
    </svg>
  );
}

export default DownArrow;
