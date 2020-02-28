module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: "eslint:recommended",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    // "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    // indent: ["error", 2],
    // // quotes: ["error", "single"],
    // semi: ["error", "always"],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error"
  }
};
