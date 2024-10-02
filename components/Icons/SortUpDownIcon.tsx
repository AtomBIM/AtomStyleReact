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

export const SortUpDownIcon = React.forwardRef<HTMLElement, IconProps>(
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
        <path d="M11.95 7.95L10.536 9.364L7.99999 6.828V20H5.99999V6.828L3.46499 9.364L2.04999 7.95L6.99999 3L11.95 7.95ZM21.95 16.05L17 21L12.05 16.05L13.464 14.636L16.001 17.172L16 4H18V17.172L20.536 14.636L21.95 16.05Z" />
      </svg>
    )
  }
)

SortUpDownIcon.propTypes = {
  size: PropTypes.oneOf(propTypesSize),
  className: propTypesClassName,
}

SortUpDownIcon.displayName = "AtomStyle.SortUpDownIcon"

export default SortUpDownIcon
