/* eslint-disable no-new */
import Money from '../src/money.js';

describe('구입금액 클래스 테스트', () => {
  test('구입금액에 숫자가 아닌 값이 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Money(`halabeoji's favorit money is  halMoney`);
    }).toThrow('[ERROR]');
  });

  test('구입금액이 천원 단위가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Money(3333333333);
    }).toThrow('[ERROR]');
  });

  test('구입금액이 0보다 작으면 예외가 발생한다.', () => {
    expect(() => {
      new Money(-1);
    }).toThrow('[ERROR]');
  });
});
