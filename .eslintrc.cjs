module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb-base', 'prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // 들여쓰기 깊이 제한
    'max-depth': ['error', 2],
    // 함수의 매개변수 개수 제한
    'max-params': ['error', 3],
    // 함수의 길이 제한
    'max-lines-per-function': ['error', { max: 15 }],
    'import/prefer-default-export': 'off',
		'import/extensions': ['off'],
  },
};
