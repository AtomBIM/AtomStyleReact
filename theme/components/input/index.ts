import inputOutlined from "./inputOutlined"
import inputStandard from "./inputStandard"

// types
import type {
  variant,
  size,
  color,
  label,
  error,
  success,
  icon,
  labelProps,
  shrink,
  className,
  containerProps,
} from "../../../types/components/input"
import {
  propTypesVariant,
  propTypesSize,
  propTypesColor,
} from "../../../types/components/input"

export interface InputSizeStylesType {
  container?: object
  input?: object
  label?: object
  icon?: object
}

export interface InputStateStylesType {
  input?: object
  label?: object
}

export interface InputVariantStylesType {
  base?: {
    input?: object
    inputWithIcon?: object
    icon?: object
    label?: object
  }
  sizes?: {
    md?: InputSizeStylesType
    lg?: InputSizeStylesType
  }
  colors?: {
    input?: object
    label?: object
  }
  error?: InputStateStylesType
  success?: InputStateStylesType
  shrink?: InputStateStylesType
}

export interface InputStylesType {
  defaultProps?: {
    variant?: variant
    size?: size
    color?: color
    label?: label
    error?: error
    success?: success
    icon?: icon
    labelProps?: labelProps
    containerProps?: containerProps
    shrink?: shrink
    className?: className
  }
  valid?: {
    variants?: string[]
    sizes?: string[]
    colors?: string[]
  }
  styles?: {
    base?: {
      container?: object
      input?: object
      label?: object
      icon?: object
      asterisk?: object
    }
    variants?: {
      outlined: InputVariantStylesType
      standard: InputVariantStylesType
    }
  }
}

export const input: InputStylesType = {
  defaultProps: {
    variant: "outlined",
    size: "md",
    color: "AtomGray300",
    label: "",
    error: false,
    success: false,
    icon: undefined,
    labelProps: undefined,
    containerProps: undefined,
    shrink: false,
    className: "",
  },
  valid: {
    variants: propTypesVariant,
    sizes: propTypesSize,
    colors: propTypesColor,
  },
  styles: {
    base: {
      container: {
        position: "relative",
        width: "w-full",
        minWidth: "min-w-[200px]",
      },
      input: {
        peer: "peer",
        width: "w-full",
        height: "h-full",
        bg: "bg-transparent",
        color: "text-AtomGray900",
        fontFamily: "font-sans",
        fontWeight: "font-medium",
        outline: "outline outline-0 focus:outline-0",
        disabled: "disabled:opacity-40 disabled:cursor-not-allowed",
        transition: "transition-all duration-150",
      },
      label: {
        display: "flex",
        width: "w-full",
        height: "h-full",
        userSelect: "select-none",
        pointerEvents: "pointer-events-none",
        position: "absolute",
        left: "left-0",
        fontWeight: "font-medium",
        overflow: "!overflow-visible",
        textOverflow: "truncate",
        color: "peer-placeholder-shown:text-AtomGray300",
        lineHeight: "leading-tight peer-focus:leading-tight",
        disabled: "peer-disabled:text-transparent",
        transition: "transition-all",
      },
      icon: {
        display: "grid",
        placeItems: "place-items-center",
        position: "absolute",
        color: "text-AtomGray700",
      },
      asterisk: {
        display: "inline-block",
        color: "text-AtomRed",
        ml: "ml-0.5",
      },
    },
    variants: {
      outlined: inputOutlined,
      standard: inputStandard,
    },
  },
}

export default input
