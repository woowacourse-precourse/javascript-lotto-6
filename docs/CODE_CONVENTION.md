# 🚿 ESLint

```js
// .eslintrc.js
module.exports = {
  env: {
    node: true,
    es2021: true,
    jest: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  overrides: [
    {
      files: ['*/__tests__/**/*.js'],
      rules: {
        // 추가된 요구사항 예외처리
        'max-lines-per-function': 'off',
        'max-depth': 'off',

        // ApplicationTest내 인스턴스 생성 예외처리
        'no-new': 'off',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: '2022',
    sourceType: 'module',
  },
  rules: {
    // 추가된 요구사항
    'max-lines-per-function': ['error', { max: 15 }],

    // 주어진 Lotto 객체의 this가 부재한 validation 허용
    'class-methods-use-this': 'off',

    // 기존 요구사항
    'max-depth': ['error', 2],
    'import/extensions': 'off',
  },
};
```

- 확장자(js) : prettier와 동일한 확장자를 사용하는 것도 좋아보였지만, js파일의 경우 동적으로 OS에 접근할 수 있다는 장점이 있습니다. 추후 OS에 따라 동적으로 값을 설정해야 할 경우, 유연히 대응할 수 있다고 판단하여 js 확장자를 채택하였습니다.

- env : 해당 미션은 node환경에서 실행되는 CLI 기반 애플리케이션입니다. jest를 이용해 유닛 테스팅을 진행합니다.

- extends : vanilla js를 사용하므로 불필요한 의존성 모듈이 추가되지 않도록 airbnb-base를 사용합니다.

- overrides : 특정 도메인의 자세하고 명확한 테스트코드 작성을 위해, describe를 중첩하여 사용하는 경우 예외처리를 하기 위함입니다.

- parserOptions : class 객체 내부에서 private field(`#`)는 ecma 2022 이상의 버전에서 지원합니다. 객체의 캡슐화를 쉽게 적용하기 위함입니다.

- rules: 현재 미션의 요구사항입니다. indent-depth는 2를 넘어갈 수 없습니다.

- max-lines-per-function : 현재 미션의 요구사항입니다. max-lines-per-function는 15를 넘어갈 수 없습니다.

- class-methods-use-this : 주어진 Lotto 객체 내부에서 this를 참조하지 않는 것을 허용합니다.

# 💅 .prettierrc

```js
{
  "printWidth": 80,
  "useTabs": false,
  "tabWidth": 2,
  "endOfLine": "auto",
  "arrowParens": "always",
  "singleQuote": true,
  "semi": true,
  "trailingComma": "all",
  "bracketSpacing": true
}
```

- printWidth: Airbnb에서 권장하는 값을 찾지 못했습니다. 보편적으로 80과 100을 많이 사용하는 것으로 확인하였으며, 80을 채택했습니다.
- useTabs: 요구사항에 맞게 들여쓰기를 띄어쓰기로 통일합니다.

# 🚀 의존성 모듈 설치

제공된 Linter 및 Code Format으로 개발 환경을 설정하려면 다음 의존성을 설치합니다.

```bash
npm install eslint prettier eslint-config-airbnb-base eslint-plugin-import eslint-plugin-prettier --save-dev
```
