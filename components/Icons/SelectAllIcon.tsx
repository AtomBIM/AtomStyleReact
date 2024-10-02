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

export const SelectAllIcon = React.forwardRef<HTMLElement, IconProps>(
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
        <path d="M6 8C6 4.68629 8.68629 2 12 2H22V12C22 15.3137 19.3137 18 16 18H6V8ZM19.5 7.41421L18.0858 6L12.9998 11.1717L10.9141 9.08589L9.49988 10.5001L12.9998 14.0001L19.5 7.41421ZM2 6V21V22H3H18V20H4V6H2Z" />
      </svg>
    )
  }
)

SelectAllIcon.propTypes = {
  size: PropTypes.oneOf(propTypesSize),
  className: propTypesClassName,
}

SelectAllIcon.displayName = "AtomStyle.SelectAllIcon"

export default SelectAllIcon
