export default {
  input: "./index.ts",
  output: {
    file: "./output.ts",
    format: "esm",
  },
  external: ["react", "react-dom"],
};
