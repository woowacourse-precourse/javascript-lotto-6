import Purchase from '../src/domain/Purchase.js';

describe('로또 구매 테스트', () => {
  test('로또 구매 금액을 통해 로또 구매 수량 구하기', () => {
    const purchase = new Purchase('3000');
    const amount = purchase.getAmount();

    expect(amount).toBe(3);
  });
});
