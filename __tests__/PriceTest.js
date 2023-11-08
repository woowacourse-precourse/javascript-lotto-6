import Price from '../src/Price.js';
import { LOTTO_PRICE_UNIT } from '../src/constants.js';

describe('Price 클래스 테스트', () => {
  describe('isValidPrice 메서드 검증', () => {
    test('LOTTO_PRICE_UNIT의 배수인 유효한 가격 입력에 대해 true를 반환해야 함', () => {
      const validPrice = LOTTO_PRICE_UNIT * 3;
      expect(Price.isValidPrice(validPrice)).toBe(true);
    });

    test('숫자가 아닌 가격 입력에 대해 false를 반환해야 함', () => {
      expect(Price.isValidPrice('숫자 아님')).toBe(false);
    });

    test('LOTTO_PRICE_UNIT의 배수가 아닌 가격 입력에 대해 false를 반환해야 함', () => {
      const invalidPrice = LOTTO_PRICE_UNIT - 100;
      expect(Price.isValidPrice(invalidPrice)).toBe(false);
    });
  });

  describe('calculateLottoAmount 메서드 검증', () => {
    test('주어진 가격에 대해 올바른 로또 수량을 계산해야 함', () => {
      const price = LOTTO_PRICE_UNIT * 5;
      const expectedLottoAmount = 5;
      expect(Price.calculateLottoAmount(price)).toBe(expectedLottoAmount);
    });
  });
});
