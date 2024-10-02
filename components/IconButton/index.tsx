import React from "react";
import PropTypes from "prop-types";

// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import findMatch from "../../utils/findMatch";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import type { variant, size, color, className, children } from "../../types/components/button";
import {
  propTypesVariant,
  propTypesSize,
  propTypesColor,
  propTypesClassName,
  propTypesChildren,
} from "../../types/components/button";

export interface IconButtonProps extends React.ComponentProps<"button"> {
  variant?: variant;
  size?: size;
  color?: color;
  className?: className;
  children: children;
  fullWidth?: boolean;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ variant, size, color, className, children, fullWidth, ...rest }, ref) => {
    // 1. init
    const { iconButton } = useTheme();
    const { valid, defaultProps, styles } = iconButton;
    const { base, variants, sizes } = styles;

    // 2. set default props
    variant = variant ?? defaultProps.variant;
    size = size ?? defaultProps.size;
    color = color ?? defaultProps.color;
    className = twMerge(defaultProps.className || "", className);

    // 4. set styles
    const buttonBase = objectsToString(base);
    const buttonVariant = objectsToString(
      variants[findMatch(valid.variants, variant, "filled")][
        findMatch(valid.colors, color, "AtomGray900")
      ],
    );
    const buttonSize = objectsToString(sizes[findMatch(valid.sizes, size, "md")]);
    const classes = twMerge(classnames(buttonBase, buttonSize, buttonVariant), className);

    // 5. return
    return (
      <button
        {...rest}
        ref={ref}
        className={classes}
        type={rest.type || "button"}
        onMouseDown={(e) => {
          const onMouseDown = rest?.onMouseDown;

          return typeof onMouseDown === "function" && onMouseDown(e);
        }}
      >
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          {children}
        </span>
      </button>
    );
  },
);

IconButton.propTypes = {
  variant: PropTypes.oneOf(propTypesVariant),
  size: PropTypes.oneOf(propTypesSize),
  color: PropTypes.oneOf(propTypesColor),
  className: propTypesClassName,
  children: propTypesChildren,
};

IconButton.displayName = "AtomStyle.IconButton";

export default IconButton;
