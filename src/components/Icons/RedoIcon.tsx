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

export const RedoIcon = React.forwardRef<HTMLElement, IconProps>(
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
        <path d="M9.9 19C8.28333 19 6.89583 18.475 5.7375 17.425C4.57917 16.375 4 15.0667 4 13.5C4 11.9333 4.57917 10.625 5.7375 9.575C6.89583 8.525 8.28333 8 9.9 8H16.2L13.6 5.4L15 4L20 9L15 14L13.6 12.6L16.2 10H9.9C8.85 10 7.9375 10.3333 7.1625 11C6.3875 11.6667 6 12.5 6 13.5C6 14.5 6.3875 15.3333 7.1625 16C7.9375 16.6667 8.85 17 9.9 17H17V19H9.9Z" />
      </svg>
    )
  }
)

RedoIcon.propTypes = {
  size: PropTypes.oneOf(propTypesSize),
  className: propTypesClassName,
}

RedoIcon.displayName = "AtomStyle.RedoIcon"

export default RedoIcon
