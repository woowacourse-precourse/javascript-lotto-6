import Validation from '../src/util/Validation.js';

describe('로또 금액 테스트', () => {
  describe('로또 금액이 1,000원 단위 테스트', () => {
    test('로또 금액이 1,000원 단위일 경우', () => {
      expect(() => {
        Validation.currencyAmount('3000');
      }).not.toThrow('[ERROR]');
    });

    test('로또 금액이 1,000원 단위가 아닌 경우', () => {
      expect(() => {
        Validation.currencyAmount('1350');
      }).toThrow('[ERROR]');
    });
  });

  describe('로또 금액이 숫자 형태인지 테스트', () => {
    test('로또 금액이 문자열 + 숫자 형태인 경우 Ex)+3000일 경우', () => {
      expect(() => {
        Validation.numberType('+3000');
      }).toThrow('[ERROR]');
    });

    test('로또 금액이 문자열 + 숫자 형태인 경우 Ex) -3000일 경우', () => {
      expect(() => {
        Validation.numberType('-3000');
      }).toThrow('[ERROR]');
    });

    test('로또 금액에 공백이 포함된 경우', () => {
      expect(() => {
        Validation.numberType('3000  ');
      }).toThrow('[ERROR]');
    });

    test('로또 금액이 빈값인 경우', () => {
      expect(() => {
        Validation.numberType('');
      }).toThrow('[ERROR]');
    });

    test('로또 금액이 여러개의 빈값인 경우', () => {
      expect(() => {
        Validation.numberType('          ');
      }).toThrow('[ERROR]');
    });
  });
});
