import TypeValidator from '../../src/validators/TypeValidator';

describe('TypeValidator 클래스 테스트', () => {
  describe('isDefined 메서드 테스트', () => {
    test('undefined를 입력하면 false를 반환한다.', () => {
      expect(TypeValidator.isDefined(undefined)).toBe(false);
    });

    test('null을 입력하면 false를 반환한다.', () => {
      expect(TypeValidator.isDefined(null)).toBe(false);
    });

    test('값이 정의되어 있으면 true를 반환한다.', () => {
      expect(TypeValidator.isDefined('hello')).toBe(true);
    });
  });

  describe('isString 메서드 테스트', () => {
    test('문자열을 입력하면 true를 반환한다.', () => {
      expect(TypeValidator.isString('hello')).toBe(true);
    });

    test('숫자를 입력하면 false를 반환한다.', () => {
      expect(TypeValidator.isString(123)).toBe(false);
    });
  });

  describe('isNumber 메서드 테스트', () => {
    test('숫자를 입력하면 true를 반환한다.', () => {
      expect(TypeValidator.isNumber(123)).toBe(true);
    });

    test('문자열을 입력하면 false를 반환한다.', () => {
      expect(TypeValidator.isNumber('hello')).toBe(false);
    });

    test('NaN을 입력하면 false를 반환한다.', () => {
      expect(TypeValidator.isNumber(NaN)).toBe(false);
    });
  });

  describe('isInteger 메서드 테스트', () => {
    test('정수를 입력하면 true를 반환한다.', () => {
      expect(TypeValidator.isInteger(123)).toBe(true);
    });

    test('소수를 입력하면 false를 반환한다.', () => {
      expect(TypeValidator.isInteger(1.23)).toBe(false);
    });

    test('문자열을 입력하면 false를 반환한다.', () => {
      expect(TypeValidator.isInteger('hello')).toBe(false);
    });
  });

  describe('isPositiveInteger 메서드 테스트', () => {
    test('양의 정수를 입력하면 true를 반환한다.', () => {
      expect(TypeValidator.isPositiveInteger(123)).toBe(true);
    });

    test('음의 정수를 입력하면 false를 반환한다.', () => {
      expect(TypeValidator.isPositiveInteger(-123)).toBe(false);
    });

    test('소수를 입력하면 false를 반환한다.', () => {
      expect(TypeValidator.isPositiveInteger(1.23)).toBe(false);
    });

    test('문자열을 입력하면 false를 반환한다.', () => {
      expect(TypeValidator.isPositiveInteger('hello')).toBe(false);
    });
  });

  describe('isArray 메서드 테스트', () => {
    test('배열을 입력하면 true를 반환한다.', () => {
      expect(TypeValidator.isArray([1, 2, 3])).toBe(true);
    });

    test('객체를 입력하면 false를 반환한다.', () => {
      expect(TypeValidator.isArray({ a: 1, b: 2 })).toBe(false);
    });
  });

  describe('isEmpty 메서드 테스트', () => {
    test('undefined를 입력하면 true를 반환한다.', () => {
      expect(TypeValidator.isEmpty(undefined)).toBe(true);
    });

    test('null을 입력하면 true를 반환한다.', () => {
      expect(TypeValidator.isEmpty(null)).toBe(true);
    });

    test('빈 문자열을 입력하면 true를 반환한다.', () => {
      expect(TypeValidator.isEmpty('')).toBe(true);
    });

    test('빈 배열을 입력하면 true를 반환한다.', () => {
      expect(TypeValidator.isEmpty([])).toBe(true);
    });

    test('값이 있는 문자열을 입력하면 false를 반환한다.', () => {
      expect(TypeValidator.isEmpty('hello')).toBe(false);
    });

    test('값이 있는 배열을 입력하면 false를 반환한다.', () => {
      expect(TypeValidator.isEmpty([1, 2, 3])).toBe(false);
    });
  });
});
