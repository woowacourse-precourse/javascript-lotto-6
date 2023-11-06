import InputValidator from '../src/utils/InputValidator.js';

describe('구매 금액 입력 테스트', () => {
  test('천원 단위로 입력 받기 예외', () => {
    const money = '4500';

    expect(() => InputValidator.validatePurchaseMoney(money)).toThrow(
      '[ERROR]',
    );
  });

  test('음수 입력 받기 예외', () => {
    const money = '-4500';

    expect(() => InputValidator.validatePurchaseMoney(money)).toThrow(
      '[ERROR]',
    );
  });
});
