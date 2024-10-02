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

export const DownloadIcon = React.forwardRef<HTMLElement, IconProps>(
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
        <path d="M4.00859 17.4253C4.00859 18.6382 4.47773 19.8015 5.31278 20.6593C6.14783 21.5172 7.28047 21.9994 8.46169 22H20V6.57466C20.0003 5.97401 19.8853 5.37919 19.6616 4.82418C19.438 4.26917 19.11 3.76484 18.6965 3.34002C18.283 2.91519 17.792 2.57819 17.2516 2.34827C16.7111 2.11834 16.1319 2 15.5469 2H4L4.00859 17.4253ZM11 7H13V13H16L12 17L8 13H11V7Z" />
      </svg>
    )
  }
)

DownloadIcon.propTypes = {
  size: PropTypes.oneOf(propTypesSize),
  className: propTypesClassName,
}

DownloadIcon.displayName = "AtomStyle.DownloadIcon"

export default DownloadIcon
