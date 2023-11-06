import commonValidator from '../../src/validator/commonValidator.js';
import lottoPriceValidator from '../../src/validator/lottoPriceValidator.js';

describe('로또 금액 테스트', () => {
  describe('lottoPriceValidator.currencyAmount 1,000원 단위 테스트', () => {
    test.each([['1000'], ['10000'], ['11000'], ['12000'], ['402000'], ['1201000']])(
      '올바른 1000원 단위 로또 금액 테스트',
      (input) => {
        expect(() => {
          lottoPriceValidator.currencyAmount(input);
        }).not.toThrow();
      }
    );

    test.each([['1250'], ['10100'], ['500'], ['1520'], ['53300']])(
      '잘못된 1000원단위 로또 금액 테스트',
      (input) => {
        expect(() => {
          lottoPriceValidator.currencyAmount(input);
        }).toThrow();
      }
    );
  });

  describe('commonValidator.checkNumberType 로또 금액 숫자형태 테스트', () => {
    const LOTTO_PRICE_PRIFIX_MESSAGE = '로또 금액은';
    test.each([['1000'], ['10000'], ['11000'], ['12000'], ['402000'], ['1201000']])(
      '올바른 숫자형태의 로또 금액 테스트',
      (input) => {
        expect(() => {
          commonValidator.checkNumberType(LOTTO_PRICE_PRIFIX_MESSAGE, input);
        }).not.toThrow();
      }
    );

    test.each([['1000원'], ['+10000'], ['-11000'], [''], [' '], [' 삼천원 ']])(
      '잘못된 숫자형태의 로또 금액 테스트',
      (input) => {
        expect(() => {
          commonValidator.checkNumberType(LOTTO_PRICE_PRIFIX_MESSAGE, input);
        }).toThrow();
      }
    );
  });

  describe('lottoPriceValidator.maximumLimitPrice 로또 최대 금액 제한 테스트', () => {
    test.each([['1000'], ['10000'], ['402000'], ['1201000']])(
      '최소 제한 범위내의 로또 금액 테스트',
      (input) => {
        expect(() => {
          lottoPriceValidator.maximumLimitPrice(input);
        }).not.toThrow();
      }
    );

    test.each([['2000005000'], ['40000000000000']])('최대 제한 범위 밖의 로또 금액', (input) => {
      expect(() => {
        lottoPriceValidator.maximumLimitPrice(input);
      }).toThrow();
    });
  });

  describe('lottoPriceValidator.minimumLimitPrice 로또 최소 금액 제한 테스트', () => {
    test.each([['1000'], ['10000']])('최소 제한 범위내의 로또 금액 테스트', (input) => {
      expect(() => {
        lottoPriceValidator.minimumLimitPrice(input);
      }).not.toThrow();
    });

    test.each([['0'], ['500'], ['-300']])('최소 제한 범위 밖의 로또 금액', (input) => {
      expect(() => {
        lottoPriceValidator.minimumLimitPrice(input);
      }).toThrow();
    });
  });
});
