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

export const InfoIcon = React.forwardRef<HTMLElement, IconProps>(
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
        <path d="M11.9999 22C6.47691 22 1.99991 17.523 1.99991 12C1.99991 6.47701 6.47691 2.00001 11.9999 2.00001C17.5229 2.00001 21.9999 6.47701 21.9999 12C21.9999 17.523 17.5229 22 11.9999 22ZM10.9999 11V17H12.9999V11H10.9999ZM10.9999 7.00001V9.00001L12.9999 9.00001V7.00001L10.9999 7.00001Z" />
      </svg>
    )
  }
)

InfoIcon.propTypes = {
  size: PropTypes.oneOf(propTypesSize),
  className: propTypesClassName,
}

InfoIcon.displayName = "AtomStyle.InfoIcon"

export default InfoIcon
