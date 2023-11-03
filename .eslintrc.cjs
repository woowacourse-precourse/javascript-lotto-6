module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:jest/recommended", "prettier"],
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
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
};
