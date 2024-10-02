import React from "react"
import PropTypes from "prop-types"

// utils
import classnames from "classnames"
import { twMerge } from "tailwind-merge"
import findMatch from "../../utils/findMatch"
import objectsToString from "../../utils/objectsToString"

// context
import { useTheme } from "../../context/theme"

// components
import Spinner from "../Spinner"

// types
import type {
  variant,
  size,
  color,
  fullWidth,
  className,
  children,
} from "../../types/components/button"
import {
  propTypesVariant,
  propTypesSize,
  propTypesColor,
  propTypesFullWidth,
  propTypesClassName,
  propTypesChildren,
  propTypesLoading,
} from "../../types/components/button"

export interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: variant
  size?: size
  color?: color
  fullWidth?: fullWidth
  className?: className
  children: children
  loading?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant, size, color, fullWidth, className, children, loading, ...rest },
    ref
  ) => {
    // 1. init
    const { button } = useTheme()
    const { valid, defaultProps, styles } = button
    const { base, variants, sizes } = styles

    // 2. set default props
    variant = variant ?? defaultProps.variant
    size = size ?? defaultProps.size
    color = color ?? defaultProps.color
    fullWidth = fullWidth ?? defaultProps.fullWidth
    className = twMerge(defaultProps.className || "", className)

    // 4. set styles
    const buttonBase = objectsToString(base.initial)
    const buttonVariant = objectsToString(
      variants[findMatch(valid.variants, variant, "filled")][
        findMatch(valid.colors, color, "AtomGreen")
      ]
    )
    const buttonSize = objectsToString(
      sizes[findMatch(valid.sizes, size, "md")]
    )
    const classes = twMerge(
      classnames(
        buttonBase,
        buttonSize,
        buttonVariant,
        {
          [objectsToString(base.fullWidth)]: fullWidth,
        },
        {
          "flex items-center gap-2": loading,
          "gap-3": size === "lg",
        }
      ),
      className
    )

    const spinnerClass = twMerge(
      classnames({
        "w-4 h-4": true,
        "w-5 h-5": size === "lg",
      })
    )

    // 5. return
    return (
      <button
        {...rest}
        disabled={rest.disabled ?? loading}
        ref={ref}
        className={classes}
        type={rest.type || "button"}
        onMouseDown={(e) => {
          const onMouseDown = rest?.onMouseDown

          return typeof onMouseDown === "function" && onMouseDown(e)
        }}
      >
        {loading && <Spinner className={spinnerClass} />}
        {children}
      </button>
    )
  }
)

Button.propTypes = {
  variant: PropTypes.oneOf(propTypesVariant),
  size: PropTypes.oneOf(propTypesSize),
  color: PropTypes.oneOf(propTypesColor),
  fullWidth: propTypesFullWidth,
  className: propTypesClassName,
  children: propTypesChildren,
  loading: propTypesLoading,
}

Button.displayName = "AtomStyle.Button"

export default Button
