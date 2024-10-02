import chipFilled from "./chipFilled"
import chipOutlined from "./chipOutlined"

// types
import type {
  variant,
  size,
  color,
  icon,
  open,
  onClose,
  action,
  animate,
  className,
} from "../../../types/components/chip"
import {
  propTypesVariant,
  propTypesColor,
  propTypesSize,
} from "../../../types/components/chip"

export interface ChipStylesType {
  defaultProps?: {
    variant?: variant
    size?: size
    color?: color
    icon?: icon
    open?: open
    onClose?: onClose
    action?: action
    animate?: animate
    className?: className
  }
  valid?: {
    variants?: string[]
    sizes?: string[]
    colors?: string[]
  }
  styles?: {
    base?: {
      chip?: object
      action?: object
      icon?: object
    }
    sizes?: {
      sm?: object
      md?: object
      lg?: object
    }
    variants?: {
      filled?: typeof chipFilled
      outlined?: typeof chipOutlined
    }
  }
}

export const chip: ChipStylesType = {
  defaultProps: {
    variant: "filled",
    size: "md",
    color: "AtomGray900",
    icon: undefined,
    open: true,
    onClose: undefined,
    action: undefined,
    animate: {
      unmount: {},
      mount: {},
    },
    className: "",
  },
  valid: {
    variants: propTypesVariant,
    sizes: propTypesSize,
    colors: propTypesColor,
  },
  styles: {
    base: {
      chip: {
        position: "relative",
        display: "grid",
        placeItems: "items-center",
        fontFamily: "font-sans",
        fontWeight: "font-semibold",
        whiteSpace: "whitespace-nowrap",
        userSelect: "select-none",
      },
      action: {
        position: "!absolute",
        top: "top-2/4",
        right: "right-1",
        translate: "-translate-y-2/4",
        mx: "mx-px",
        rounded: "rounded-full",
      },
      icon: {
        position: "absolute",
        top: "top-2/4",
        translate: "-translate-y-2/4",
      },
    },
    sizes: {
      sm: {
        chip: {
          py: "py-1",
          px: "px-2",
          fontSize: "text-xs",
          borderRadius: "rounded-full",
        },
        action: {
          width: "w-4",
          height: "h-4",
        },
        icon: {
          width: "w-4",
          height: "h-4",
          left: "left-1",
        },
      },
      md: {
        chip: {
          py: "py-1.5",
          px: "px-3",
          fontSize: "text-xs",
          borderRadius: "rounded-full",
        },
        action: {
          width: "w-5",
          height: "h-5",
        },
        icon: {
          width: "w-5",
          height: "h-5",
          left: "left-1.5",
        },
      },
      lg: {
        chip: {
          py: "py-2",
          px: "px-4",
          fontSize: "text-xs",
          borderRadius: "rounded-full",
        },
        action: {
          width: "w-6",
          height: "h-6",
        },
        icon: {
          width: "w-6",
          height: "h-6",
          left: "left-1.5",
        },
      },
    },
    variants: {
      filled: chipFilled,
      outlined: chipOutlined,
    },
  },
}

export default chip
