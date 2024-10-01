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

export const UploadIcon = React.forwardRef<HTMLElement, IconProps>(
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
        <path d="M19.9914 6.57466C19.9914 5.36176 19.5223 4.19852 18.6872 3.34067C17.8522 2.48282 16.7195 2.00059 15.5383 2H4V17.4253C3.99972 18.026 4.11471 18.6208 4.33837 19.1758C4.56204 19.7308 4.88997 20.2352 5.30351 20.66C5.71704 21.0848 6.20803 21.4218 6.74844 21.6517C7.28886 21.8817 7.86809 22 8.45306 22H20L19.9914 6.57466ZM13 17H11V11H8L12 7L16 11H13V17Z" />
      </svg>
    )
  }
)

UploadIcon.propTypes = {
  size: PropTypes.oneOf(propTypesSize),
  className: propTypesClassName,
}

UploadIcon.displayName = "AtomStyle.UploadIcon"

export default UploadIcon
