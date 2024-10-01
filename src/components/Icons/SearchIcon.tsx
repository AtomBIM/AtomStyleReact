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

export const SearchIcon = React.forwardRef<HTMLElement, IconProps>(
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
        <path d="M15.1288 16.4016C13.854 17.4029 12.2467 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35787 6.35786 3 10.5 3C14.6421 3 18 6.35787 18 10.5C18 12.2467 17.4029 13.854 16.4016 15.1288L21 19.7272L19.7273 21L15.1288 16.4016ZM16.125 10.5C16.125 13.6066 13.6066 16.125 10.5 16.125C7.39344 16.125 4.87505 13.6066 4.87505 10.5C4.87505 7.3934 7.39344 4.875 10.5 4.875C13.6066 4.875 16.125 7.3934 16.125 10.5Z" />
      </svg>
    )
  }
)

SearchIcon.propTypes = {
  size: PropTypes.oneOf(propTypesSize),
  className: propTypesClassName,
}

SearchIcon.displayName = "AtomStyle.SearchIcon"

export default SearchIcon
