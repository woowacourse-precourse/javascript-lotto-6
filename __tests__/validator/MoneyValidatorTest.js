import MoneyValidator from '../../src/validator/MoneyValidator';

describe('Money Validator 클래스 테스트', () => {
  describe('로또 구매 여부 테스트', () => {
    test('숫자가 1000 이상이라면 에러가 발생하지 않는다.', () => {
      const money = 1000;

      expect(() =>
        MoneyValidator.validateLottoPurchaseAmount(money),
      ).not.toThrow();
    });

    test('숫자가 1000보다 작다면 예외가 발생한다.', () => {
      const moneyList = [-1, 0, 999];

      moneyList.forEach(money =>
        expect(() => MoneyValidator.validateLottoPurchaseAmount(money)).toThrow(
          '[ERROR]',
        ),
      );
    });
  });

  describe('구매금액이 로또가격으로 정확히 나누어 떨어지는지 테스트', () => {
    test('구매금액이 로또가격으로 정확히 나누어 떨어진다.', () => {
      const money = 1000;

      expect(() =>
        MoneyValidator.validateLottoAmountExactness(money),
      ).not.toThrow();
    });

    test('구매금액이 로또가격으로 정확히 나누어 떨어지지 않는다면 예외 처리한다.', () => {
      const moneyList = [1001, 1999, 2500];

      moneyList.forEach(money => {
        expect(() =>
          MoneyValidator.validateLottoAmountExactness(money),
        ).toThrow('[ERROR]');
      });
    });
  });
});
