import selectOutlined from "./selectOutlined"
import selectStandard from "./selectStandard"

// types
import type {
  variant,
  size,
  color,
  label,
  error,
  success,
  arrow,
  value,
  onChange,
  selected,
  offset,
  dismiss,
  animate,
  autoHeight,
  lockScroll,
  labelProps,
  menuProps,
  className,
  disabled,
  containerProps,
} from "../../../types/components/select"
import {
  propTypesVariant,
  propTypesSize,
  propTypesColor,
} from "../../../types/components/select"

export interface SelectSizeStylesType {
  container?: object
  select?: object
  label?: {
    initial?: object
    states?: {
      close?: object
      open?: object
      withValue?: object
    }
  }
}

export interface SelectStatesStylesType {
  close?: {
    select?: object
    label?: object
  }
  open?: {
    select?: object
    label?: object
  }
  withValue?: {
    select?: object
    label?: object
  }
}

export interface SelectStateStylesType {
  select?: {
    initial?: object
    states?: {
      close?: object
      open?: object
      withValue?: object
    }
  }
  label?: {
    initial?: object
    states?: {
      close?: object
      open?: object
      withValue?: object
    }
  }
}

export interface SelectVariantStylesType {
  base?: {
    select?: object
    label?: object
  }
  sizes?: {
    md?: SelectSizeStylesType
    lg?: SelectSizeStylesType
  }
  colors?: {
    select?: object
    label?: object
  }
  states?: SelectStatesStylesType
  error?: SelectStateStylesType
  success?: SelectStateStylesType
}

export interface SelectStylesType {
  defaultProps?: {
    variant?: variant
    color?: color
    size?: size
    label?: label
    error?: error
    success?: success
    arrow?: arrow
    value?: value
    onChange?: onChange
    selected?: selected
    offset?: offset
    dismiss?: dismiss
    animate?: animate
    autoHeight?: autoHeight
    lockScroll?: lockScroll
    labelProps?: labelProps
    menuProps?: menuProps
    className?: className
    disabled?: disabled
    containerProps?: containerProps
  }
  valid?: {
    variants?: string[]
    sizes?: string[]
    colors?: string[]
  }
  styles?: {
    base?: {
      container?: object
      select?: object
      arrow?: {
        initial?: object
        active?: object
      }
      label?: object
      menu?: object
      option?: {
        initial?: object
        active?: object
        disabled?: object
      }
    }
    variants?: {
      outlined: SelectVariantStylesType
      standard: SelectVariantStylesType
    }
  }
}

export const select: SelectStylesType = {
  defaultProps: {
    variant: "standard",
    color: "AtomGray300",
    size: "md",
    label: "",
    error: false,
    success: false,
    arrow: undefined,
    value: undefined,
    onChange: undefined,
    selected: undefined,
    offset: 5,
    dismiss: {},
    animate: {
      unmount: {},
      mount: {},
    },
    autoHeight: false,
    lockScroll: false,
    labelProps: {},
    menuProps: {},
    className: "",
    disabled: false,
    containerProps: undefined,
  },
  valid: {
    variants: propTypesVariant,
    sizes: propTypesSize,
    colors: propTypesColor,
  },
  styles: {
    base: {
      container: {
        position: "relative",
        width: "w-full",
        height: "h-8",
        minWidth: "min-w-[200px]",
      },
      select: {
        peer: "peer",
        width: "w-full",
        height: "h-full",
        bg: "bg-transparent",
        color: "text-AtomGray900",
        fontFamily: "font-sans",
        fontWeight: "font-medium",
        textAlign: "text-left",
        outline: "outline outline-0 focus:outline-0",
        disabled: "disabled:cursor-not-allowed",
        transition: "transition-all",
      },
      arrow: {
        initial: {
          display: "grid",
          placeItems: "place-items-center",
          position: "absolute",
          top: "top-1",
          right: "right-0",
          pt: "pt-px",
          width: "w-5",
          height: "h-5",
          color: "fill-AtomGray700",
          transform: "rotate-0",
          transition: "transition-all duration-200",
        },
        active: {
          transform: "rotate-180",
          mt: "mt-px",
        },
      },
      label: {
        display: "flex",
        width: "w-full",
        height: "h-full",
        userSelect: "select-none",
        pointerEvents: "pointer-events-none",
        position: "absolute",
        left: "left-0",
        fontWeight: "font-normal",
        transition: "transition-all",
      },
      menu: {
        width: "w-full",
        maxHeight: "max-h-[240px]",
        bg: "bg-white",
        p: "py-2",
        border: "",
        borderRadius: "",
        boxShadow: "shadow-[0_40px_40px_4px_rgba(0,0,0,0.05)]",
        fontFamily: "font-sans",
        fontSize: "text-sm",
        fontWeight: "font-medium",
        color: "text-AtomGray900",
        overflow: "overflow-auto",
        outline: "focus:outline-none",
      },
      option: {
        initial: {
          pt: "py-1",
          px: "px-3",
          borderRadius: "0",
          lightHeight: "leading-tight",
          cursor: "cursor-pointer",
          userSelect: "select-none",
          background: "hover:bg-AtomGray100",
          opacity: "0",
          color: "",
          outline: "outline outline-0",
          transition: "transition-all",
        },
        active: {
          bg: "",
          color: "text-AtomRed",
        },
        disabled: {
          opacity: "opacity-40",
          cursor: "cursor-not-allowed",
          userSelect: "select-none",
          pointerEvents: "pointer-events-none",
        },
      },
    },
    variants: {
      outlined: selectOutlined,
      standard: selectStandard,
    },
  },
}

export default select
