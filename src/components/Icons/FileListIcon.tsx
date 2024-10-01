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

export const FileListIcon = React.forwardRef<HTMLElement, IconProps>(
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
        <path d="M4 18C4 19.2129 4.47773 19.8015 5.31278 20.6593C6.14783 21.5172 6.81877 21.9994 8 22H20V6C20.0003 5.39935 19.8853 5.37919 19.6616 4.82418C19.438 4.26917 19.11 3.76484 18.6965 3.34002C18.0365 2.66199 16.9779 2 16 2L4 2V18ZM8 7H16V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z" />
      </svg>
    )
  }
)

FileListIcon.propTypes = {
  size: PropTypes.oneOf(propTypesSize),
  className: propTypesClassName,
}

FileListIcon.displayName = "AtomStyle.FileListIcon"

export default FileListIcon
