import textareaOutlinedLabel from "./textareaOutlinedLabel"
import textareaOutlinedColors from "./textareaOutlinedColors"
import textareaOutlinedLabelColors from "./textareaOutlinedLabelColors"

const textareaOutlined = {
  base: {
    textarea: {
      borderWidth: "border",
      borderColor: "AtomGray300 hover:border-AtomGreen",
      floated: {
        borderWidth: "",
        borderColor: "",
      },
    },
    placeholder:
      "font-medium placeholder:opacity-100 focus:placeholder:opacity-100",
    label: textareaOutlinedLabel,
  },
  sizes: {
    md: {
      container: {
        height: "h-10",
      },
      textarea: {
        fontSize: "text-sm",
        px: "px-3",
        py: "py-2.5",
        borderRadius: "rounded-[12px]",
      },
      label: {},
    },
    lg: {
      container: {
        height: "h-11",
      },
      textarea: {
        fontSize: "text-sm",
        px: "px-3",
        py: "py-3",
        borderRadius: "rounded-md",
      },
      label: {},
    },
  },
  colors: {
    textarea: textareaOutlinedColors,
    label: textareaOutlinedLabelColors,
  },
  error: {
    textarea: {
      borderColor:
        "border-red-500 placeholder-shown:border-t-red-500 placeholder-shown:border-red-500",
      borderColorFocused: "focus:border-red-500",
    },
    label: {
      color: "",
      before: "",
      after: "",
    },
  },
  success: {
    textarea: {
      borderColor:
        "border-green-500 placeholder-shown:border-t-green-500 placeholder-shown:border-green-500",
      borderColorFocused: "focus:border-green-500",
    },
    label: {
      color: "",
      before: "",
      after: "",
    },
  },
  shrink: {
    textarea: {
      borderTop: "!border-t-transparent",
    },
    label: {
      fontSize: "!text-[11px]",
      lineHeight: "!leading-tight",
      borderColor: "before:!border-blue-gray-200 after:!border-blue-gray-200",
    },
  },
}

export default textareaOutlined
