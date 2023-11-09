import PurchaseAmountError from '../src/utils/error/type/purchase_amount_error.js';

describe('구입 금액 에외 테스트', () => {
  test("구입 금액이 공백이면 예외가 발생한다.", () => {
    const AMOUNT = '';
    expect(() => {
      new PurchaseAmountError(AMOUNT);
    }).toThrow("[ERROR]");
  });

  test("구입 금액이 숫자가 아니면 예외가 발생한다.", () => {
    const AMOUNT = '안녕';
    expect(() => {
      new PurchaseAmountError(AMOUNT);
    }).toThrow("[ERROR]");
  });

  test("구입 금액이 1000으로 나누어 떨어지지 않으면 예외가 발생한다.", () => {
    const AMOUNT = '100';
    expect(() => {
      new PurchaseAmountError(AMOUNT);
    }).toThrow("[ERROR]");
  });
});
