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

export const CheckboxOnIcon = React.forwardRef<HTMLElement, IconProps>(
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
        <path d="M10 3C6.13401 3 3 6.13401 3 10V21H14C17.866 21 21 17.866 21 14V3H10ZM16.5858 7.5L18 8.91421L11 16.0001L7 12.0001L8.41421 10.5859L11 13.1717L16.5858 7.5Z" />
      </svg>
    )
  }
)

CheckboxOnIcon.propTypes = {
  size: PropTypes.oneOf(propTypesSize),
  className: propTypesClassName,
}

CheckboxOnIcon.displayName = "AtomStyle.CheckboxOnIcon"

export default CheckboxOnIcon
