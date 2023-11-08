import Purchase from '../src/Purchase.js';
import { PurchaseErrorMessage } from '../src/models/message.js';

describe('로또 구입 클래스 테스트', () => {
  test('빈 값이면 예외가 발생한다.', () => {
    // given
    const input = '';

    // when - then
    expect(() => {
      new Purchase(input);
    }).toThrow(PurchaseErrorMessage.NoValue);
  });

  test('0일 경우 예외가 발생한다.', () => {
    // given
    const input = '0';

    // when - then
    expect(() => {
      new Purchase(input);
    }).toThrow(PurchaseErrorMessage.NoValue);
 });

  test('1000 단위가 아닐 경우 예외가 발생한다.', () => {
    // given
    const input = '100';

    // when - then
    expect(() => {
      new Purchase(input);
    }).toThrow(PurchaseErrorMessage.WrongUnit);
  });
});
