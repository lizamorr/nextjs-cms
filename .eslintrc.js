module.exports = {
  parser: "babel-eslint",
  extends: ["airbnb"],
  plugins: ["react"],
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  rules: {
    quotes: ["error", "double"],
    "react/jsx-props-no-spreading": 0,
    "react/react-in-jsx-scope": 0,
    "comma-dangle": [2, "always-multiline"],
    "no-unused-vars": [
      2,
      {
        vars: "all",
        args: "none",
      },
    ],
    "no-unused-expressions": [
      2,
      {
        allowTernary: true,
      },
    ],
    "new-cap": [
      2,
      {
        capIsNewExceptions: ["Router"],
      },
    ],
    semi: [
      2,
      "always",
      {
        omitLastInOneLineBlock: true,
      },
    ],
    "newline-per-chained-call": 0,
    "no-param-reassign": 0,
    "no-use-before-define": [
      2,
      {
        functions: false,
        classes: false,
      },
    ],
    "no-confusing-arrow": 0,
    "no-return-await": 0,
    "function-paren-newline": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-one-expression-per-line": 0,
    "jsx-a11y/heading-has-content": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/anchor-has-content": 0,
    "no-underscore-dangle": 0,
    "react/button-has-type": 0,
    "jsx-a11y/media-has-caption": 0,
    "comma-dangle": off,
    "implicit-arrow-linebreak": off,
    "arrow-body-style": off,
  },
  settings: {
    "import/resolver": {
      "babel-module": {
        extensions: [".js"],
      },
    },
  },
};
