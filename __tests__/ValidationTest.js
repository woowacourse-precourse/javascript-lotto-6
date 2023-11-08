import { Validator } from '../src/utility/validation.js'; 

describe('Validators 테스트', () => {
  describe('isDecimalChar 테스트', () => {
    test('3이 true인지 테스트', () => {
      expect(Validator.isDecimalChar('3')).toBeTruthy();
    });

    test('알파벳 a가 false인지 테스트', () => {
      expect(Validator.isDecimalChar('a')).toBeFalsy();
    });

    test('음수 -1이 false인지 테스트', () => {
      expect(Validator.isDecimalChar('-1')).toBeFalsy();
    });
  });

  describe('isValidateNumber 테스트', () => {
    test('123이 정상 처리되는지 테스트', () => {
      expect(() => Validator.isValidateNumber('123')).not.toThrow();
    });

    test('알파벳 abc에 오류를 반환하는지 테스트', () => {
      expect(() => Validator.isValidateNumber('abc')).toThrow();
    });
  });

  describe('isNumberWithinBounds 테스트', () => {
    test('5가 1~10 사이의 수라고 판단하는지 테스트', () => {
      expect(() => Validator.isNumberWithinBounds(5, 1, 10)).not.toThrow();
    });

    test('11이 1~10 사이의 수가 아니라고 판단하는지 테스트', () => {
      expect(() => Validator.isNumberWithinBounds(11, 1, 10)).toThrow();
    });
  });

  describe('isLengthWithinBounds 테스트', () => {
    test('문자열 "12345"가 1부터 10까지의 길이라고 판단하는지 테스트', () => {
      expect(() => Validator.isLengthWithinBounds('12345', 1, 10)).not.toThrow();
    });

    test('문자열 "12345678910"이 1부터 10까지의 길이를 넘었다고 판단하는지 테스트', () => {
      expect(() => Validator.isLengthWithinBounds('12345678910', 1, 10)).toThrow();
    });
  });

  describe('isMatchingRegex 테스트', () => {
    // /\d+/ : 0~9의 숫자로 이루어진 문자열인지 테스트
    test('문자열이 정규표현식에 부합하는 경우 테스트', () => {
      expect(() => Validator.isMatchingRegex('123', /\d+/)).not.toThrow();
    });

    test('문자열이 정규표현식에 부합하지 않는 경우 테스트', () => {
      expect(() => Validator.isMatchingRegex('abc', /\d+/)).toThrow();
    });
  });

  describe('validateInput 테스트', () => {
    test('모든 검사를 통과할 경우 에러를 던지지 않는지 테스트', () => {
      const validations = [
        Validator.isValidateNumber,
        input => Validator.isNumberWithinBounds(input, 1, 10),
        input => Validator.isLengthWithinBounds(input, 1, 10),
        input => Validator.isMatchingRegex(input, /\d+/),
      ];

      expect(() => Validator.validateInput('9', validations)).not.toThrow();
    });

    test('어떤 검사가 실패하면 에러를 내는지 테스트', () => {
      const validations = [
        Validator.isValidateNumber,
        input => Validator.isNumberWithinBounds(input, 1, 10),
        input => Validator.isLengthWithinBounds(input, 1, 10),
        input => Validator.isMatchingRegex(input, /\d+/),
      ];

      expect(() => Validator.validateInput('abc', validations)).toThrow();
    });
  });
});
