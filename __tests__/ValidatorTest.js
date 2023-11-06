import Validator from '../src/utils/Validator';

describe('유저 입력 유효성 검사', () => {
  test.each([[''], ['  ']])('유저 입력 빈 값 테스트', (input) => {
    expect(() => Validator.validateEmptyInput(input)).toThrow();
  });

  test.each([[2500], [1200], [120003]])('로또 구매 금액이 1000원으로 안 나누어질 경우 테스트', (input) => {
    expect(() => Validator.validateDivisible(input)).toThrow();
  });

  test.each([[999], [-200], [30]])('로또 구매 금액이 최소 금액보다 작을경우 테스트', (input) => {
    expect(() => Validator.validateMinPrice(input)).toThrow();
  });
});
