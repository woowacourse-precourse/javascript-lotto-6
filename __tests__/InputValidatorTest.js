import InputValidator from '../src/validators/InputValidator.js';

describe('로또 구매 금액 입력값 검증 테스트', () => {
  test('로또 구매 금액 입력값이 숫자가 아니라면 예외가 발생한다.', () => {
    expect(() => {
      InputValidator.validateInputPrice('100a');
    }).toThrow('[ERROR]');
  });
  test('로또 구매 금액 입력값이 0으로 시작한다면 예외가 발생한다.', () => {
    expect(() => {
      InputValidator.validateInputPrice('01000');
    }).toThrow('[ERROR]');
  });
  test('로또 구매 금액 입력값이 0이라면 예외가 발생한다.', () => {
    expect(() => {
      InputValidator.validateInputPrice('0');
    }).toThrow('[ERROR]');
  });
  test('로또 구매 금액 입력값이 1000으로 나누어지지 않는다면 예외가 발생한다.', () => {
    expect(() => {
      InputValidator.validateInputPrice('5001');
    }).toThrow('[ERROR]');
  });
});
