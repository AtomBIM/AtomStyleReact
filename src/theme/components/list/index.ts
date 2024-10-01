// types
import type { className } from "../../../types/components/list"

export interface ListStylesType {
  defaultProps?: {
    className?: className
  }
  styles?: {
    base?: {
      list?: object
      item?: {
        initial?: object
        selected?: object
        disabled?: object
      }
      itemPrefix?: object
      itemSuffix?: object
    }
  }
}

export const list: ListStylesType = {
  defaultProps: {
    className: "",
  },
  styles: {
    base: {
      list: {
        display: "flex",
        flexDirection: "flex-col",
        gap: "0",
        minWidth: "min-w-[240px]",
        p: "0",
        fontFamily: "font-sans",
        fontSize: "text-base",
        fontWeight: "font-medium",
        color: "text-AtomGray900",
      },
      item: {
        initial: {
          display: "flex",
          alignItems: "items-center",
          width: "w-full",
          px: "px-3",
          py: "py-2",
          borderRadius: "",
          textAlign: "text-start",
          lightHeight: "",
          transition: "transition-all duration-150",
          bg: "hover:bg-AtomGray200",
          color: "",
          outline: "outline-none",
        },
        selected: {
          bg: "bg-AtomGray300",
          color: "",
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
      itemPrefix: {
        display: "grid",
        placeItems: "place-items-center",
        marginRight: "",
      },
      itemSuffix: {
        display: "grid",
        placeItems: "place-items-center",
        marginRight: "ml-auto justify-self-end",
      },
    },
  },
}

export default list
