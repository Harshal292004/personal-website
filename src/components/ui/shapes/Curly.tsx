import React from "react";

const Curly = ({
  className = "",
  width = 100,
  height = 20,
  color = "#000",
}) => (
  <div className={`absolute ${className}`}>
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={`M0 ${height / 2} Q${width / 8} 0 ${width / 4} ${height / 2} T ${
          width / 2
        } ${height / 2} T ${(3 * width) / 4} ${height / 2} T ${width} ${
          height / 2
        }`}
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  </div>
);

export default Curly;
