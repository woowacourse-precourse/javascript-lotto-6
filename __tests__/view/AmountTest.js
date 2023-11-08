import Validator from '../../src/utils/Validator.js';

describe('구입 금액 검증 테스트', () => {
  let validator;

  beforeEach(() => {
    validator = new Validator();
  });

  describe('구입 금액 타입 검증 테스트', () => {
    test('구입 금액이 문자이면 예외가 발생한다.', () => {
      expect(() => validator.amountValidator('abc')).toThrow();
    });

    test('구입 금액이 특수 문자이면 예외가 발생한다.', () => {
      expect(() => validator.amountValidator('!?*#')).toThrow();
    });
  });

  test('구입 금액이 1,000원 단위로 나누어지지 않으면 예외가 발생한다.', () => {
    expect(() => validator.amountValidator('1500')).toThrow();
  });

  test('구입 금액이 0원이면 예외가 발생한다.', () => {
    expect(() => validator.amountValidator('0')).toThrow();
  });
});
