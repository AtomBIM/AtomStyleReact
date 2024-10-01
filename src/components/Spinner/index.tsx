import React, { forwardRef } from "react"

// utils
import classnames from "classnames"
import { twMerge } from "tailwind-merge"
import objectsToString from "../../utils/objectsToString"

// context
import { useTheme } from "../../context/theme"

// types
import type { className } from "../../types/components/spinner"
import { propTypesClassName } from "../../types/components/spinner"

export interface SpinnerProps extends React.ComponentProps<"svg"> {
  className?: className
}

export const Spinner = forwardRef<SVGSVGElement, SpinnerProps>(
  ({ color, className, ...rest }, ref) => {
    // 1. init
    const { spinner } = useTheme()
    const {
      defaultProps,
      styles: { base },
    } = spinner

    // 2. set default props
    color = color ?? defaultProps.color
    className = twMerge(defaultProps.className || "", className)

    // 3. set styles
    const spinnerClasses = twMerge(classnames(objectsToString(base)), className)

    // 4. return
    return (
      <svg
        {...rest}
        ref={ref}
        className={spinnerClasses}
        viewBox="0 0 24 24"
        fill="none"
        width={rest?.width ?? 24}
        height={rest?.height ?? 24}
      >
        <path
          d="M20.1244 10.5674L20.2184 11.281L20.2498 12L20.2184 12.719L20.1244 13.4326L19.9686 14.1353L19.7522 14.8217L19.4768 15.4866L19.1445 16.125L18.7578 16.732L18.3196 17.303L17.8334 17.8336L17.3028 18.3199L16.7318 18.758L16.1248 19.1447L15.4864 19.477L14.8214 19.7525L14.135 19.9689L13.4324 20.1247L12.7188 20.2186L11.9998 20.25L11.2807 20.2186L10.5672 20.1247L9.8645 19.9689L9.17809 19.7525L8.51315 19.477L7.87476 19.1447L7.26775 18.758L6.69676 18.3199L6.16612 17.8336L5.67989 17.303L5.24175 16.732L4.85505 16.125L4.52272 15.4866L4.24729 14.8217L4.03087 14.1353L3.87509 13.4326L3.78115 12.719L3.74976 12L3.78115 11.281L3.87509 10.5674L4.03087 9.86474L4.24729 9.17833L4.52272 8.5134L4.85505 7.875L5.24175 7.26799L5.67989 6.697L6.16612 6.16637L6.69676 5.68013L7.26775 5.242L7.87476 4.85529L8.51315 4.52296L9.17809 4.24754L9.8645 4.03111L10.5672 3.87534"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.4326 3.87534L14.1353 4.03111L14.8217 4.24754L15.4866 4.52296L16.125 4.85529L16.732 5.242L17.303 5.68013L17.8337 6.16637L18.3199 6.697L18.758 7.26799L19.1447 7.875"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-AtomGreen"
        />
      </svg>
    )
  }
)

Spinner.propTypes = {
  className: propTypesClassName,
}

Spinner.displayName = "AtomStyle.Spinner"

export default Spinner
