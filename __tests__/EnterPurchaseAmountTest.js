import validatePurchaseAmount from '../src/validation/validatePurchaseAmount.js';

describe('구입금액 입력 테스트', () => {
  test('숫자가 아닌 것을 입력하면 예외가 발생한다.', () => {
    // given
    const purchaseAmount = '1000j';

    // when
    const output = validatePurchaseAmount(purchaseAmount);

    // then
    expect(output).toEqual(false);
  });

  test('입력이 1000으로 나누어 떨어지지 않으면 예외가 발생한다.', () => {
    // given
    const purchaseAmount = 100342;

    // when
    const output = validatePurchaseAmount(purchaseAmount);

    // then
    expect(output).toEqual(false);
  });

  test('0을 초과하지 않는 숫자를 입력하면 예외가 발생한다.', () => {
    // given
    const purchaseAmount = 0;

    // when
    const output = validatePurchaseAmount(purchaseAmount);

    // then
    expect(output).toEqual(false);
  });

  test('0으로 시작하는 숫자를 입력하면 예외가 발생한다.', () => {
    // given
    const purchaseAmount = '034000';

    // when
    const output = validatePurchaseAmount(purchaseAmount);

    // then
    expect(output).toEqual(false);
  });

  test('올바른 입력의 예시', () => {
    // given
    const purchaseAmount = '13000';

    // when
    const output = validatePurchaseAmount(purchaseAmount);

    // then
    expect(output).toEqual(true);
  });
});
