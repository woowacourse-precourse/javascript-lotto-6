import Validation from '../src/util/Validation.js';

describe('로또 금액 테스트', () => {
  describe('로또 금액이 1,000원 단위 테스트', () => {
    test('로또 금액이 1,000원 단위일 경우', () => {
      expect(() => {
        Validation.inputLottoPrice('3000');
      }).not.toThrow();
    });

    test('로또 금액이 1,000원 단위가 아닌 경우', () => {
      expect(() => {
        Validation.inputLottoPrice('1350');
      }).toThrow();
    });
  });

  describe('로또 금액이 숫자 형태인지 테스트', () => {
    test('로또 금액이 문자열 + 숫자 형태인 경우 Ex)+3000일 경우', () => {
      expect(() => {
        Validation.inputLottoPrice('+3000');
      }).toThrow();
    });

    test('로또 금액이 문자열 + 숫자 형태인 경우 Ex) -3000일 경우', () => {
      expect(() => {
        Validation.inputLottoPrice('-3000');
      }).toThrow();
    });

    test('로또 금액에 공백이 포함된 경우', () => {
      expect(() => {
        Validation.inputLottoPrice('3000  ');
      }).toThrow();
    });

    test('로또 금액이 빈값인 경우', () => {
      expect(() => {
        Validation.inputLottoPrice('');
      }).toThrow();
    });

    test('로또 금액이 여러개의 빈값인 경우', () => {
      expect(() => {
        Validation.inputLottoPrice('          ');
      }).toThrow();
    });
  });

  test('로또 금액이 너무 큰 경우 테스트 -> 200001000인 경우', () => {
    expect(() => {
      Validation.inputLottoPrice('2000001000');
    }).toThrow();
  });

  test('로또 금액이 1000원 이하인 경우 테스트 -> 0인 경우', () => {
    expect(() => {
      Validation.inputLottoPrice('0');
    }).toThrow();
  });
});
