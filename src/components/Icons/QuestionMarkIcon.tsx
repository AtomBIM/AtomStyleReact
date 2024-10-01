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

export const QuestionMarkIcon = React.forwardRef<HTMLElement, IconProps>(
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
        <path d="M12 22C6.47697 22 1.99997 17.523 1.99997 12C1.99997 6.47698 6.47697 1.99998 12 1.99998C17.523 1.99998 22 6.47698 22 12C22 17.523 17.523 22 12 22ZM11 15V17H13V15H11ZM13 13.355C13.8036 13.1128 14.4936 12.5899 14.9441 11.8817C15.3947 11.1735 15.5759 10.327 15.4547 9.49644C15.3335 8.66585 14.9181 7.90641 14.284 7.35643C13.6499 6.80645 12.8393 6.50251 12 6.49998C11.1908 6.49991 10.4066 6.78013 9.78076 7.29297C9.15489 7.80581 8.72598 8.51961 8.56697 9.31297L10.529 9.70598C10.5846 9.42741 10.7183 9.17038 10.9143 8.96479C11.1104 8.75921 11.3608 8.61352 11.6364 8.54468C11.912 8.47584 12.2015 8.48668 12.4712 8.57594C12.7409 8.66521 12.9797 8.82921 13.1598 9.04889C13.3399 9.26856 13.454 9.53487 13.4887 9.81682C13.5233 10.0988 13.4772 10.3848 13.3557 10.6416C13.2342 10.8983 13.0423 11.1153 12.8023 11.2673C12.5623 11.4193 12.284 11.5 12 11.5C11.7348 11.5 11.4804 11.6053 11.2929 11.7929C11.1053 11.9804 11 12.2348 11 12.5V14H13V13.355Z" />
      </svg>
    )
  }
)

QuestionMarkIcon.propTypes = {
  size: PropTypes.oneOf(propTypesSize),
  className: propTypesClassName,
}

QuestionMarkIcon.displayName = "AtomStyle.QuestionMarkIcon"

export default QuestionMarkIcon
