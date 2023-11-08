import App from '../src/App.js';
import Validate from '../src/Validate.js'

describe('class App test', () => {
  let app;
  let validate;

  beforeEach(() => {
    app = new App();
    validate = new Validate();
  });

  describe('method test : getLottoTicket()', () => {
    test('로또 구입 금액이 11000원이라면 11을 반환할까 ?', () => {
      const testPrice = 11000;
      let testResult = app.getLottoTicket(testPrice);
      expect(testResult).toBe(11);
    });
  });

  describe('method test : checkLottoPrice()', () => {
    test('로또 구입 금액이 1000 미만이면 오류가 발생할까?', () => {
      const testPrice = 900;
      expect(() => {
        validate.checkLottoPrice(testPrice);
      }).toThrow('[ERROR] 로또 최소 구입 금액은 1000원입니다.');
    });
  });

  describe('method test : checkLottoPrice()', () => {
    test('입력 받은 로또 구입 금액이 문자이면 오류가 발생할까 ?', () => {
      const testPrice = 'Hundred';
      expect(() => {
        validate.checkLottoPrice(testPrice);
      }).toThrow('[ERROR] 숫자가 잘못된 형식입니다.');
    });
  });

  describe('method test : checkLottoPrice()', () => {
    test('입력 받은 로또 구입 금액에 문자가 있으면 오류가 발생할까 ?', () => {
      const testPrice = '1000j';
      expect(() => {
        validate.checkLottoPrice(testPrice);
      }).toThrow('[ERROR] 숫자가 잘못된 형식입니다.');
    });
  });

  describe('method test : checkLottoPrice()', () => {
    test('입력 받은 로또 구입 금액이 1,000원 단위가 아니면 오류가 발생할까 ?', () => {
      const testPrice = 12345;
      expect(() => {
        validate.checkLottoPrice(testPrice);
      }).toThrow('[ERROR] 금액은 1,000원 단위로 입력해주세요.');
    });
  });

  describe('method test : makeRandomNumber()', () => {
    test('반환된 배열의 길이가 6인가 ?', () => {
      const testArray = app.makeRandomNumber();
      expect(testArray).toHaveLength(6);
    });
  });

  describe('method test : removeSpace()', () => {
    test('반환된 배열의 길이가 6인가 ?', () => {
      const lottoArray = [1, 2, 3, 4, 5, 6];
      const testString = app.removeSpace(lottoArray);
      expect(testString).toBe('[1, 2, 3, 4, 5, 6]');
    });
  });

  describe('method test : pushArray()', () => {
    test('배열이 배열 안에 push 되는가 ?', () => {
      const lottoArray = [1, 2, 3, 4, 5, 6];
      const testArray = app.pushArray(lottoArray);
      expect(app.lottoRandomNumber).toEqual([[1,2,3,4,5,6]]);
    });
  });

  describe('method test : checkBonusNumber()', () => {
    test('보너스 번호를 입력 안했을 때 에러가 발생하는가 ?', () => {
      const testBonus = '';
      expect(() => {
        validate.checkBonusNumber(testBonus);
      }).toThrow('[ERROR] 숫자를 입력하세요.');
    });

    test('보너스 번호에 문자를 입력하면 에러가 발생하는가 ?', () => {
      const testBonus = '1000j';
      expect(() => {
        validate.checkBonusNumber(testBonus);
      }).toThrow('[ERROR] 숫자가 잘못된 형식입니다.');
    });

    test('보너스 번호에 문자를 입력하면 에러가 발생하는가 ?', () => {
      const testBonus = 99;
      expect(() => {
        validate.checkBonusNumber(testBonus);
      }).toThrow('[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.');
    });
  });

  describe('method test : sortNumber()', () => {
    test('로또 번호 배열이 오름차순으로 정렬이 되는가 ?', () => {
      const lottoArray = [5,4,6,3,1,2];
      const testArray = app.sortNumber(lottoArray);
      expect(testArray).toEqual([1,2,3,4,5,6]);
    });
  });
});
