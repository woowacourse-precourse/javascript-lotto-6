import lottoPriceValidator from '../src/validator/lottoPriceValidator.js';

describe('로또 금액 테스트', () => {
  describe('로또 금액이 1,000원 단위 테스트', () => {
    test('로또 금액이 1,000원 단위일 경우', () => {
      expect(() => {
        lottoPriceValidator.checkLottoPrice('3000');
      }).not.toThrow();
    });

    test('로또 금액이 1,000원 단위가 아닌 경우', () => {
      expect(() => {
        lottoPriceValidator.checkLottoPrice('1350');
      }).toThrow();
    });
  });

  describe('로또 금액이 숫자 형태인지 테스트', () => {
    test('로또 금액이 문자열 + 숫자 형태인 경우 Ex)+3000일 경우', () => {
      expect(() => {
        lottoPriceValidator.checkLottoPrice('+3000');
      }).toThrow();
    });

    test('로또 금액이 문자열 + 숫자 형태인 경우 Ex) -3000일 경우', () => {
      expect(() => {
        lottoPriceValidator.checkLottoPrice('-3000');
      }).toThrow();
    });

    test('로또 금액에 공백이 포함된 경우', () => {
      expect(() => {
        lottoPriceValidator.checkLottoPrice('3000  ');
      }).toThrow();
    });

    test('로또 금액이 빈값인 경우', () => {
      expect(() => {
        lottoPriceValidator.checkLottoPrice('');
      }).toThrow();
    });

    test('로또 금액이 여러개의 빈값인 경우', () => {
      expect(() => {
        lottoPriceValidator.checkLottoPrice('          ');
      }).toThrow();
    });
  });

  test('로또 금액이 너무 큰 경우 테스트 -> 200001000인 경우', () => {
    expect(() => {
      lottoPriceValidator.checkLottoPrice('2000001000');
    }).toThrow();
  });

  test('로또 금액이 1000원 이하인 경우 테스트 -> 0인 경우', () => {
    expect(() => {
      lottoPriceValidator.checkLottoPrice('0');
    }).toThrow();
  });
});

describe('당첨 번호 테스트', () => {
  describe('당첨 번호가 쉼표(,)를 기준으로 6개가 아닌경우 테스트', () => {
    test('당첨 번호를 쉼표를 기준으로 6개인 경우 테스트', () => {
      expect(() => {
        Validation.inputWinningNumbers('1,2,3,4,5,6');
      }).not.toThrow();
    });

    test('당첨 번호를 나누는 기준이 없는 경우 테스트', () => {
      expect(() => {
        Validation.inputWinningNumbers('123456');
      }).toThrow();
    });

    test('당첨 번호를 나누는 기준이 공백(" ")인 경우 테스트', () => {
      expect(() => {
        Validation.inputWinningNumbers('1 2 3 4 5 6');
      }).toThrow();
    });

    test('당첨 번호를 쉼표를 기준으로 다 나누지 않은 경우 테스트', () => {
      expect(() => {
        Validation.inputWinningNumbers('1,2,3,4,56');
      }).toThrow();
    });
  });
});
