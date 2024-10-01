import switchColors from "./switchColors"

// types
import type {
  color,
  label,
  className,
  disabled,
  objectType,
} from "../../../types/components/checkbox"
import { propTypesColor } from "../../../types/components/checkbox"

export interface SwitchButtonStylesType {
  defaultProps?: {
    color?: color
    label?: label
    className?: className
    disabled?: disabled
    containerProps?: objectType
    labelProps?: objectType
    circleProps?: objectType
  }
  valid?: {
    colors?: string[]
  }
  styles?: {
    base?: {
      root?: object
      container?: object
      input?: object
      circle?: object
      ripple?: object
      label?: object
      disabled?: object
    }
    colors: typeof switchColors
  }
}

export const switchButton: SwitchButtonStylesType = {
  defaultProps: {
    color: "AtomGreen",
    label: "",
    className: "",
    disabled: false,
    containerProps: undefined,
    labelProps: undefined,
    circleProps: undefined,
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
        width: "w-7",
        height: "h-[18px]",
        cursor: "cursor-pointer",
        borderRadius: "rounded-full",
      },
      input: {
        peer: "peer",
        appearance: "appearance-none",
        width: "w-7",
        height: "h-[18px]",
        position: "absolute",
        background: "bg-AtomGray700",
        borderRadius: "rounded-full",
        cursor: "cursor-pointer",
        transition: "transition-colors duration-150",
      },
      circle: {
        bg: "bg-white",
        width: "w-[14px]",
        height: "h-[14px]",
        borderRadius: "rounded-full",
        position: "absolute",
        top: "top-0.5",
        left: "left-0.5",
        transform: "peer-checked:translate-x-[10px]",
        transition: "transition-all duration-300",
        cursor: "cursor-pointer",
      },
      ripple: {},
      label: {
        color: "text-AtomGray900",
        fontWeight: "font-medium",
        userSelect: "select-none",
        cursor: "cursor-pointer",
        mt: "mt-px",
        pl: "pl-2",
        py: "py-2",
        classNames: "text-sm",
      },
      disabled: {
        opacity: "opacity-40",
        pointerEvents: "pointer-events-none",
      },
    },
    colors: switchColors,
  },
}

export default switchButton
