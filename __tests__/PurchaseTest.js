import Validator from '../src/Validator';
import { ERROR } from '../src/Constants';

describe('구매 금액 입력 테스트', () => {
  test('입력한 금액이 숫자가 아닐 경우 예외가 발생한다.', () => {
    expect(() => {
      Validator.validatePurchaseMoney('foo');
    }).toThrow(ERROR.moneyNumberErrorMessage);
  });

  test('입력한 금액이 음수일 경우 예외가 발생한다.', () => {
    expect(() => {
      Validator.validatePurchaseMoney(-1000);
    }).toThrow(ERROR.moneyNumberErrorMessage);
  });
  test('입력한 금액이 1000으로 나누어 떨어지지 않을 경우 예외가 발생한다.', () => {
    expect(() => {
      Validator.validatePurchaseMoney(1234);
    }).toThrow(ERROR.moneyUnitErrorMessage);
  });
});
