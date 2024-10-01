// types
import type { className } from "../../../types/components/tabs"

export interface TabsHeaderStylesType {
  defaultProps?: {
    className?: className
  }
  styles?: {
    base?: object
    horizontal?: object
    vertical?: object
  }
}

export const tabsHeader: TabsHeaderStylesType = {
  defaultProps: {
    className: "inline-flex space-x-3 border-b border-AtomGray200",
  },
  styles: {
    base: {
      display: "block",
      position: "relative",
      bg: "bg-transparent",
      bgOpacity: "0",
      borderRadius: "0",
      pl: "0",
    },
    horizontal: {
      flexDirection: "flex-row",
    },
    vertical: {
      flexDirection: "flex-col",
    },
  },
}

export default tabsHeader
