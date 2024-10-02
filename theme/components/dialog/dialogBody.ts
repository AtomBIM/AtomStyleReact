// types
import type { className, divider } from "../../../types/components/dialog"

export interface DialogBodyStylesType {
  defaultProps?: {
    className?: className
    divider?: divider
  }
  styles?: {
    base?: {
      initial?: object
      divider?: object
    }
  }
}

export const dialogBody: DialogBodyStylesType = {
  defaultProps: {
    className: "",
    divider: false,
  },
  styles: {
    base: {
      initial: {
        position: "relative",
        p: "pt-6",
        color: "text-AtomGray900",
        fontSmoothing: "antialiased",
        fontFamily: "font-sans",
        fontSize: "text-base",
        fontWeight: "font-normal",
        lineHeight: "leading-relaxed",
      },
      divider: {
        borderTop: "border-t",
        borderTopColor: "border-t-AtomGray200",
        borderBottom: "border-b",
        borderBottomColor: "border-b-AtomGray200",
      },
    },
  },
}

export default dialogBody
