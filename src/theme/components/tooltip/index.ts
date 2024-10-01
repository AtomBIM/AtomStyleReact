// types
import type {
  interactive,
  placement,
  offset,
  dismiss,
  animate,
  className,
} from "../../../types/components/popover"

export interface TooltipStylesType {
  defaultProps?: {
    interactive?: interactive
    placement?: placement
    offset?: offset
    dismiss?: dismiss
    animate?: animate
    className?: className
  }
  styles?: {
    base?: object
  }
}

export const tooltip: TooltipStylesType = {
  defaultProps: {
    interactive: false,
    placement: "top-start",
    offset: 5,
    dismiss: {},
    animate: {
      mount: {},
      unmount: {},
    },
    className: "",
  },
  styles: {
    base: {
      bg: "bg-AtomGray900/[0.7]",
      py: "py-1",
      px: "px-3",
      borderRadius: "rounded-full",
      fontSize: "text-sm",
      fontWeight: "font-medium",
      color: "text-AtomWhite",
      outline: "focus:outline-none",
      overflowWrap: "break-words",
      zIndex: "z-[999]",
    },
  },
}

export default tooltip
