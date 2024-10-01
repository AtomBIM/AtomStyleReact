import inputOutlinedLabel from "./inputOutlinedLabel"
import inputOutlinedColors from "./inputOutlinedColors"
import inputOutlinedLabelColors from "./inputOutlinedLabelColors"

const inputOutlined = {
  base: {
    input: {
      borderWidth: "border",
      borderColor: "AtomGray300 hover:border-AtomGreen",
      floated: {},
      placeholder:
        "font-medium placeholder:opacity-100 focus:placeholder:opacity-0",
      classNames: "px-2 font-medium",
    },
    inputWithIcon: {
      pr: "!pr-9",
    },
    icon: {
      top: "top-2/4",
      right: "left-3",
      transform: "-translate-y-2/4",
    },
    label: inputOutlinedLabel,
  },
  sizes: {
    md: {
      container: {
        height: "h-10",
      },
      input: {
        fontSize: "text-sm",
        px: "px-4",
        py: "py-1",
        borderRadius: "rounded-full",
      },
      label: {
        lineHeight: "peer-placeholder-shown:leading-[3.75]",
      },
      icon: {
        width: "w-5",
        height: "h-5",
      },
    },
    lg: {
      container: {
        height: "h-11",
      },
      input: {
        fontSize: "text-sm",
        px: "px-3",
        py: "py-3",
        borderRadius: "rounded-md",
      },
      label: {
        lineHeight: "peer-placeholder-shown:leading-[4.1]",
      },
      icon: {
        width: "w-6",
        height: "h-6",
      },
    },
  },
  colors: {
    input: inputOutlinedColors,
    label: inputOutlinedLabelColors,
  },
  error: {
    input: {
      borderColor:
        "border-AtomRed800 hover:border-AtomRed800 focus:border-AtomRed800",
    },
    label: {
      color: "",
      before: "",
      after: "",
    },
  },
  success: {
    input: {
      borderColor:
        "border-AtomGreen hover:border-AtomGreen focus:border-AtomGreen",
    },
    label: {
      color: "",
      before: "",
      after: "",
    },
  },
  shrink: {
    input: {
      borderTop: "",
    },
    label: {
      fontSize: "!text-[11px]",
      lineHeight: "!leading-tight",
      borderColor: "before:!border-blue-gray-200 after:!border-blue-gray-200",
    },
  },
}

export default inputOutlined
