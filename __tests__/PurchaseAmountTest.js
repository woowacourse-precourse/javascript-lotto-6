import PurchaseAmount from '../src/PurchaseAmount.js';

describe('구매 금액 클래스 테스트', () => {
  test.each(['8000j', 0])(
    '구매 금액이 숫자가 아니거나 0이라면 예외를 발생시킨다.',
    (input) => {
      expect(() => {
        new PurchaseAmount(input);
      }).toThrow('[ERROR]');
    }
  );

  test('구매 금액이 1,000원 단위가 아니라면 예외를 발생시킨다.', () => {
    expect(() => {
      new PurchaseAmount(7900);
    }).toThrow('[ERROR]');
  });
});
