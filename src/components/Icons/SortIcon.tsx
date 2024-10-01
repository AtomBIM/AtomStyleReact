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

export const SortIcon = React.forwardRef<HTMLElement, IconProps>(
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
        <path d="M18 8.6002L12 3L6 8.6002L7.49973 10L12 5.7996L16.5003 10L18 8.6002ZM18 15.3998L12 21L6 15.3998L7.49973 14L12 18.2004L16.5003 14L18 15.3998Z" />
      </svg>
    )
  }
)

SortIcon.propTypes = {
  size: PropTypes.oneOf(propTypesSize),
  className: propTypesClassName,
}

SortIcon.displayName = "AtomStyle.SortIcon"

export default SortIcon
