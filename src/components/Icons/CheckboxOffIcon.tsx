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

export const CheckboxOffIcon = React.forwardRef<HTMLElement, IconProps>(
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
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.86763 4.8675C6.06346 3.67176 8.30885 3 10 3H21V14C21 15.691 20.3282 17.9368 19.1324 19.1325C17.9365 20.3282 15.6912 21 14 21H3V10C3 8.30897 3.67181 6.06324 4.86763 4.8675ZM6.4526 6.4525C7.38269 5.52248 8.64416 5 9.9595 5H19V14.0409C19 15.3561 18.4775 16.6175 17.5474 17.5475C16.6173 18.4775 15.3558 19 14.0405 19H5V9.95914C5 8.64389 5.52252 7.38252 6.4526 6.4525Z"
        />
      </svg>
    )
  }
)

CheckboxOffIcon.propTypes = {
  size: PropTypes.oneOf(propTypesSize),
  className: propTypesClassName,
}

CheckboxOffIcon.displayName = "AtomStyle.CheckboxOffIcon"

export default CheckboxOffIcon
