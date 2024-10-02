// types
import type { className } from "../../../types/components/dialog"

export interface DialogHeaderStylesType {
  defaultProps?: {
    className?: className
  }
  styles?: {
    base?: object
  }
}

export const dialogHeader: DialogHeaderStylesType = {
  defaultProps: {
    className: "",
  },
  styles: {
    base: {
      display: "flex",
      alignItems: "items-center",
      flexShrink: "shrink-0",
      color: "text-AtomGray900",
      fontSmoothing: "antialiased",
      fontFamily: "font-sans",
      fontSize: "text-xl",
      fontWeight: "font-semibold",
    },
  },
}

export default dialogHeader
