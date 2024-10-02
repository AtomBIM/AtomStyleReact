import React from "react"
import PropTypes from "prop-types"

// utils
import classnames from "classnames"
import { twMerge } from "tailwind-merge"

import type { size, className } from "../../types/components/icon"
import { propTypesSize, propTypesClassName } from "../../types/components/icon"

export interface IconProps {
  size?: size
  className?: className
}

export const RemoveIcon = React.forwardRef<HTMLElement, IconProps>(
  ({ size, className }) => {
    size = size ?? 24
    className = className

    const iconSize = 24
    const classes = twMerge(classnames(iconSize), className)

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={classes}
      >
        <path d="M6.00015 19C6.00015 19.5304 6.21087 20.0391 6.58594 20.4142C6.96101 20.7893 7.46972 21 8.00015 21H16.0002C16.5306 21 17.0393 20.7893 17.4144 20.4142C17.7894 20.0391 18.0002 19.5304 18.0002 19V7H6.00015V19ZM8.46015 11.88L9.87015 10.47L12.0002 12.59L14.1202 10.47L15.5302 11.88L13.4102 14L15.5302 16.12L14.1202 17.53L12.0002 15.41L9.88015 17.53L8.47015 16.12L10.5902 14L8.46015 11.88ZM15.5002 4L14.5002 3H9.50015L8.50015 4H5.00015V6H19.0002V4H15.5002Z" />
      </svg>
    )
  }
)

RemoveIcon.propTypes = {
  size: PropTypes.oneOf(propTypesSize),
  className: propTypesClassName,
}

RemoveIcon.displayName = "AtomStyle.RemoveIcon"

export default RemoveIcon
