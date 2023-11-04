import Validator from '../../src/Validator/index.js';

describe('구입 금액 입력이', () => {

  test('1000으로 나뉘어지지 않을 경우 예외가 발생하는가?', () => {
    expect(() => validator.evaluate(input)).toThrow('[ERROR]');
  });

  test('숫자가 아닐 경우 예외가 발생하는가?', () => {
    expect(() => validator.evaluate(input)).toThrow('[ERROR]');
  });

  test('입력되지 않은 경우 예외가 발생하는가?', () => {
      expect(() => validator.evaluate(input)).toThrow('[ERROR]');
  });
});
