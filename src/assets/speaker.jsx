import * as React from "react";

function Speaker(props) {
  return (
    <svg width={35} height={35} fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.825 7.501V4.583c5.682 1.289 9.918 6.361 9.918 12.426 0 6.064-4.236 11.137-9.918 12.426v-2.919c4.095-1.218 7.084-5.015 7.084-9.507S24.92 8.72 20.825 7.5zM5.239 12.758v8.502h5.667l7.085 7.084V5.674l-7.085 7.084H5.24zm19.128 4.25a6.377 6.377 0 00-3.542-5.71v11.407a6.34 6.34 0 003.542-5.696z"
        fill="#F5F5F5"
      />
    </svg>
  );
}

export default Speaker;
