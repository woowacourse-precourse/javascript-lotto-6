import ValidatorFactory from '../../src/Validator';

describe('보너스 숫자 입력이', () => {
  const validator = ValidatorFactory.initialize('bonus');

  test('1~45 범위 이외의 숫자를 입력시 예외가 발생 하는가?', () => {
    const inputs = [0, 46];

    inputs.forEach((input) => {
      expect(() => validator.evaluate(input)).toThrow('[ERROR]');
    });
  });

  test('1글자를 초과하거나 미만일 경우 예외가 발생 하는가?', () => {
    const inputs = ['2,3', ' ', '  '];

    inputs.forEach((input) => {
      expect(() => validator.evaluate(input)).toThrow('[ERROR]');
    });
  });
});
