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

export const LockIcon = React.forwardRef<HTMLElement, IconProps>(
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
        <path d="M7 7V10H4V14.5C4 16.4924 4.99971 18.0911 6.5 19.5C8.00029 20.9089 9.87827 22 12 22C14.1217 22 15.9997 20.9089 17.5 19.5C19.0003 18.0911 20 16.4924 20 14.5V10H17V7C17 4 14 2 12 2C9 2 7 4.5 7 7ZM12 3.5C14.5 3.5 15.5 5.5 15.5 7V10H8.5V7C8.5 5.5 9.5 3.5 12 3.5ZM11 15.5225V18H13V15.5225C13.3884 15.3212 13.6608 15.0044 13.8365 14.6219C14.0121 14.2394 14.0474 13.813 13.9368 13.4096C13.8261 13.0062 13.5758 12.6488 13.2252 12.3936C12.8746 12.1385 12.4436 12 12 12C11.5564 12 11.1254 12.1385 10.7748 12.3936C10.4242 12.6488 10.1739 13.0062 10.0632 13.4096C9.95258 13.813 9.98785 14.2394 10.1635 14.6219C10.3392 15.0044 10.6116 15.3212 11 15.5225Z" />
      </svg>
    )
  }
)

LockIcon.propTypes = {
  size: PropTypes.oneOf(propTypesSize),
  className: propTypesClassName,
}

LockIcon.displayName = "AtomStyle.LockIcon"

export default LockIcon
