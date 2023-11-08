module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['prettier', 'eslint:recommended', 'plugin:jest/recommended'],
  overrides: [
    {
      env: {
        node: true,
        jest: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      files: ['**/__tests__/**/*.js'],
      rules: {
        'max-depth': 'off',
        'max-lines-per-function': 'off',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'max-depth': ['error', 2],
    'max-lines-per-function': ['error', { max: 15 }],
  },
};
