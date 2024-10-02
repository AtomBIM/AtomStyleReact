const textareaOutlinedLabel: object = {
  position: "-top-1.5",
  fontSize: "peer-placeholder-shown:text-sm",
  floated: {
    fontSize: "text-[11px] peer-focus:text-[11px]",
  },
  before: {
    content: "before:content['']",
    display: "before:block",
    boxSizing: "",
    width: "before:w-2.5",
    height: "before:h-1.5",
    mt: "before:mt-[6.5px]",
    mr: "before:mr-1",
    borderColor: "peer-placeholder-shown:before:border-transparent",
    borderRadius: "",
    floated: {
      bt: "",
      bl: "",
    },
    pointerEvents: "before:pointer-events-none",
    transition: "before:transition-all",
    disabled: "peer-disabled:before:border-transparent",
  },
  after: {
    content: "after:content['']",
    display: "after:block",
    flexGrow: "after:flex-grow",
    boxSizing: "",
    width: "after:w-2.5",
    height: "after:h-1.5",
    mt: "after:mt-[6.5px]",
    ml: "after:ml-1",
    borderColor: "peer-placeholder-shown:after:border-transparent",
    borderRadius: "",
    floated: {
      bt: "",
      br: "",
    },
    pointerEvents: "after:pointer-events-none",
    transition: "after:transition-all",
    disabled: "peer-disabled:after:border-transparent",
  },
}

export default textareaOutlinedLabel
