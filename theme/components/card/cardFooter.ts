// types
import type { className, divider } from "../../../types/components/card"

export interface CardFooterStylesType {
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

export const cardFooter: CardFooterStylesType = {
  defaultProps: {
    className: "",
  },
  styles: {
    base: {
      initial: {
        p: "p-6",
      },
      divider: {
        borderWidth: "border-t",
        borderColor: "border-AtomGray200",
      },
    },
  },
}

export default cardFooter
