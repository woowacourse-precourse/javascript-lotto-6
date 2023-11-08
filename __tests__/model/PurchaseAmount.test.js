import PurchaseAmount from '../../src/PurchaseAmount.js';

describe('PurchaseAmount', () => {
  test('유효한 input값을 넣었을 때 유요한 instance여야 합니다.', () => {
    const validInput = '5000';
    const purchaseAmount = PurchaseAmount.of(validInput);
    expect(PurchaseAmount.of).toBeInstanceOf(Function);
    expect(purchaseAmount).toBeInstanceOf(PurchaseAmount);
  });

  test('숫자가 아닌 문자가 포함된 값을 입력하였을 때 예외를 발생시켜야합니다.', () => {
    const invalidInput = 'invalid';
    expect(() => PurchaseAmount.of(invalidInput)).toThrow('[ERROR]');
  });

  test('1000원 단위로 구매하지 않았을 때 예외를 발생시켜야합니다.', () => {
    const invalidInput = 999; //
    expect(() => PurchaseAmount.of(invalidInput)).toThrow('[ERROR]');
  });

  test('최대 구입금액을 초과하였을 때 예외를 발생시켜야합니다.', () => {
    const invalidInput = 101_000;
    expect(() => PurchaseAmount.of(invalidInput)).toThrow(
      '[ERROR] 로또 구입 금액은 100,000원을 초과할 수 없습니다.',
    );
  });

  test('getLottoCount 메서드가 정확한 로또 티켓 수를 반환해야 합니다', () => {
    // given
    const validAmount = 4000;
    const purchaseAmount = PurchaseAmount.of(validAmount);

    // when
    // then
    const lottoCount = purchaseAmount.getLottoCount();

    expect(lottoCount).toBe(4);
  });
});
