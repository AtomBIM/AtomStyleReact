export interface StepStyleTypes {
  styles?: {
    base?: {
      initial?: object
      active?: object
      completed?: object
    }
  }
}

export const step: StepStyleTypes = {
  styles: {
    base: {
      initial: {
        position: "relative",
        zIndex: "z-10",
        display: "grid",
        placeItems: "place-items-center",
        width: "w-10",
        height: "h-10",
        borderRadius: "rounded-full",
        backgroundColor: "bg-AtomGray200",
        color: "text-AtomGray900",
        fontWeight: "font-semibold",
        transition: "transition-all duration-300",
      },
      active: {
        backgroundColor: "bg-AtomGray900",
        color: "text-white",
      },
      completed: {
        backgroundColor: "bg-AtomGray900",
        color: "text-white",
      },
    },
  },
}

export default step
