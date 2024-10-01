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

export const SelectionBoxIcon = React.forwardRef<HTMLElement, IconProps>(
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
        <path d="M11 19.475L6 16.6C5.68333 16.4167 5.4375 16.1708 5.2625 15.8625C5.0875 15.5542 5 15.225 5 14.875V9.125C5 8.775 5.0875 8.44583 5.2625 8.1375C5.4375 7.82917 5.68333 7.58333 6 7.4L11 4.525C11.3167 4.34167 11.65 4.25 12 4.25C12.35 4.25 12.6833 4.34167 13 4.525L18 7.4C18.3167 7.58333 18.5625 7.82917 18.7375 8.1375C18.9125 8.44583 19 8.775 19 9.125V14.875C19 15.225 18.9125 15.5542 18.7375 15.8625C18.5625 16.1708 18.3167 16.4167 18 16.6L13 19.475C12.6833 19.6583 12.35 19.75 12 19.75C11.65 19.75 11.3167 19.6583 11 19.475ZM2 7V4C2 3.45 2.19583 2.97917 2.5875 2.5875C2.97917 2.19583 3.45 2 4 2H7V4H4V7H2ZM7 22H4C3.45 22 2.97917 21.8042 2.5875 21.4125C2.19583 21.0208 2 20.55 2 20V17H4V20H7V22ZM17 22V20H20V17H22V20C22 20.55 21.8042 21.0208 21.4125 21.4125C21.0208 21.8042 20.55 22 20 22H17ZM20 7V4H17V2H20C20.55 2 21.0208 2.19583 21.4125 2.5875C21.8042 2.97917 22 3.45 22 4V7H20ZM8.05 8.525L7 9.125V10.25L11 12.575V17.175L12 17.75L13 17.175V12.575L17 10.25V9.125L15.95 8.525L12 10.85L8.05 8.525Z" />
      </svg>
    )
  }
)

SelectionBoxIcon.propTypes = {
  size: PropTypes.oneOf(propTypesSize),
  className: propTypesClassName,
}

SelectionBoxIcon.displayName = "AtomStyle.SelectionBoxIcon"

export default SelectionBoxIcon
