import Purchase from '../../src/purchase/Purchase.js';

describe('purchase : test', () => {
  test.each(['3000', '66000', '9000', '32000', '1000'])(
    'purchase 생성이 오류 없이 진행되어야 한다.',
    input => {
      expect(() => new Purchase(input)).not.toThrow();
    },
  );

  test('amount가 정상적인 값을 출력해야 한다.', () => {
    const BALANCE = '3000';
    const AMOUNT = 3;
    const purchase = new Purchase(BALANCE);
    const result = purchase.amount();

    expect(result).toEqual(AMOUNT);
  });
});
