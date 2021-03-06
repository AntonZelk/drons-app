import React from 'react';

const CartSvg = ({ color }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.00004 28C9.4728 28 10.6667 26.8061 10.6667 25.3334C10.6667 23.8606 9.4728 22.6667 8.00004 22.6667C6.52728 22.6667 5.33337 23.8606 5.33337 25.3334C5.33337 26.8061 6.52728 28 8.00004 28Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.6667 28C24.1394 28 25.3333 26.8061 25.3333 25.3334C25.3333 23.8606 24.1394 22.6667 22.6667 22.6667C21.1939 22.6667 20 23.8606 20 25.3334C20 26.8061 21.1939 28 22.6667 28Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.6667 22.6667H8.00004V4H5.33337"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 6.66669L26.6667 8.00002L25.3333 17.3334H8"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CartSvg;
