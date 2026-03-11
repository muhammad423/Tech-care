import React from 'react'
// import type React from "react";

interface CustomIconProps {
  // type:string;
  width?: number
  height?: number
}

const BagIcon: React.FC<CustomIconProps> = ({ width = 18, height = 18 }) => {
  return (
    <svg fill="none" height={height} viewBox="0 0 25 24" width={width} xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_8407_8272)">
        <path d="M1.33337 12H23.3334" stroke="#1CB3DC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path
          d="M4.33337 7.00009V4H7.33346"
          stroke="#1CB3DC"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M17.3333 4H20.3334V7.00009"
          stroke="#1CB3DC"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M20.3334 16.9999V20H17.3333"
          stroke="#1CB3DC"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M7.33346 20H4.33337V16.9999"
          stroke="#1CB3DC"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_8407_8272">
          <rect fill="white" height="24" transform="translate(0.333374)" width="24" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default BagIcon
