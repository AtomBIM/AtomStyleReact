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

export const FilterIcon = React.forwardRef<HTMLElement, IconProps>(
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
        <path d="M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z" />
      </svg>
    )
  }
)

FilterIcon.propTypes = {
  size: PropTypes.oneOf(propTypesSize),
  className: propTypesClassName,
}

FilterIcon.displayName = "AtomStyle.FilterIcon"

export default FilterIcon
