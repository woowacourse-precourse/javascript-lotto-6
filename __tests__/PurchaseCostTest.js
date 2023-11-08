import Validator from '../src/utils/Validator';
import ErrorMessage from '../src/constants/ErrorMessage';

describe('로또 구매 금액 입력 테스트', () => {
  test('로또 구매 금액이 숫자가 아닐 경우 예외가 발생한다.', () => {
    expect(() => {
      Validator.purchaseCostValidator('abc');
    }).toThrow(ErrorMessage.INVALID_PURCHASE_COST);
  });

  test('로또 구매 금액이 음수인 경우 예외가 발생한다.', () => {
    expect(() => {
      Validator.purchaseCostValidator(-10);
    }).toThrow(ErrorMessage.INVALID_PURCAHSE_COST_RANGE);
  });

  test('로또 구매 금액이 1000원단위로 나누어 떨어지지 않는 경우 예외가 발생한다.', () => {
    expect(() => {
      Validator.purchaseCostValidator('1001');
    }).toThrow(ErrorMessage.INVALID_PURCHASE_COST_UNIT);
  });
});