import ValidatorFactory from '../../src/Validator';

describe('구입 금액 입력이', () => {
  const validator = ValidatorFactory.initialize('price');

  test('1000으로 나뉘어지지 않을 경우 예외가 발생하는가?', () => {
    const input = 10003;

    expect(() => validator.evaluate(input)).toThrow('[ERROR]');
  });

  test('숫자가 아닐 경우 예외가 발생하는가?', () => {
    const input = 'a30';

    expect(() => validator.evaluate(input)).toThrow('[ERROR]');
  });

  test('입력되지 않은 경우 예외가 발생하는가?', () => {
    const inputs = [' ', '', '   ', 0];

    inputs.forEach((input) => {
      expect(() => validator.evaluate(input)).toThrow('[ERROR]');
    });
  });
});