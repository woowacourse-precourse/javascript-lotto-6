module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'plugin:jsdoc/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    // 규칙 변경

    // ESM 사용으로 인한 파일 확장자 표기 의무화
    // https://github.com/woowacourse-precourse/javascript-racingcar-6/pull/4
    'import/extensions': ['error', 'always', { ignorePackages: true }],

    // 규칙 추가

    // async/await 실수 방지
    'require-await': 'error',

    // 프리코스 프로그래밍 요구사항 보다 -1 (함수 분리를 더 연습하기 위해)
    'max-depth': ['error', 1],
    'max-lines-per-function': ['error', 15],

    // extends 규칙 무시

    // JSDoc과 관련된 불필요한 규칙 무시
    'jsdoc/require-param-description': 'off',
    'jsdoc/require-returns-description': 'off',
  },

  // 테스트 코드에 불필요한 규칙 적용 x
  overrides: [
    {
      files: ['__tests__/**/*.js', 'src/utils/validators/src/**/*.js'],
      rules: {
        'max-lines-per-function': 'off',
        'no-new': 'off',
        'no-undef': 'off',
        'arrow-body-style': 'off',
        'import/export': 0,
      },
    },
  ],
};
