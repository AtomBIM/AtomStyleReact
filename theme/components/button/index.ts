import buttonFilled from "./buttonFilled"
import buttonOutlined from "./buttonOutlined"
import buttonText from "./buttonText"

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

export interface ButtonStyleTypes {
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
    sizes?: {
      sm?: object
      md?: object
      lg?: object
    }
    variants?: {
      filled?: typeof buttonFilled
      outlined?: typeof buttonOutlined
      text?: typeof buttonText
    }
  }
}

export const button: ButtonStyleTypes = {
  defaultProps: {
    variant: "filled",
    size: "md",
    color: "AtomGreen",
    fullWidth: false,
    className: "tracking-wider",
  },
  valid: {
    variants: propTypesVariant,
    sizes: propTypesSize,
    colors: propTypesColor,
  },
  styles: {
    base: {
      initial: {
        verticalAlign: "align-middle",
        userSelect: "select-none",
        fontFamily: "font-sans",
        fontWeight: "font-semibold",
        textAlign: "text-center",
        textTransform: "none",
        transition: "transition-all duration-150",
        disabled: "disabled:opacity-40 disabled:pointer-events-none",
      },
      fullWidth: {
        display: "block",
        width: "w-full",
      },
    },
    sizes: {
      sm: {
        fontSize: "text-xs",
        py: "py-2",
        px: "px-4",
        borderRadius: "rounded-full",
      },
      md: {
        fontSize: "text-sm",
        py: "py-2",
        px: "px-4",
        borderRadius: "rounded-full",
      },
      lg: {
        fontSize: "text-sm",
        py: "py-3.5",
        px: "px-7",
        borderRadius: "rounded-full",
      },
    },
    variants: {
      filled: buttonFilled,
      outlined: buttonOutlined,
      text: buttonText,
    },
  },
}

export default button
