import React from "react"

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
  propTypesLabel,
  propTypesIconChecked,
  propTypesIconUnchecked,
  propTypesClassName,
  propTypesDisabled,
  propTypesObject,
} from "../../types/components/checkbox"
import CheckboxOffIcon from "../Icons/CheckboxOffIcon"
import CheckboxOnIcon from "../Icons/CheckboxOnIcon"

export interface CheckboxProps extends React.ComponentProps<"input"> {
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

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
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
    const { checkbox } = useTheme()
    const { defaultProps, styles } = checkbox
    const { base } = styles
    const checkboxId = React.useId()

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
    const iconUncheckedContainerClasses = twMerge(
      classnames(objectsToString(base.iconUnchecked)),
      iconUncheckedProps?.className
    )
    const iconCheckedContainerClasses = twMerge(
      classnames(objectsToString(base.iconChecked)),
      iconCheckedProps?.className
    )

    return (
      <div ref={ref} className={rootClasses}>
        <label
          {...containerProps}
          className={containerClasses}
          htmlFor={rest.id || checkboxId}
          onMouseDown={(e) => {
            const onMouseDown = containerProps?.onMouseDown
            return typeof onMouseDown === "function" && onMouseDown(e)
          }}
        >
          <input
            {...rest}
            ref={inputRef}
            type="checkbox"
            disabled={disabled}
            className={inputClasses}
            id={rest.id || checkboxId}
          />

          <span className={iconUncheckedContainerClasses}>
            {iconUnchecked || <CheckboxOffIcon className="fill-AtomGray300" />}
          </span>

          <span className={iconCheckedContainerClasses}>
            {iconChecked || <CheckboxOnIcon className="fill-AtomRed" />}
          </span>
        </label>

        {label && (
          <label
            {...labelProps}
            className={labelClasses}
            htmlFor={rest.id || checkboxId}
          >
            {label}
          </label>
        )}
      </div>
    )
  }
)

Checkbox.propTypes = {
  label: propTypesLabel,
  iconChecked: propTypesIconChecked,
  iconUnchecked: propTypesIconUnchecked,
  className: propTypesClassName,
  disabled: propTypesDisabled,
  containerProps: propTypesObject,
  labelProps: propTypesObject,
}

Checkbox.displayName = "AtomStyle.Checkbox"

export default Checkbox
