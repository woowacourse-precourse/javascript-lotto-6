import { splitAndTrim, validateBonusNumber, validateMoney } from '../src/utils';

describe('유효성 검사 테스트', () => {
  describe('splitAndTrim', () => {
    test('빈 값 입력에 대한 예외처리', () => {
      const validInput = '';
      expect(() => splitAndTrim(validInput)).toThrow('[ERROR]');
    });
    test('앞 공백을 가지는 입력 문자열이 공백을 제거하고 배열로 분할될 때', () => {
      const validInput = '   1';
      expect(splitAndTrim(validInput)).toEqual(['1']);
    });
    test('뒤 공백을 가지는 입력 문자열이 공백을 제거하고 배열로 분할될 때', () => {
      const validInput = '1     ';
      expect(splitAndTrim(validInput)).toEqual(['1']);
    });
    test('앞, 뒤 공백을 가지는 입력 문자열이 공백을 제거하고 배열로 분할될 때', () => {
      const validInput = '     1     ';
      expect(splitAndTrim(validInput)).toEqual(['1']);
    });
  });

  describe('validateMoney', () => {
    test('유효한 금액을 입력했을 때 true를 반환', () => {
      const validAmount = '2000';
      expect(validateMoney(validAmount)).toBe(true);
    });

    test('금액이 숫자가 아닌 경우 예외처리', () => {
      const invalidAmount = 'abc';
      expect(() => validateMoney(invalidAmount)).toThrow('[ERROR]');
    });

    test('금액이 LOTTO_PRICE(1000) 보다 작을 경우 예외처리', () => {
      const lessThanMinimumAmount = '500';
      expect(() => validateMoney(lessThanMinimumAmount)).toThrow('[ERROR]');
    });

    test('금액이 LOTTO_PRICE(1000)의 배수가 아닐 경우 예외처리', () => {
      const nonMultipleAmount = '1500';
      expect(() => validateMoney(nonMultipleAmount)).toThrow('[ERROR]');
    });
  });

  describe('validateBonusNumber', () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];

    test('유효한 보너스 숫자를 입력했을 때 true를 반환', () => {
      const validBonusNumber = '7';
      expect(validateBonusNumber(validBonusNumber, winningNumbers)).toBe(true);
    });

    test('숫자가 아닌 경우 예외처리', () => {
      const nonNumeric = '4abc';
      expect(() => validateBonusNumber(nonNumeric, winningNumbers)).toThrow(
        '[ERROR]'
      );
    });

    test('범위를 벗어난 숫자인 경우 예외처리', () => {
      const outOfRange = '46';
      expect(() => validateBonusNumber(outOfRange, winningNumbers)).toThrow(
        '[ERROR]'
      );
    });

    test('보너스 숫자가 당첨 번호와 중복되는 경우 예외처리', () => {
      const duplicateBonus = '3';
      expect(() => validateBonusNumber(duplicateBonus, winningNumbers)).toThrow(
        '[ERROR]'
      );
    });
  });
});
