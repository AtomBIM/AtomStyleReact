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
  color,
  label,
  className,
  disabled,
  objectType,
} from "../../types/components/checkbox"
import {
  propTypesColor,
  propTypesLabel,
  propTypesClassName,
  propTypesDisabled,
  propTypesObject,
} from "../../types/components/checkbox"

export interface SwitchProps extends React.ComponentProps<"input"> {
  color?: color
  label?: label
  className?: className
  disabled?: disabled
  containerProps?: objectType
  labelProps?: objectType
  circleProps?: objectType
  inputRef?: React.Ref<HTMLInputElement>
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      color,
      label,
      className,
      disabled,
      containerProps,
      circleProps,
      labelProps,
      inputRef,
      ...rest
    },
    ref
  ) => {
    // 1. init
    const { switch: toggle } = useTheme()
    const { defaultProps, valid, styles } = toggle
    const { base, colors } = styles
    const switchId = React.useId()

    // 2. set default props
    color = color ?? defaultProps.color
    disabled = disabled ?? defaultProps.disabled
    containerProps = containerProps ?? defaultProps.containerProps
    labelProps = labelProps ?? defaultProps.labelProps
    circleProps = circleProps ?? defaultProps.circleProps
    className = twMerge(defaultProps.className || "", className)

    // 4. set styles
    const rootClasses = classnames(objectsToString(base.root), {
      [objectsToString(base.disabled)]: disabled,
    })
    const containerClasses = twMerge(
      classnames(objectsToString(base.container)),
      containerProps?.className
    )
    const inputClasses = twMerge(
      classnames(
        objectsToString(base.input),
        objectsToString(colors[findMatch(valid.colors, color, "AtomGreen")])
      ),
      className
    )
    const circleClasses = twMerge(
      classnames(
        objectsToString(base.circle),
        colors[findMatch(valid.colors, color, "AtomGreen")].circle,
        colors[findMatch(valid.colors, color, "AtomGreen")].before
      ),
      circleProps?.className
    )
    const labelClasses = twMerge(
      classnames(objectsToString(base.label)),
      labelProps?.className
    )

    // 4. return
    return (
      <div ref={ref} className={rootClasses}>
        <div {...containerProps} className={containerClasses}>
          <input
            {...rest}
            ref={inputRef}
            type="checkbox"
            disabled={disabled}
            id={rest.id || switchId}
            className={inputClasses}
          />
          <label
            {...circleProps}
            htmlFor={rest.id || switchId}
            className={circleClasses}
          ></label>
        </div>
        {label && (
          <label
            {...labelProps}
            htmlFor={rest.id || switchId}
            className={labelClasses}
          >
            {label}
          </label>
        )}
      </div>
    )
  }
)

Switch.propTypes = {
  color: PropTypes.oneOf(propTypesColor),
  label: propTypesLabel,
  className: propTypesClassName,
  disabled: propTypesDisabled,
  containerProps: propTypesObject,
  labelProps: propTypesObject,
  circleProps: propTypesObject,
}

Switch.displayName = "AtomStyle.Switch"

export default Switch
