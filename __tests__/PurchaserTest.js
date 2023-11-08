import Purchaser from '../src/Purchaser.js';

describe('구매자 클래스 테스트', () => {
  test('구매 금액이 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Purchaser('안녕');
    }).toThrow('[ERROR]');
  });
  test('구매 금액이 1000원 보다 작으면 예외가 발생한다.', () => {
    expect(() => {
      new Purchaser('100');
    }).toThrow('[ERROR]');
  });
  test('구매 금액이 1000원 단위가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Purchaser('2400');
    }).toThrow('[ERROR]');
  });
});
