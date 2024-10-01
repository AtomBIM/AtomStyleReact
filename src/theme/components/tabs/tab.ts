// types
import type { className, disabled } from "../../../types/components/tabs"

export interface TabStylesType {
  defaultProps?: {
    className?: className
    activeClassName?: className
    disabled?: disabled
  }
  styles?: {
    base?: {
      tab?: {
        initial?: object
        disabled?: object
      }
      indicator?: object
    }
  }
}

export const tab: TabStylesType = {
  defaultProps: {
    className: "",
    activeClassName: "",
    disabled: false,
  },
  styles: {
    base: {
      tab: {
        initial: {
          display: "flex",
          alignItems: "items-center",
          justifyContent: "justify-center",
          textAlign: "text-center",
          width: "",
          height: "h-full",
          position: "relative",
          bg: "bg-transparent",
          py: "pb-3",
          px: "0",
          color: "text-AtomGray900",
          fontSmoothing: "antialiased",
          fontFamily: "font-sans",
          fontSize: "text-sm",
          fontWeight: "font-semibold",
          userSelect: "select-none",
          cursor: "cursor-pointer",
          translate: "translate-y-[1px]",
        },
        disabled: {
          opacity: "opacity-40",
          cursor: "cursor-not-allowed",
          pointerEvents: "pointer-events-none",
          userSelect: "select-none",
        },
      },
      indicator: {
        position: "absolute",
        inset: "inset-0",
        zIndex: "z-10",
        height: "h-full",
        bg: "bg-transparent",
        borderWidth: "",
        borderRadius: "0",
        boxShadow: "",
        classNames: "border-b-[3px] border-AtomGreen",
      },
    },
  },
}

export default tab
