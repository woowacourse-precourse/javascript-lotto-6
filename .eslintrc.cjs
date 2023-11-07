module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: "airbnb-base",
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "max-depth": ["error", 2],
    "max-lines-per-function": ["error", { max: 15, skipBlankLines: true }],
    "linebreak-style": 0,
    "import/prefer-default-export": "off",
    "import/extensions": ["off"],
    quotes: ["error", "double"],
  },
};
