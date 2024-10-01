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

export const ZoomIcon = React.forwardRef<HTMLElement, IconProps>(
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
        <path d="M10.5714 3C9.57714 3 8.59258 3.19584 7.67397 3.57634C6.75536 3.95684 5.92069 4.51455 5.21762 5.21762C4.51455 5.92069 3.95684 6.75536 3.57634 7.67397C3.19584 8.59258 3 9.57714 3 10.5714C3 11.5657 3.19584 12.5503 3.57634 13.4689C3.95684 14.3875 4.51455 15.2222 5.21762 15.9252C5.92069 16.6283 6.75536 17.186 7.67397 17.5665C8.59258 17.947 9.57714 18.1429 10.5714 18.1429C12.5795 18.1429 14.5053 17.3452 15.9252 15.9252C17.3452 14.5053 18.1429 12.5795 18.1429 10.5714C18.1429 8.56336 17.3452 6.63754 15.9252 5.21762C14.5053 3.7977 12.5795 3 10.5714 3ZM6.9086 1.72858C8.06986 1.24757 9.31449 1 10.5714 1C13.1099 1 15.5445 2.00842 17.3395 3.80341C19.1344 5.5984 20.1429 8.03293 20.1429 10.5714C20.1429 12.7744 19.3834 14.899 18.0095 16.5953L22.7071 21.2929L21.2929 22.7071L16.5953 18.0095C14.899 19.3834 12.7744 20.1429 10.5714 20.1429C9.31449 20.1429 8.06986 19.8953 6.9086 19.4143C5.74734 18.9333 4.6922 18.2282 3.80341 17.3395C2.91462 16.4507 2.20959 15.3955 1.72858 14.2343C1.24757 13.073 1 11.8284 1 10.5714C1 9.31449 1.24757 8.06986 1.72858 6.9086C2.20959 5.74734 2.91462 4.6922 3.80341 3.80341C4.6922 2.91462 5.74734 2.20959 6.9086 1.72858ZM9.57143 9.57143V7H11.5714V9.57143H14.1429V11.5714H11.5714V14.1429H9.57143V11.5714H7V9.57143H9.57143Z" />
      </svg>
    )
  }
)

ZoomIcon.propTypes = {
  size: PropTypes.oneOf(propTypesSize),
  className: propTypesClassName,
}

ZoomIcon.displayName = "AtomStyle.ZoomIcon"

export default ZoomIcon
