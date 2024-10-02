// types
import type { className } from "../../../types/components/dialog"

export interface DialogFooterStylesType {
  defaultProps?: {
    className?: className
  }
  styles?: {
    base?: object
  }
}

export const dialogFooter: DialogFooterStylesType = {
  defaultProps: {
    className: "",
  },
  styles: {
    base: {
      display: "flex",
      alignItems: "items-center",
      justifyContent: "justify-end",
      flexShrink: "shrink-0",
      flexWrap: "flex-wrap",
      p: "pt-6",
      color: "text-AtomGray700",
    },
  },
}

export default dialogFooter
