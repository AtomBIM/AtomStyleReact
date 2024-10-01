import inputStandardLabel from "./inputStandardLabel"
import inputStandardColors from "./inputStandardColors"
import inputStandardLabelColors from "./inputStandardLabelColors"

const inputStandard = {
  base: {
    input: {
      borderWidth: "border-b",
      borderColor:
        "AtomGray300 hover:border-AtomGreen800 focus:border-AtomGreen800",
      placeholder:
        "font-medium placeholder:opacity-100 focus:placeholder:opacity-0",
      classNames: "font-medium",
    },
    inputWithIcon: {
      pr: "!pr-7",
    },
    icon: {
      top: "top-2/4",
      right: "left-0",
      transform: "-translate-y-1/4",
    },
    label: inputStandardLabel,
  },
  sizes: {
    md: {
      container: {
        height: "h-11",
      },
      input: {
        fontSize: "text-sm",
        pt: "pt-4",
        pb: "pb-1.5",
      },
      label: {
        lineHeight: "peer-placeholder-shown:leading-[4.25]",
      },
      icon: {
        width: "w-5",
        height: "h-5",
      },
    },
    lg: {
      container: {
        height: "h-12",
      },
      input: {
        fontSize: "text-sm",
        px: "px-px",
        pt: "pt-5",
        pb: "pb-2",
      },
      label: {
        lineHeight: "peer-placeholder-shown:leading-[4.875]",
      },
      icon: {
        width: "w-6",
        height: "h-6",
      },
    },
  },
  colors: {
    input: inputStandardColors,
    label: inputStandardLabelColors,
  },
  error: {
    input: {
      borderColor:
        "border-AtomRed800 hover:border-AtomRed800 focus:border-AtomRed800",
    },
    label: {
      color: "",
      after: "",
    },
  },
  success: {
    input: {
      borderColor:
        "border-AtomGreen800 hover:border-AtomGreen800 focus:border-AtomGreen800",
    },
    label: {
      color: "",
      after: "",
    },
  },
  shrink: {
    input: {},
    label: {
      fontSize: "!text-[11px]",
      lineHeight: "!leading-tight",
    },
  },
}

export default inputStandard
