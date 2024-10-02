import buttonFilled from "../button/buttonFilled"
import buttonOutlined from "../button/buttonOutlined"
import buttonText from "../button/buttonText"

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

export interface IconButtonStyleTypes {
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
    base?: object
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

export const iconButton: IconButtonStyleTypes = {
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
      position: "relative",
      verticalAlign: "align-middle",
      userSelect: "select-none",
      fontFamily: "font-sans",
      fontWeight: "font-medium",
      textAlign: "text-center",
      textTransform: "",
      transition: "transition-all",
      disabled: "disabled:opacity-40 disabled:pointer-events-none",
    },
    sizes: {
      sm: {
        width: "w-8",
        maxWidth: "max-w-[32px]",
        height: "h-8",
        maxHeight: "max-h-[32px]",
        borderRadius: "rounded-full",
        fontSize: "text-xs",
      },
      md: {
        width: "w-10",
        maxWidth: "max-w-[40px]",
        height: "h-10",
        maxHeight: "max-h-[40px]",
        borderRadius: "rounded-full",
        fontSize: "text-xs",
      },
      lg: {
        width: "w-12",
        maxWidth: "max-w-[48px]",
        height: "h-12",
        maxHeight: "max-h-[48px]",
        borderRadius: "rounded-full",
        fontSize: "text-sm",
      },
    },
    variants: {
      filled: buttonFilled,
      outlined: buttonOutlined,
      text: buttonText,
    },
  },
}

export default iconButton
