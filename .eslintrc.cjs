module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "airbnb-base",
    "plugin:jest/recommended",
    "prettier",
  ],
  overrides: [
    {
      env: {
        node: true,
        jest: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["jest", "prettier"],
  rules: {
    "class-methods-use-this": [
      "error",
      { exceptMethods: ["getAmount", "getWinningNumber"] },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "": "never",
      },
    ],
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
  },
};
