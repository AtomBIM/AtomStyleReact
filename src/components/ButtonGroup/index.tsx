import React from "react"
import PropTypes from "prop-types"

// utils
import classnames from "classnames"
import { twMerge } from "tailwind-merge"
import findMatch from "../../utils/findMatch"
import objectsToString from "../../utils/objectsToString"

// context
import { useTheme } from "../../context/theme"

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
} from "../../types/components/button"

export interface ButtonGroupProps extends React.ComponentProps<"div"> {
  variant?: variant
  size?: size
  color?: color
  fullWidth?: fullWidth
  className?: className
  children: children
}

export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ variant, size, color, fullWidth, className, children, ...rest }, ref) => {
    // 1. init
    const { buttonGroup } = useTheme()
    const { defaultProps, styles, valid } = buttonGroup
    const { base, dividerColor } = styles

    // 2. set default props
    variant = variant ?? defaultProps.variant
    size = size ?? defaultProps.size
    color = color ?? defaultProps.color
    fullWidth = fullWidth ?? defaultProps.fullWidth
    className = twMerge(defaultProps.className || "", className)

    // 4. set styles
    const classes = twMerge(
      classnames(objectsToString(base.initial), {
        [objectsToString(base.fullWidth)]: fullWidth,
        "divide-x": variant !== "outlined",
        [objectsToString(
          dividerColor[findMatch(valid.colors, color, "AtomGray700")]
        )]: variant !== "outlined",
      }),
      className
    )

    // 5. return
    return (
      <div {...rest} ref={ref} className={classes}>
        {React.Children.map(
          children,
          (child, index) =>
            React.isValidElement(child) &&
            React.cloneElement(child, {
              variant,
              size,
              color,
              fullWidth,
              className: twMerge(
                classnames({
                  "rounded-r-none":
                    index !== React.Children.count(children) - 1,
                  "border-r-0": index !== React.Children.count(children) - 1,
                  "rounded-l-none": index !== 0,
                }),
                child.props?.className
              ),
            } as any)
        )}
      </div>
    )
  }
)

ButtonGroup.propTypes = {
  variant: PropTypes.oneOf(propTypesVariant),
  size: PropTypes.oneOf(propTypesSize),
  color: PropTypes.oneOf(propTypesColor),
  fullWidth: propTypesFullWidth,
  className: propTypesClassName,
  children: propTypesChildren,
}

ButtonGroup.displayName = "AtomStyle.ButtonGroup"

export default ButtonGroup
