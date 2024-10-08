import textareaOutlined from "./textareaOutlined"
import textareaStandard from "./textareaStandard"

// types
import type {
  variant,
  size,
  color,
  label,
  error,
  success,
  resize,
  labelProps,
  className,
  shrink,
  containerProps,
} from "../../../types/components/input"
import {
  propTypesVariant,
  propTypesSize,
  propTypesColor,
} from "../../../types/components/input"

export interface TextareaSizeStylesType {
  container?: object
  textarea?: object
  label?: object
}

export interface TextareaStateStylesType {
  textarea?: object
  label?: object
}

export interface TextareaVariantStylesType {
  base?: {
    container?: object
    textarea?: object
    label?: object
  }
  sizes?: {
    md?: TextareaSizeStylesType
    lg?: TextareaSizeStylesType
  }
  colors?: {
    textarea?: object
    label?: object
  }
  error?: TextareaStateStylesType
  success?: TextareaStateStylesType
  shrink?: TextareaStateStylesType
}

export interface TextareaStylesType {
  defaultProps?: {
    variant?: variant
    size?: size
    color?: color
    label?: label
    error?: error
    success?: success
    resize?: resize
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
      textarea?: object
      label?: object
      asterisk?: object
    }
    variants?: {
      outlined: TextareaVariantStylesType
      standard: TextareaVariantStylesType
    }
  }
}

export const textarea: TextareaStylesType = {
  defaultProps: {
    variant: "outlined",
    size: "md",
    color: "AtomGray300",
    label: "",
    error: false,
    success: false,
    resize: true,
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
      textarea: {
        peer: "",
        width: "w-full",
        height: "h-full",
        minHeight: "min-h-[100px]",
        bg: "bg-transparent",
        color: "text-AtomGray900",
        fontFamily: "font-sans",
        fontWeight: "font-normal",
        outline: "outline outline-0 focus:outline-0",
        resize: "resize-y",
        disabled:
          "disabled:opacity-40 disabled:resize-none disabled:cursor-not-allowed",
        transition: "transition-all duration-150",
      },
      label: {},
      asterisk: {
        display: "inline-block",
        color: "text-red-500",
        ml: "ml-0.5",
      },
    },
    variants: {
      outlined: textareaOutlined,
      standard: textareaStandard,
    },
  },
}

export default textarea
