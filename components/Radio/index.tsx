import React from "react"
import PropTypes from "prop-types"

// utils
import classnames from "classnames"
import { twMerge } from "tailwind-merge"
import objectsToString from "../../utils/objectsToString"

// context
import { useTheme } from "../../context/theme"

// types
import type {
  label,
  iconChecked,
  iconUnchecked,
  className,
  disabled,
  objectType,
} from "../../types/components/checkbox"
import {
  propTypesColor,
  propTypesLabel,
  propTypesIconChecked,
  propTypesIconUnchecked,
  propTypesClassName,
  propTypesDisabled,
  propTypesObject,
} from "../../types/components/checkbox"
import RadioOnIcon from "../Icons/RadioOnIcon"
import RadioOffIcon from "../Icons/RadioOffIcon"

export interface RadioProps extends React.ComponentProps<"input"> {
  label?: label
  iconChecked?: iconChecked
  iconUnchecked?: iconUnchecked
  className?: className
  disabled?: disabled
  containerProps?: objectType
  labelProps?: objectType
  iconCheckedProps?: objectType
  iconUncheckedProps?: objectType
  inputRef?: React.Ref<HTMLInputElement>
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      label,
      iconChecked,
      iconUnchecked,
      className,
      disabled,
      containerProps,
      labelProps,
      iconCheckedProps,
      iconUncheckedProps,
      inputRef,
      ...rest
    },
    ref
  ) => {
    // 1. init
    const { radio } = useTheme()
    const { defaultProps, styles } = radio
    const { base } = styles
    const radioId = React.useId()

    // 2. set default props
    label = label ?? defaultProps.label
    iconChecked = iconChecked ?? defaultProps.iconChecked
    iconUnchecked = iconUnchecked ?? defaultProps.iconUnchecked
    disabled = disabled ?? defaultProps.disabled
    containerProps = containerProps ?? defaultProps.containerProps
    labelProps = labelProps ?? defaultProps.labelProps
    iconCheckedProps = iconCheckedProps ?? defaultProps.iconCheckedProps
    iconUncheckedProps = iconUncheckedProps ?? defaultProps.iconUncheckedProps
    className = twMerge(defaultProps.className || "", className)

    // 4. set styles
    const rootClasses = classnames(objectsToString(base.root), {
      [objectsToString(base.disabled)]: disabled,
      className,
    })
    const containerClasses = twMerge(
      classnames(objectsToString(base.container)),
      containerProps?.className,
      className
    )
    const inputClasses = twMerge(classnames(objectsToString(base.input)))
    const labelClasses = twMerge(
      classnames(objectsToString(base.label)),
      labelProps?.className
    )
    const radioIconCheckedClasses = classnames(
      classnames(objectsToString(base.iconChecked)),
      iconCheckedProps?.className
    )
    const radioIconUncheckedClasses = classnames(
      classnames(objectsToString(base.iconUnchecked)),
      iconUncheckedProps?.className
    )

    return (
      <div ref={ref} className={rootClasses}>
        <label
          {...containerProps}
          className={containerClasses}
          htmlFor={rest.id || radioId}
          onMouseDown={(e) => {
            const onMouseDown = containerProps?.onMouseDown
            return typeof onMouseDown === "function" && onMouseDown(e)
          }}
        >
          <input
            {...rest}
            ref={inputRef}
            type="radio"
            disabled={disabled}
            className={inputClasses}
            id={rest.id || radioId}
          />
          <span className={radioIconUncheckedClasses}>
            {iconUnchecked || <RadioOffIcon className="fill-AtomGray300" />}
          </span>

          <span className={radioIconCheckedClasses}>
            {iconChecked || <RadioOnIcon className="fill-AtomRed" />}
          </span>
        </label>

        {label && (
          <label
            {...labelProps}
            className={labelClasses}
            htmlFor={rest.id || radioId}
          >
            {label}
          </label>
        )}
      </div>
    )
  }
)

Radio.propTypes = {
  color: PropTypes.oneOf(propTypesColor),
  label: propTypesLabel,
  iconChecked: propTypesIconChecked,
  iconUnchecked: propTypesIconUnchecked,
  className: propTypesClassName,
  disabled: propTypesDisabled,
  containerProps: propTypesObject,
  labelProps: propTypesObject,
}

Radio.displayName = "AtomStyle.Radio"

export default Radio
