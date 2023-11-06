import winnigNumberValidator from '../../src/validator/winningNumberValidator';

describe('당첨 번호 테스트', () => {
  describe('winnigNumberValidator.numberOfLottoLitmit 당첨번호 개수 제한 테스트', () => {
    test.each([
      [
        ['1', '2', '3', '4', '5', '6'],
        ['30', '31', '43', '42', '9', '5'],
      ],
    ])('당첨번호 6개 올바르게 나오는지 테스트', (input) => {
      expect(() => {
        winnigNumberValidator.numberOfLottoLitmit(input);
      }).not.toThrow();
    });

    test.each([
      [
        [],
        ['2'],
        ['1', '6'],
        ['1', '2', '3'],
        ['1', '2', '3', '5'],
        ['1', '2', '3', '40', '42'],
        ['1', '2', '3', '40', '42', '43', '44'],
        ['1', '2', '3', '40', '42', '43', '44', '45'],
      ],
    ])('당첨번호 6개가 아닌 경우 테스트', (input) => {
      expect(() => {
        winnigNumberValidator.numberOfLottoLitmit(input);
      }).toThrow();
    });
  });

  describe('winnigNumberValidator.checkNumberType 당첨번호 모두 숫자 형태 테스트', () => {
    test.each([
      [
        ['1', '2', '3', '4', '5', '6'],
        ['30', '31', '43', '42', '9', '5'],
      ],
    ])('당첨번호 6개 모두 올바른 숫자 형태인 경우 테스트', (input) => {
      expect(() => {
        winnigNumberValidator.checkNumberType(input);
      }).not.toThrow();
    });

    test.each([
      [
        ['1', '2', '3', '4', '5', '6 '],
        ['1', '5', '12', '24', '35', ' 5'],
        ['1', '5', '12', '24', '35', ''],
        ['1', '5', '12', '24', '35', '36번'],
        ['1', '5', '12', '24', '35', '+45'],
        ['1', '5', '12', '24', '35', '-42'],
      ],
    ])('당첨번호 6개가 중 숫자형태가 아닌 경우 테스트', (input) => {
      expect(() => {
        winnigNumberValidator.checkNumberType(input);
      }).toThrow();
    });
  });

  describe('winnigNumberValidator.checkLottoNumberRange 당첨번호 범위 테스트', () => {
    const MIN = 1;
    const MAX = 45;

    test.each([
      [
        ['1', '2', '3', '4', '5', '6'],
        ['30', '31', '43', '42', '9', '5'],
      ],
    ])('당첨번호 6개 모두 범위안에 있는 경우테스트', (input) => {
      expect(() => {
        winnigNumberValidator.checkLottoNumberRange(input);
      }).not.toThrow();
    });

    test.each([
      [
        ['1', '2', '3', '4', '5', `${MAX + 1}`],
        ['1', '5', '12', '24', '35', `${MIN - 1}`],
      ],
    ])('당첨번호 6개가 중 범위 밖의 숫자가 있는 경우 테스트', (input) => {
      expect(() => {
        winnigNumberValidator.checkLottoNumberRange(input);
      }).toThrow();
    });
  });

  describe('winnigNumberValidator.checkDuplicate 당첨번호 중복 테스트', () => {
    test.each([
      [
        ['2', '3', '4', '5', '6', '7'],
        ['30', '31', '43', '42', '9', '5'],
      ],
    ])('당첨번호 6개 모두 범위안에 있는 경우테스트', (input) => {
      expect(() => {
        winnigNumberValidator.checkDuplicate(input);
      }).not.toThrow();
    });

    test.each([
      [
        ['1', '2', '3', '4', '5', '5'],
        ['1', '5', '12', '24', '35', '1'],
      ],
    ])('당첨번호 6개가 중 범위 밖의 숫자가 있는 경우 테스트', (input) => {
      expect(() => {
        winnigNumberValidator.checkDuplicate(input);
      }).toThrow();
    });
  });
});
