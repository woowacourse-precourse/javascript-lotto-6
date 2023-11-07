import { MONEY_ERROR } from '../../src/constants/message/error';
import { LOTTO_PRICE } from '../../src/constants/setting';
import MoneyValidator from '../../src/validator/MoneyValidator';

describe('구매금액 검증 클래스 테스트', () => {
  test('구매금액이 로또 금액으로 나누어 떨어진다.', () => {
    const money = LOTTO_PRICE;

    expect(() =>
      MoneyValidator.validateLottoPurchaseAmount(money),
    ).not.toThrow();
  });

  test('구매금액이 로또 금액보다 작다면 예외가 발생한다.', () => {
    const moneyList = [-1, 0, LOTTO_PRICE - 1];

    moneyList.forEach(money =>
      expect(() => MoneyValidator.validateLottoPurchaseAmount(money)).toThrow(
        MONEY_ERROR.purchaseAmount,
      ),
    );
  });

  test('구매금액이 로또가격으로 정확히 나누어 떨어지지 않는다면 예외 처리한다.', () => {
    const moneyList = [LOTTO_PRICE + 1, 1999, 2500];

    moneyList.forEach(money => {
      expect(() => MoneyValidator.validateLottoAmountExactness(money)).toThrow(
        MONEY_ERROR.amountExactness,
      );
    });
  });
});
