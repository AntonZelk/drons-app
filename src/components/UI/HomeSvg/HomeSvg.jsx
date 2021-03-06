import React from 'react';

const HomeSvg = ({ color }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.66667 17H4L16 5L28 17H25.3333"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66663 17V26.3333C6.66663 27.0406 6.94758 27.7189 7.44767 28.219C7.94777 28.719 8.62605 29 9.33329 29H22.6666C23.3739 29 24.0521 28.719 24.5522 28.219C25.0523 27.7189 25.3333 27.0406 25.3333 26.3333V17"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.6667 17H13.3334V22.3333H18.6667V17Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HomeSvg;
