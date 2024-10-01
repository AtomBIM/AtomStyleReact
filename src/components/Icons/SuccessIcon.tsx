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

export const SuccessIcon = React.forwardRef<HTMLElement, IconProps>(
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
        <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM16.0858 8L17.5 9.41421L10.5 16.5001L6.5 12.5001L7.91421 11.0859L10.5 13.6717L16.0858 8Z" />
      </svg>
    )
  }
)

SuccessIcon.propTypes = {
  size: PropTypes.oneOf(propTypesSize),
  className: propTypesClassName,
}

SuccessIcon.displayName = "AtomStyle.SuccessIcon"

export default SuccessIcon
