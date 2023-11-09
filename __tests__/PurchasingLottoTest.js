import PurchasingLotto from '../src/domain/PurchasingLotto.js';

describe('PurchasingLotto 클래스 테스트', () => {
  test.each([
    [5000, 5],
    [1000, 1],
    [30000, 30],
  ])('로또 구매 수를 계산하는 기능 테스트', (inputs, expected) => {
    const purchasingLotto = new PurchasingLotto(inputs);
    const purchaseCount = purchasingLotto.getPurchaseCount();

    expect(purchaseCount).toBe(expected);
  });

  test.each([['숫자 아님'], [-1], [0], [900]])(
    '로또 구매 금액 유효성 검사 테스트',
    (inputs) => {
      expect(() => {
        new PurchasingLotto(inputs);
      }).toThrow('[ERROR]');
    },
  );
});
