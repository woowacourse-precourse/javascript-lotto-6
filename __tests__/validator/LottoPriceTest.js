import { LOTTO_PRICE } from '../../src/constants/constant.js';
import commonValidator from '../../src/validator/commonValidator.js';
import lottoPriceValidator from '../../src/validator/lottoPriceValidator.js';

describe('로또 금액 테스트', () => {
  describe(`lottoPriceValidator.currencyAmount ${LOTTO_PRICE.CURRENCY_AMOUNT}원 단위 테스트`, () => {
    test.each([['1000'], ['10000'], ['11000'], ['12000'], ['402000'], ['1201000']])(
      `올바른 ${LOTTO_PRICE.CURRENCY_AMOUNT}원 단위 로또 금액 테스트`,
      (input) => {
        expect(() => {
          lottoPriceValidator.currencyAmount(input);
        }).not.toThrow();
      }
    );

    test.each([['1250'], ['10100'], ['500'], ['1520'], ['53300']])(
      `잘못된 ${LOTTO_PRICE.CURRENCY_AMOUNT}원단위 로또 금액 테스트`,
      (input) => {
        expect(() => {
          lottoPriceValidator.currencyAmount(input);
        }).toThrow();
      }
    );
  });

  describe('commonValidator.checkNumberType 로또 금액 숫자형태 테스트', () => {
    test.each([['1000'], ['10000'], ['11000'], ['12000'], ['402000'], ['1201000']])(
      '올바른 숫자형태의 로또 금액 테스트',
      (input) => {
        expect(() => {
          commonValidator.checkNumberType(input);
        }).not.toThrow();
      }
    );

    test.each([['1000원'], ['+10000'], ['-11000'], [''], [' '], [' 삼천원 ']])(
      '잘못된 숫자형태의 로또 금액 테스트',
      (input) => {
        expect(() => {
          commonValidator.checkNumberType(input);
        }).toThrow();
      }
    );
  });

  describe('lottoPriceValidator.maximumLimitPrice 로또 최대 금액 제한 테스트', () => {
    test.each([
      [LOTTO_PRICE.MINIMUM + LOTTO_PRICE.CURRENCY_AMOUNT],
      [LOTTO_PRICE.MAXIMUM - LOTTO_PRICE.CURRENCY_AMOUNT],
    ])('최대 금액 제한 범위 내의 로또 금액 테스트', (input) => {
      expect(() => {
        lottoPriceValidator.maximumLimitPrice(input);
      }).not.toThrow();
    });

    test('최대 금액 제한 범위 밖의 로또 금액', () => {
      expect(() => {
        const input = LOTTO_PRICE.MAXIMUM + LOTTO_PRICE.CURRENCY_AMOUNT;
        lottoPriceValidator.maximumLimitPrice(input);
      }).toThrow();
    });
  });

  describe('lottoPriceValidator.minimumLimitPrice 로또 최소 금액 제한 테스트', () => {
    test.each([
      [LOTTO_PRICE.MINIMUM + LOTTO_PRICE.CURRENCY_AMOUNT],
      [LOTTO_PRICE.MAXIMUM - LOTTO_PRICE.CURRENCY_AMOUNT],
    ])('최소 금액 제한 범위내의 로또 금액 테스트', (input) => {
      expect(() => {
        lottoPriceValidator.minimumLimitPrice(input);
      }).not.toThrow();
    });

    test('최소 금액 제한 범위 밖의 로또 금액', () => {
      expect(() => {
        const input = LOTTO_PRICE.MINIMUM - LOTTO_PRICE.CURRENCY_AMOUNT;
        lottoPriceValidator.minimumLimitPrice(input);
      }).toThrow();
    });
  });
});
