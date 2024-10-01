import PropTypes from "prop-types"
import type { AnimatePresenceProps } from "framer-motion"
import type { UseDismissProps } from "@floating-ui/react"

// typescript types
export type colors =
  | "AtomGray900"
  | "AtomGray850"
  | "AtomGray700"
  | "AtomGray300"
  | "AtomGray200"
  | "AtomGray100"
  | "AtomGray50"
  | "AtomGray"
  | "AtomGreen"
  | "AtomGreen800"
  | "AtomGreen100"
  | "AtomLightGreen"
  | "AtomLightGreen800"
  | "AtomLightGreen100"
  | "AtomDarkGreen"
  | "AtomDarkGreen800"
  | "AtomDarkGreen100"
  | "AtomRed"
  | "AtomRed800"
  | "AtomRed100"
  | "AtomBlue"
  | "AtomBlue800"
  | "AtomBlue100"
  | "AtomYellow"
  | "AtomYellow800"
  | "AtomYellow100"

export type animation = {
  initial?: object
  mount?: object
  unmount?: object
}

export interface dismissType extends UseDismissProps {}

export type offsetType =
  | number
  | {
      mainAxis?: number
      crossAxis?: number
      alignmentAxis?: number | null
    }

export interface NewAnimatePresenceProps
  extends Omit<AnimatePresenceProps, "children"> {
  children: React.ReactNode
}

// javascript prop-types
export const propTypesColors: string[] = [
  "AtomGray900",
  "AtomGray850",
  "AtomGray800",
  "AtomGray700",
  "AtomGray300",
  "AtomGray200",
  "AtomGray100",
  "AtomGray50",
  "AtomGray",
  "AtomGreen",
  "AtomGreen800",
  "AtomGreen100",
  "AtomLightGreen",
  "AtomLightGreen800",
  "AtomLightGreen100",
  "AtomRed",
  "AtomRed800",
  "AtomRed100",
  "AtomBlue",
  "AtomBlue800",
  "AtomBlue100",
  "AtomYellow",
  "AtomYellow800",
  "AtomYellow100",
]

export const propTypesAnimation = PropTypes.shape({
  mount: PropTypes.instanceOf(Object),
  unmount: PropTypes.instanceOf(Object),
})

export const propTypesDismissType = PropTypes.shape({
  enabled: PropTypes.bool,
  escapeKey: PropTypes.bool,
  referencePress: PropTypes.bool,
  referencePressEvent: PropTypes.oneOf(["pointerdown", "mousedown", "click"]),
  outsidePress: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  outsidePressEvent: PropTypes.oneOf(["pointerdown", "mousedown", "click"]),
  ancestorScroll: PropTypes.bool,
  bubbles: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      escapeKey: PropTypes.bool,
      outsidePress: PropTypes.bool,
    }),
  ]),
})

export const propTypesOffsetType = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.shape({
    mainAxis: PropTypes.number,
    crossAxis: PropTypes.number,
    alignmentAxis: PropTypes.number,
  }),
])

export const propTypesPlacements: string[] = [
  "top-start",
  "top",
  "top-end",
  "right-start",
  "right",
  "right-end",
  "bottom-start",
  "bottom",
  "bottom-end",
  "left-start",
  "left",
  "left-end",
]
