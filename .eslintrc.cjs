module.exports = {
  env: {
    commonjs: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'operator-linebreak': ['error', 'before'], // 할당 연산자 줄바꿈 설정
    'max-depth': ['error', 2], // 들여쓰기 깊이 제한
    'max-lines-per-function': ['error', { max: 15 }], // 함수의 길이 제한
    'import/extensions': 'off', // eslint-import/extensions 규칙 비활성화
  },
};
