import MoneyValidator from '../src/validator/Money';

describe('Money Validator 클래스 테스트', () => {
  describe('validateNumber 함수 테스트', () => {
    test('숫자가 주어지는 경우 에러가 발생하지 않는다.', () => {
      const numbers = [1000, 1, -10, 100, 0];

      numbers.forEach(number => {
        expect(() => MoneyValidator.validateNumber(number)).not.toThrow();
      });
    });

    test('숫자가 아닌 경우 에러가 발생한다.', () => {
      const numbers = ['r', '[]', '{}', NaN];

      numbers.forEach(number => {
        expect(() => MoneyValidator.validateNumber(Number(number))).toThrow(
          '[ERROR]',
        );
      });
    });
  });

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
});
