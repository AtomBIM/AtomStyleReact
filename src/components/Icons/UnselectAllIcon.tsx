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

export const UnselectAllIcon = React.forwardRef<HTMLElement, IconProps>(
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
        <path d="M6 8C6 4.68629 8.68629 2 12 2H22V12C22 15.3137 19.3137 18 16 18H6V8ZM8 9C8 6.23858 10.2386 4 13 4H20V11C20 13.7614 17.7614 16 15 16H8V9ZM2 6V21V22H3H18V20H4V6H2Z" />
      </svg>
    )
  }
)

UnselectAllIcon.propTypes = {
  size: PropTypes.oneOf(propTypesSize),
  className: propTypesClassName,
}

UnselectAllIcon.displayName = "AtomStyle.UnselectAllIcon"

export default UnselectAllIcon
