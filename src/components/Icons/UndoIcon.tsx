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

export const UndoIcon = React.forwardRef<HTMLElement, IconProps>(
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
        <path d="M7 19V17H14.1C15.15 17 16.0625 16.6667 16.8375 16C17.6125 15.3333 18 14.5 18 13.5C18 12.5 17.6125 11.6667 16.8375 11C16.0625 10.3333 15.15 10 14.1 10H7.8L10.4 12.6L9 14L4 9L9 4L10.4 5.4L7.8 8H14.1C15.7167 8 17.1042 8.525 18.2625 9.575C19.4208 10.625 20 11.9333 20 13.5C20 15.0667 19.4208 16.375 18.2625 17.425C17.1042 18.475 15.7167 19 14.1 19H7Z" />
      </svg>
    )
  }
)

UndoIcon.propTypes = {
  size: PropTypes.oneOf(propTypesSize),
  className: propTypesClassName,
}

UndoIcon.displayName = "AtomStyle.UndoIcon"

export default UndoIcon
