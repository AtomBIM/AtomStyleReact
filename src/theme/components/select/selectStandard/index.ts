import selectStandardLabel from "./selectStandardLabel"
import selectStandardColors from "./selectStandardColors"
import selectStandardLabelColors from "./selectStandardLabelColors"

const selectStandard = {
  base: {
    select: {},
    label: selectStandardLabel,
  },
  sizes: {
    md: {
      container: {
        height: "h-8",
      },
      select: {
        fontSize: "text-sm",
        pt: "0",
        mb: "mb-1",
      },
      label: {
        initial: {},
        states: {
          close: {},
          open: {},
          withValue: {},
        },
      },
    },
    lg: {
      container: {
        height: "h-12",
      },
      select: {
        fontSize: "text-sm",
        px: "0",
        pt: "0",
        pb: "0",
      },
      label: {
        initial: {},
        states: {
          close: {
            lineHeight: "leading-[4.875]",
          },
          open: {
            lineHeight: "leading-tight",
          },
          withValue: {
            lineHeight: "leading-tight",
          },
        },
      },
    },
  },
  colors: {
    select: selectStandardColors,
    label: selectStandardLabelColors,
  },
  states: {
    close: {
      select: {
        borderWidth: "border-b hover:border-AtomGreen800",
      },
      label: {
        fontSize: "text-sm",
        disabled: "peer-disabled:opacity-40",
      },
    },
    open: {
      select: {
        borderWidth: "border-b",
      },
      label: {
        fontSize: "text-sm",
        disabled: "peer-disabled:text-transparent",
      },
    },
    withValue: {
      select: {
        borderWidth: "border-b hover:border-AtomGreen800",
      },
      label: {
        fontSize: "text-sm",
        disabled: "peer-disabled:text-transparent",
      },
    },
  },
  error: {
    select: {
      initial: {},
      states: {
        close: {
          borderColor: "border-AtomRed",
        },
        open: {
          borderColor: "border-AtomRed",
        },
        withValue: {
          borderColor: "border-AtomRed",
        },
      },
    },
    label: {
      initial: {},
      states: {
        close: {
          color: "text-AtomRed",
          after: "after:border-AtomRed",
        },
        open: {
          color: "text-AtomRed",
          after: "after:border-AtomRed",
        },
        withValue: {
          color: "text-AtomRed",
          after: "after:border-AtomRed",
        },
      },
    },
  },
  success: {
    select: {
      initial: {},
      states: {
        close: {
          borderColor: "border-green-500",
        },
        open: {
          borderColor: "border-green-500",
        },
        withValue: {
          borderColor: "border-green-500",
        },
      },
    },
    label: {
      initial: {},
      states: {
        close: {
          color: "text-green-500",
          after: "after:border-green-500",
        },
        open: {
          color: "text-green-500",
          after: "after:border-green-500",
        },
        withValue: {
          color: "text-green-500",
          after: "after:border-green-500",
        },
      },
    },
  },
}

export default selectStandard
