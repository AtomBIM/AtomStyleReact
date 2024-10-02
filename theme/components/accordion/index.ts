// types
import type {
  className,
  animate,
  disabled,
  icon,
} from "../../../types/components/accordion"

export interface AccordionStylesType {
  defaultProps?: {
    icon?: icon
    className?: className
    animate?: animate
    disabled?: disabled
  }
  styles?: {
    base?: {
      container?: object
      header?: {
        initial?: object
        active?: object
        icon?: object
      }
      body?: object
      disabled?: object
    }
  }
}

export const accordion: AccordionStylesType = {
  defaultProps: {
    icon: undefined,
    className: "",
    animate: {
      unmount: {},
      mount: {},
    },
    disabled: false,
  },
  styles: {
    base: {
      container: {
        display: "block",
        position: "relative",
        width: "w-full",
      },
      header: {
        initial: {
          display: "flex",
          justifyContent: "justify-between",
          alignItems: "items-center",
          width: "w-full",
          py: "py-3",
          borderWidth: "border-b border-b-AtomGray300",
          color: "text-AtomGray900",
          fontSmoothing: "antialiased",
          fontFamily: "font-sans",
          fontSize: "text-md",
          textAlign: "text-left",
          fontWeight: "font-semibold",
          userSelect: "select-none",
          hover: "hover:text-AtomGreen",
          transition: "transition-colors duration-150",
        },
        active: { color: "text-AtomGray900" },
        icon: {
          ml: "ml-4",
        },
      },
      body: {
        display: "block",
        width: "w-full",
        py: "py-3",
        color: "text-AtomGray900",
        fontSmoothing: "antialiased",
        fontFamily: "font-sans",
        fontSize: "text-sm",
        fontWeight: "font-normal",
      },
      disabled: {
        pointerEvents: "pointer-events-none",
        opacity: "opacity-40",
      },
    },
  },
}

export default accordion
