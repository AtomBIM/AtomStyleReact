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

export const WarningIcon = React.forwardRef<HTMLElement, IconProps>(
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
        <path d="M11.9999 2.00001C17.5229 2.00001 21.9999 6.47701 21.9999 12C21.9999 17.523 17.5229 22 11.9999 22C6.47692 22 1.99992 17.523 1.99992 12C1.99993 6.47701 6.47693 2.00001 11.9999 2.00001ZM12.9999 13L12.9999 7.00001L10.9999 7.00001L10.9999 13L12.9999 13ZM12.9999 17L12.9999 15L10.9999 15L10.9999 17L12.9999 17Z" />
      </svg>
    )
  }
)

WarningIcon.propTypes = {
  size: PropTypes.oneOf(propTypesSize),
  className: propTypesClassName,
}

WarningIcon.displayName = "AtomStyle.WarningIcon"

export default WarningIcon
