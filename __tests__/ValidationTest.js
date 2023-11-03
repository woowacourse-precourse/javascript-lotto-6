import Validation from '../src/util/Validation.js';

describe('로또 금액 테스트', () => {
  describe('로또 금액이 1,000원 단위 테스트', () => {});

  test('로또 금액이 1,000원 단위일 경우', () => {
    expect(() => {
      Validation.CurrencyAmount('3000');
    }).not.toThrow('[ERROR]');
  });

  test('로또 금액이 1,000원 단위가 아닌 경우', () => {
    expect(() => {
      Validation.CurrencyAmount('1350');
    }).toThrow('[ERROR]');
  });
});
