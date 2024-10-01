// types
import type { className } from "../../../types/components/spinner"

export interface SpinnerStyleTypes {
  defaultProps?: {
    className?: className
  }
  valid?: {
    colors?: string[]
  }
  styles?: {
    base?: object
  }
}

export const spinner: SpinnerStyleTypes = {
  defaultProps: {
    className: "",
  },
  valid: {},
  styles: {
    base: {
      color: "text-AtomGreen100",
      animation: "animate-[spin_800ms_linear_infinite]",
    },
  },
}

export default spinner
