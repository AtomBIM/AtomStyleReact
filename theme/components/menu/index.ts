// types
import type {
  placement,
  offset,
  dismiss,
  animate,
  lockScroll,
} from "../../../types/components/menu"

export interface MenuStylesType {
  defaultProps?: {
    placement?: placement
    offset?: offset
    dismiss?: dismiss
    animate?: animate
    lockScroll?: lockScroll
  }
  styles?: {
    base?: {
      menu?: object
      item?: {
        initial?: object
        disabled?: object
      }
    }
  }
}

export const menu: MenuStylesType = {
  defaultProps: {
    placement: "bottom-start",
    offset: 5,
    dismiss: {
      itemPress: true,
    },
    animate: {
      unmount: {},
      mount: {},
    },
    lockScroll: false,
  },
  styles: {
    base: {
      menu: {
        bg: "bg-white",
        minWidth: "min-w-[180px]",
        p: "p-2",
        border: "",
        borderRadius: "rounded-lg",
        boxShadow: "shadow-lg shadow-AtomGray900/10",
        fontFamily: "font-sans",
        fontSize: "text-sm",
        fontWeight: "font-medium",
        color: "text-AtomGray900",
        overflow: "overflow-auto",
        outline: "focus:outline-none",
        zIndex: "z-[999]",
      },
      item: {
        initial: {
          display: "block",
          width: "w-full",
          pt: "pt-2",
          pb: "pb-2",
          px: "px-3",
          borderRadius: "",
          textAlign: "text-start",
          cursor: "cursor-pointer",
          userSelect: "select-none",
          transition: "transition-all",
          bg: "hover:bg-AtomGray100 focus:bg-AtomGray100 active:bg-AtomGray100 ",
          color: "",
          outline: "outline-none",
        },
        disabled: {
          opacity: "opacity-40",
          cursor: "cursor-not-allowed",
          pointerEvents: "pointer-events-none",
          userSelect: "select-none",
          bg: "",
          color: "",
        },
      },
    },
  },
}

export default menu
