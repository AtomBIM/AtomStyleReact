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

export const EditIcon = React.forwardRef<HTMLElement, IconProps>(
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
        <path d="M6.41403 15.9912L16.556 5.83439L15.142 4.41832L5.00003 14.5752V15.9912H6.41403ZM7.24303 18.0234H3.00003V13.7449L14.435 2.29321C14.6226 2.10547 14.8769 2 15.142 2C15.4072 2 15.6615 2.10547 15.849 2.29321L18.678 5.12635C18.8655 5.31416 18.9708 5.56884 18.9708 5.83439C18.9708 6.09994 18.8655 6.35462 18.678 6.54242L7.24303 18.0234ZM3.00003 19.9971H21V22H3.00003V19.9971Z" />
      </svg>
    )
  }
)

EditIcon.propTypes = {
  size: PropTypes.oneOf(propTypesSize),
  className: propTypesClassName,
}

EditIcon.displayName = "AtomStyle.EditIcon"

export default EditIcon
