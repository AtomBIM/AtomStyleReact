import React, { createContext, useContext } from "react";
import PropTypes from "prop-types";
import merge from "deepmerge";
import theme from "../theme/index";
import combineMerge from "../utils/combineMerge";

const AtomStyleTheme = createContext(theme);

AtomStyleTheme.displayName = "MaterialTailwindThemeProvider";

function ThemeProvider({ value = theme, children }) {
  const mergedValue = merge(theme, value, { arrayMerge: combineMerge });

  return <AtomStyleTheme.Provider value={mergedValue}>{children}</AtomStyleTheme.Provider>;
}

const useTheme = () => useContext(AtomStyleTheme);

ThemeProvider.propTypes = {
  value: PropTypes.instanceOf(Object),
  children: PropTypes.node.isRequired,
};

export { AtomStyleTheme as AtomStyleTheme, ThemeProvider, useTheme };
