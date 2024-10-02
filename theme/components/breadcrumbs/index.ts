// types
import type {
  separator,
  fullWidth,
  className,
} from "../../../types/components/breadcrumbs"

export interface BreadcrumbsStyleTypes {
  defaultProps?: {
    separator?: separator
    fullWidth?: fullWidth
    className?: className
  }
  styles?: {
    base?: {
      root?: {
        initial?: object
        fullWidth?: object
      }
      list?: object
      item?: {
        initial?: object
        disabled?: object
      }
      separator?: object
    }
  }
}

export const breadcrumbs: BreadcrumbsStyleTypes = {
  defaultProps: {
    className: "",
    fullWidth: false,
    separator: "/",
  },
  styles: {
    base: {
      root: {
        initial: {
          width: "w-max",
        },
        fullWidth: { display: "block", width: "w-full" },
      },
      list: {
        display: "flex",
        flexWrap: "flex-wrap",
        alignItems: "items-center",
        width: "w-full",
        bg: "bg-AtomGray100",
        py: "py-2",
        px: "px-4",
        borderRadius: "rounded-full",
      },
      item: {
        initial: {
          display: "flex",
          alignItems: "items-center",
          color: "text-AtomGray900",
          fontSmoothing: "antialiased",
          fontFamily: "font-sans",
          fontSize: "text-sm",
          fontWeight: "font-normal",
          cursor: "cursor-pointer",
          transition: "transition-colors duration-150",
          hover: "hover:text-AtomBlue",
        },
        disabled: {
          pointerEvents: "opacity-40 pointer-events-none",
        },
      },
      separator: {
        color: "text-AtomGray700",
        fontSize: "text-sm",
        fontSmoothing: "antialiased",
        fontFamily: "font-sans",
        fontWeight: "font-normal",
        px: "mx-2",
        pointerEvents: "pointer-events-none",
        userSelcet: "select-none",
      },
    },
  },
}

export default breadcrumbs
