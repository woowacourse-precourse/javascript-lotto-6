// BonusNumber와 구입 금액의 validator 대한 테스트 코드
import validator from '../src/Validator/validator';

describe('보너스 번호 validator 테스트', () => {
  test('보너스 번호가 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      const bonusNumber = '3';

      validator.validateBonusNumberIsNumber(bonusNumber);
    });
  });

  test('보너스 번호가 당첨 번호와 중복되면 예외가 발생한다.', () => {
    expect(() => {
      const bonusNumber = 7;
      const WinNumber = [1, 2, 3, 4, 5, 7];

      validator.validateBonusNumberIsDuplicate(bonusNumber, WinNumber);
    });
  });
});

describe('구입금액 validator 테스트', () => {
  test('구입 금액이 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      const amount = 'abc';

      validator.validatePurchaseAmountIsNumber(amount);
    });
  });

  test('구입 금액이 1000으로 나누어떨어지지 않으면 예외가 발생한다.', () => {
    expect(() => {
      const amount = 1234;

      validator.validatePurchaseAmountDivided(amount);
    });
  });
});
