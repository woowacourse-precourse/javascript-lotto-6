# Code Convention을 위한 환경 설정

`ESLint`와 `Prettier`를 사용해 [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)를 준수하고자 하였다.

## ESLint 및 Prettier 설치

`ESLint`와 `Prettier`를 설치하기 위해 다음 명령어를 실행한다.

```
npm install eslint prettier eslint-config-airbnb eslint-config-airbnb-base eslint-plugin-import eslint-plugin-jest eslint-plugin-prettier --save-dev
```

## config 파일 설정

### .eslintrc.js

```javascript
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb-base'], // Airbnb 코드 스타일을 따름
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      files: ['./__tests__/*.js'], // 테스트 파일에 대해 린트 규칙 덮어쓰기
      rules: {
        'max-depth': 'off',
        'max-lines-per-function': 'off',
        'no-new': 'warn',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'operator-linebreak': 'off',
    'import/extensions': 'off',
    'class-methods-use-this': 'off',
    'linebreak-style': 'off',
    'max-depth': ['error', 2],
    'max-lines-per-function': ['error', 15],
    'no-await-in-loop': 'warn',
  },
};

```

## .prettierrc.js

```javascript
{
  'printWidth': 80,
  'tabWidth': 2,
  'useTabs': false,
  'semi': true,
  'singleQuote': true,
  'trailingComma': 'all',
  'arrowParens': 'always',
  'proseWrap': 'never'
  'endOfLine': 'lf',
}
```