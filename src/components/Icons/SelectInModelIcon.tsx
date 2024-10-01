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

export const SelectInModelIcon = React.forwardRef<HTMLElement, IconProps>(
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
        <path d="M4 3C3.44772 3 3 3.44772 3 4V17C3 17.5523 3.44772 18 4 18H10V16H5V5H16V10H18V4C18 3.44772 17.5523 3 17 3H4ZM13 12H12V13V20H14V15.4142L19.5858 21L21 19.5858L15.4142 14H20V12H13Z" />
      </svg>
    )
  }
)

SelectInModelIcon.propTypes = {
  size: PropTypes.oneOf(propTypesSize),
  className: propTypesClassName,
}

SelectInModelIcon.displayName = "AtomStyle.SelectInModelIcon"

export default SelectInModelIcon
