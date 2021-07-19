import React from 'react';

const BurgerSVG = ({ width, viewBox, d }) => {
  return (
    <svg
      width={width}
      height="4"
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={d}
        stroke="#1F1F1F"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BurgerSVG;
