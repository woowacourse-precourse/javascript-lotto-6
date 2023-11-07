import Purchase from '../src/Purchase.js';

describe('Purchase 클래스 테스트', () => {
  test('로또 구입 금액에 문자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Purchase('1000j');
    }).toThrow('[ERROR]');
  });

  test('로또 구입 금액이 1,000원 단위로 나누어 떨어지지 않는 경우 예외가 발생한다.', () => {
    expect(() => {
      new Purchase('1500');
    }).toThrow('[ERROR]');
  });

  test('구입 금액에 맞는 로또 발행', () => {
    const PURCHASE = new Purchase('7000');

    expect(PURCHASE.list()).toHaveLength(7);
  });
});
