import buttonGroupDividerColor from "./buttonGroupDividerColor"

// types
import type {
  variant,
  size,
  color,
  fullWidth,
  className,
} from "../../../types/components/button"
import {
  propTypesVariant,
  propTypesSize,
  propTypesColor,
} from "../../../types/components/button"

export interface ButtonGroupStyleTypes {
  defaultProps?: {
    variant?: variant
    size?: size
    color?: color
    fullWidth?: fullWidth
    className?: className
  }
  valid?: {
    variants?: string[]
    sizes?: string[]
    colors?: string[]
  }
  styles?: {
    base?: {
      initial?: object
      fullWidth?: object
    }
    dividerColor?: typeof buttonGroupDividerColor
  }
}

export const buttonGroup: ButtonGroupStyleTypes = {
  defaultProps: {
    variant: "filled",
    size: "md",
    color: "AtomGreen",
    fullWidth: false,
    className: "",
  },
  valid: {
    variants: propTypesVariant,
    sizes: propTypesSize,
    colors: propTypesColor,
  },
  styles: {
    base: {
      initial: {
        display: "flex",
        flexDirection: "row",
      },
      fullWidth: {
        width: "w-full",
      },
    },
    dividerColor: buttonGroupDividerColor,
  },
}

export default buttonGroup
