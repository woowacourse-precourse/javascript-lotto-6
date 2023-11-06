import Validator from '../src/utils/Validator';

describe('유저 입력 유효성 검사', () => {
  test.each([[''], ['  ']])('유저 입력 빈 값 테스트', (input) => {
    expect(() => Validator.validateEmptyInput(input)).toThrow();
  });
});
