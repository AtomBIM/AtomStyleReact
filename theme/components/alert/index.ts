import alertFilled from "./alertFilled"
import alertOutlined from "./alertOutlined"

// types
import type {
  variant,
  color,
  icon,
  open,
  action,
  onClose,
  animate,
  className,
} from "../../../types/components/alert"
import {
  propTypesVariant,
  propTypesColor,
} from "../../../types/components/alert"

export interface AlertStylesType {
  defaultProps?: {
    variant?: variant
    color?: color
    icon?: icon
    open?: open
    action?: action
    onClose?: onClose
    animate?: animate
    className?: className
  }
  valid?: {
    variants?: string[]
    colors?: string[]
  }
  styles?: {
    base?: {
      alert?: object
      action?: object
    }
    variants?: {
      filled?: typeof alertFilled
      outlined?: typeof alertOutlined
    }
  }
}

export const alert: AlertStylesType = {
  defaultProps: {
    variant: "filled",
    color: "AtomGray900",
    icon: undefined,
    open: true,
    action: undefined,
    onClose: undefined,
    animate: {
      unmount: {},
      mount: {},
    },
    className: "",
  },
  valid: {
    variants: propTypesVariant,
    colors: propTypesColor,
  },
  styles: {
    base: {
      alert: {
        position: "relative",
        display: "block",
        width: "w-full",
        fontFamily: "font-sans",
        fontSize: "text-base",
        fontWeight: "font-regular",
        px: "px-4",
        py: "py-4",
        borderRadius: "rounded-lg",
      },
      action: {
        position: "!absolute",
        top: "top-3",
        right: "right-3",
      },
    },
    variants: {
      filled: alertFilled,
      outlined: alertOutlined,
    },
  },
}

export default alert
