import React from "react"

// utils
import classnames from "classnames"
import { twMerge } from "tailwind-merge"
import objectsToString from "../../utils/objectsToString"

// context
import { useAccordion } from "./AccordionContext"
import { useTheme } from "../../context/theme"

// types
import type { className, children } from "../../types/components/accordion"
import {
  propTypesClassName,
  propTypesChildren,
} from "../../types/components/accordion"
import ChevronDownIcon from "../Icons/ChevronDownIcon"

export interface AccordionHeaderProps extends React.ComponentProps<"button"> {
  className?: className
  children: children
}

export const AccordionHeader = React.forwardRef<
  HTMLButtonElement,
  AccordionHeaderProps
>(({ className, children, ...rest }, ref) => {
  // 1. init
  const { open, icon, disabled } = useAccordion()
  const { accordion } = useTheme()
  const {
    styles: { base },
  } = accordion

  // 2. set default props
  className = className ?? ""

  // 3. set styles
  const buttonStyles = twMerge(
    classnames(objectsToString(base.header.initial), {
      [objectsToString(base.header.active)]: open,
    }),
    className
  )
  const iconClasses = classnames(objectsToString(base.header.icon))

  // 4. return
  return (
    <button
      {...rest}
      ref={ref}
      type="button"
      disabled={disabled}
      className={buttonStyles}
    >
      {children}
      <span className={iconClasses}>
        {icon ?? (
          <ChevronDownIcon
            className={`${
              open ? "rotate-180" : ""
            } fill-AtomGray700 w-6 h-6 transition-all duration-200`}
          />
        )}
      </span>
    </button>
  )
})

AccordionHeader.propTypes = {
  className: propTypesClassName,
  children: propTypesChildren,
}

AccordionHeader.displayName = "AtomStyle.AccordionHeader"

export default AccordionHeader
