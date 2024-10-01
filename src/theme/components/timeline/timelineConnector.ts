export interface TimelineConnectorStyleTypes {
  styles?: {
    base?: {
      container?: object
      line?: object
    }
  }
}

export const timelineConnector: TimelineConnectorStyleTypes = {
  styles: {
    base: {
      container: {
        position: "absolute",
        left: "left-0",
        display: "grid",
        justifyContent: "justify-center",
        backgroundColor: "bg-transparent",
        transition: "transition-opacity duration-150",
      },
      line: {
        width: "w-0.5",
        height: "h-full",
        backgroundColor: "bg-AtomGray200",
      },
    },
  },
}

export default timelineConnector
