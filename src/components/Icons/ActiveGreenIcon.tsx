import type React from 'react'

interface CustomIconProps {
  // type:string;
  width?: number
  height?: number
}

const BellIcon: React.FC<CustomIconProps> = ({ width = 18, height = 18 }) => {
  return (
    <svg fill="none" height={height} viewBox="0 0 6 6" width={width} xmlns="http://www.w3.org/2000/svg">
      <circle cx="3" cy="3" fill="#53B2D9" r="3" />
    </svg>
  )
}

export default BellIcon
