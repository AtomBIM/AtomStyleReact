// types
import type {
  label,
  iconChecked,
  iconUnchecked,
  className,
  disabled,
  objectType,
} from "../../../types/components/checkbox"
import { propTypesColor } from "../../../types/components/checkbox"

export interface CheckboxStylesType {
  defaultProps?: {
    label?: label
    iconChecked?: iconChecked
    iconUnchecked?: iconUnchecked
    className?: className
    disabled?: disabled
    containerProps?: objectType
    labelProps?: objectType
  }
  valid?: {
    colors?: string[]
  }
  styles?: {
    base?: {
      root?: object
      container?: object
      input?: object
      label?: object
      iconChecked?: object
      iconUnchecked?: object
      disabled?: object
    }
  }
}

export const checkbox: CheckboxStylesType = {
  defaultProps: {
    label: undefined,
    iconChecked: undefined,
    iconUnchecked: undefined,
    className: "",
    disabled: false,
    containerProps: undefined,
    labelProps: undefined,
  },
  valid: {
    colors: propTypesColor,
  },
  styles: {
    base: {
      root: {
        display: "inline-flex",
        alignItems: "items-center",
      },
      container: {
        position: "relative",
        display: "flex",
        alignItems: "items-center",
        cursor: "cursor-pointer",
      },
      input: {
        peer: "peer",
        position: "relative",
        appearance: "appearance-none",
        classNames: "w-0 h-0",
        cursor: "cursor-pointer",
        transition: "transition-all duration-150",
      },
      label: {
        color: "text-AtomGray900",
        fontWeight: "font-medium",
        userSelect: "select-none",
        cursor: "cursor-pointer",
        pt: "pt-0.5",
        pl: "pl-7",
        classNames: "text-sm h-6",
      },
      iconChecked: {
        position: "absolute",
        opacity: "opacity-0 peer-checked:opacity-100",
        transition: "transition-opacity",
      },
      iconUnchecked: {
        position: "absolute",
        opacity: "opacity-100 peer-checked:opacity-0",
        transition: "transition-opacity",
      },
      disabled: {
        opacity: "opacity-40",
        pointerEvents: "pointer-events-none",
      },
    },
  },
}

export default checkbox
