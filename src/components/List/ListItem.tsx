import React from "react"

// context
import { useTheme } from "../../context/theme"

// utils
import classnames from "classnames"
import { twMerge } from "tailwind-merge"
import objectsToString from "../../utils/objectsToString"

// types
import type {
  className,
  disabled,
  children,
  selected,
} from "../../types/components/list"
import {
  propTypesClassName,
  propTypesDisabled,
  propTypesSelected,
  propTypesChildren,
} from "../../types/components/list"

// list item components
import { ListItemPrefix, ListItemPrefixProps } from "./ListItemPrefix"
import { ListItemSuffix, ListItemSuffixProps } from "./ListItemSuffix"

export interface ListItemProps extends React.ComponentProps<"div"> {
  className?: className
  disabled?: disabled
  selected?: selected
  children: children
}

export const ListItem = React.forwardRef<HTMLDivElement, ListItemProps>(
  ({ className, disabled, selected, children, ...rest }, ref) => {
    // 1. init
    const { list } = useTheme()
    const {
      styles: { base },
    } = list

    // 4. set styles
    const listItemClasses = twMerge(
      classnames(objectsToString(base.item.initial), {
        [objectsToString(base.item.disabled)]: disabled,
        [objectsToString(base.item.selected)]: selected && !disabled,
      }),
      className
    )

    return (
      <div
        {...rest}
        ref={ref}
        role="button"
        tabIndex={0}
        className={listItemClasses}
        onMouseDown={(e) => {
          const onMouseDown = rest?.onMouseDown
          return typeof onMouseDown === "function" && onMouseDown(e)
        }}
      >
        {children}
      </div>
    )
  }
)

ListItem.propTypes = {
  className: propTypesClassName,
  selected: propTypesSelected,
  disabled: propTypesDisabled,
  children: propTypesChildren,
}

ListItem.displayName = "AtomStyle.ListItem"

export type { ListItemPrefixProps, ListItemSuffixProps }
export { ListItemPrefix, ListItemSuffix }
export default Object.assign(ListItem, {
  Prefix: ListItemPrefix,
  Suffix: ListItemSuffix,
})
