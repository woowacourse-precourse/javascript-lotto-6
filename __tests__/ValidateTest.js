import isValidCost from '../src/modules/isValidCost';
import isValidWinnerNumber from '../src/modules/isValidWinnerNumber';
import isValidBonusNumber from '../src/modules/isValidBonusNumber';

describe('입력값 유효성 검사 테스트', () => {
  describe('로또 구입 금액 유효성 검사 테스트', () => {
    test('입력 금액은 1000원 단위로 나누어 떨어지면 true를 반환한다.', () => {
      const cost = '14000';
      expect(isValidCost(cost)).toBeTruthy();
    });
    test('입력 금액이 1000원 단위로 나누어 떨어지지 않으면 throw Error', () => {
      const cost = '14010';
      expect(() => {
        isValidCost(cost);
      }).toThrow();
    });
    test('입력 금액은 0-9까지의 숫자로 이루어지지 않는다면 throw Error', () => {
      const cost = '140e10';
      expect(() => {
        isValidCost(cost);
      }).toThrow();
    });
  });

  describe('로또 당첨 번호 유효성 검사 테스트', () => {
    test('당첨 번호를 쉼표로 나눴을 때 6개의 요소가 아니라면 throw Error', () => {
      const input = '2,5,3,4,8,6,9';
      expect(() => {
        isValidWinnerNumber(input);
      }).toThrow();
    });
    test('당첨 번호에 중복되는 숫자가 있으면 throw Error', () => {
      const input = '2,5,3,4,2,6';
      expect(() => {
        isValidWinnerNumber(input);
      }).toThrow();
    });
    test('당첨 번호 모두 1~45 범위의 숫자가 아니라면 throw Error', () => {
      let input = '2,5,3,4,8,62';
      expect(() => {
        isValidWinnerNumber(input);
      }).toThrow();

      input = '2,5,3,4,8,%';
      expect(() => {
        isValidWinnerNumber(input);
      }).toThrow();
    });
  });

  describe('보너스 번호 유효성 검사 테스트', () => {
    const winnerNumbers = [1, 2, 3, 4, 5, 6];
    test('보너스 번호가 1~45 범위의 숫자가 아니라면 throw Eror', () => {
      let input = '64';
      expect(() => {
        isValidBonusNumber(input, winnerNumbers);
      }).toThrow();

      input = '6e4';
      expect(() => {
        isValidBonusNumber(input, winnerNumbers);
      }).toThrow();
    });
    test('보너스 번호가 당첨 번호에 포함되어있다면 throw Error', () => {
      const input = '5';
      expect(() => {
        isValidBonusNumber(input, winnerNumbers);
      }).toThrow();
    });
  });
});
