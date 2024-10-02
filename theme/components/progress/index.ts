import progressFilled from "./progressFilled"

// types
import type {
  variant,
  color,
  size,
  value,
  label,
  barProps,
  className,
} from "../../../types/components/progress"
import {
  propTypesVariant,
  propTypesColor,
  propTypesSize,
} from "../../../types/components/progress"

export interface ProgressStylesType {
  defaultProps?: {
    variant?: variant
    color?: color
    size?: size
    value?: value
    label?: label
    barProps?: barProps
    className?: className
  }
  valid: {
    variants?: string[]
    colors?: string[]
    sizes?: string[]
  }
  styles?: {
    base?: {
      container?: {
        initial?: object
        withLabel?: object
      }
      bar?: object
    }
    sizes?: {
      sm?: {
        container?: {
          initial?: object
          withLabel?: object
        }
        bar?: object
      }
      md?: {
        container?: {
          initial?: object
          withLabel?: object
        }
        bar?: object
      }
      lg?: {
        container?: {
          initial?: object
          withLabel?: object
        }
        bar?: object
      }
    }
    variants?: {
      filled?: typeof progressFilled
    }
  }
}

export const progress: ProgressStylesType = {
  defaultProps: {
    variant: "filled",
    color: "AtomGreen",
    size: "md",
    value: 0,
    label: false,
    className: "",
    barProps: {},
  },
  valid: {
    variants: propTypesVariant,
    colors: propTypesColor,
    sizes: propTypesSize,
  },
  styles: {
    base: {
      container: {
        initial: {
          display: "flex",
          justifyContent: "flex-start",
          bg: "bg-AtomGreen100",
          overflow: "overflow-hidden",
          width: "w-full",
          fontFamily: "font-sans",
          borderRadius: "rounded-full",
          fontSize: "text-xs",
          fontWeight: "font-medium",
        },
        withLabel: {},
      },
      bar: {
        display: "flex",
        justifyContent: "justify-center",
        alignItems: "items-center",
        height: "h-full",
        overflow: "overflow-hidden",
        wordBreak: "break-all",
        borderRadius: "rounded-full",
      },
    },
    sizes: {
      sm: {
        container: {
          initial: {
            height: "h-1.5",
          },
          withLabel: {
            height: "h-3.5",
          },
        },
        bar: {},
      },
      md: {
        container: {
          initial: {
            height: "h-2",
          },
          withLabel: {
            height: "h-4",
          },
        },
        bar: {},
      },
      lg: {
        container: {
          initial: {
            height: "h-3.5",
          },
          withLabel: {
            height: "h-5",
          },
        },
        bar: {},
      },
    },
    variants: {
      filled: progressFilled,
    },
  },
}

export default progress
