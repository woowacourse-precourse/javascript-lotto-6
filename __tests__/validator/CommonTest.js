import CommonValidator from '../../src/validator/Common';

describe('CommonTest 클래스 예외 테스트', () => {
  test('문자가 입력되는 경우 예외가 발생한다.', () => {
    const numbers = ['a', 'b', '{}', '[]'];

    numbers.forEach(number => {
      expect(() => CommonValidator.validateIsNumber(number)).toThrow('[ERROR]');
    });
  });

  test('NaN이 입력되는 경우 예외가 발생한다.', () => {
    const numbers = [NaN, ''];

    numbers.forEach(number => {
      expect(() => CommonValidator.validateIsNumber(number)).toThrow('[ERROR]');
    });
  });

  test('특수 문자가 입력되는 경우 예외가 발생한다.', () => {
    const numbers = ['!', '@', '.', '-', ''];

    numbers.forEach(number => {
      expect(() => CommonValidator.validateIsNumber(number)).toThrow('[ERROR]');
    });
  });
});
