import TypeValidator from '../../src/validators/TypeValidator';

describe('TypeValidator 클래스 테스트', () => {
  describe('isDefined 메서드 테스트', () => {
    test('undefined를 입력하면 false를 반환한다.', () => {
      // given
      const value = undefined;
      const expectedValue = false;

      // when
      const result = TypeValidator.isDefined(value);

      // then
      expect(result).toBe(expectedValue);
    });

    test('null을 입력하면 false를 반환한다.', () => {
      // given
      const value = null;
      const expectedValue = false;

      // when
      const result = TypeValidator.isDefined(value);

      // then
      expect(result).toBe(expectedValue);
    });

    test('값이 정의되어 있으면 true를 반환한다.', () => {
      // given
      const value = 'hello';
      const expectedValue = true;

      // when
      const result = TypeValidator.isDefined(value);

      // then
      expect(result).toBe(expectedValue);
    });
  });

  describe('isString 메서드 테스트', () => {
    test('문자열을 입력하면 true를 반환한다.', () => {
      // given
      const value = 'hello';
      const expectedValue = true;

      // when
      const result = TypeValidator.isString(value);

      // then
      expect(result).toBe(expectedValue);
    });

    test('숫자를 입력하면 false를 반환한다.', () => {
      // given
      const value = 123;
      const expectedValue = false;

      // when
      const result = TypeValidator.isString(value);

      // then
      expect(result).toBe(expectedValue);
    });
  });

  describe('isNumber 메서드 테스트', () => {
    test('숫자를 입력하면 true를 반환한다.', () => {
      // given
      const value = 123;
      const expectedValue = true;

      // when
      const result = TypeValidator.isNumber(value);

      // then
      expect(result).toBe(expectedValue);
    });

    test('문자열을 입력하면 false를 반환한다.', () => {
      // given
      const value = 'hello';
      const expectedValue = false;

      // when
      const result = TypeValidator.isNumber(value);

      // then
      expect(result).toBe(expectedValue);
    });

    test('NaN을 입력하면 false를 반환한다.', () => {
      // given
      const value = NaN;
      const expectedValue = false;

      // when
      const result = TypeValidator.isNumber(value);

      // then
      expect(result).toBe(expectedValue);
    });
  });

  describe('isInteger 메서드 테스트', () => {
    test('정수를 입력하면 true를 반환한다.', () => {
      // given
      const value = 123;
      const expectedValue = true;

      // when
      const result = TypeValidator.isInteger(value);

      // then
      expect(result).toBe(expectedValue);
    });

    test('소수를 입력하면 false를 반환한다.', () => {
      // given
      const value = 1.23;
      const expectedValue = false;

      // when
      const result = TypeValidator.isInteger();

      // then
      expect(result).toBe(expectedValue);
    });

    test('문자열을 입력하면 false를 반환한다.', () => {
      // given
      const value = 'hello';
      const expectedValue = false;

      // when
      const result = TypeValidator.isInteger(value);

      // then
      expect(result).toBe(expectedValue);
    });
  });

  describe('isPositiveInteger 메서드 테스트', () => {
    test('양의 정수를 입력하면 true를 반환한다.', () => {
      // given
      const value = 123;
      const expectedValue = true;

      // when
      const result = TypeValidator.isPositiveInteger(value);

      // then
      expect(result).toBe(expectedValue);
    });

    test('음의 정수를 입력하면 false를 반환한다.', () => {
      // given
      const value = -123;
      const expectedValue = false;

      // when
      const result = TypeValidator.isPositiveInteger(value);

      // then
      expect(result).toBe(expectedValue);
    });

    test('소수를 입력하면 false를 반환한다.', () => {
      // given
      const value = 1.23;
      const expectedValue = false;

      // when
      const result = TypeValidator.isPositiveInteger(value);

      // then
      expect(result).toBe(expectedValue);
    });

    test('문자열을 입력하면 false를 반환한다.', () => {
      // given
      const value = 'hello';
      const expectedValue = false;

      // when
      const result = TypeValidator.isPositiveInteger(value);

      // then
      expect(result).toBe(expectedValue);
    });
  });

  describe('isArray 메서드 테스트', () => {
    test('배열을 입력하면 true를 반환한다.', () => {
      // given
      const value = [1, 2, 3];
      const expectedValue = true;

      // when
      const result = TypeValidator.isArray(value);

      // then
      expect(result).toBe(expectedValue);
    });

    test('객체를 입력하면 false를 반환한다.', () => {
      // given
      const value = { a: 1, b: 2 };
      const expectedValue = false;

      // when
      const result = TypeValidator.isArray(value);

      // then
      expect(result).toBe(expectedValue);
    });
  });

  describe('isEmpty 메서드 테스트', () => {
    test('undefined를 입력하면 true를 반환한다.', () => {
      // given
      const value = undefined;
      const expectedValue = true;

      // when
      const result = TypeValidator.isEmpty(value);

      // then
      expect(result).toBe(expectedValue);
    });

    test('null을 입력하면 true를 반환한다.', () => {
      // given
      const value = null;
      const expectedValue = true;

      // when
      const result = TypeValidator.isEmpty(value);

      // then
      expect(result).toBe(expectedValue);
    });

    test('빈 문자열을 입력하면 true를 반환한다.', () => {
      // given
      const value = '';
      const expectedValue = true;

      // when
      const result = TypeValidator.isEmpty(value);

      // then
      expect(result).toBe(expectedValue);
    });

    test('빈 배열을 입력하면 true를 반환한다.', () => {
      // given
      const value = [];
      const expectedValue = true;

      // when
      const result = TypeValidator.isEmpty(value);

      // then
      expect(result).toBe(expectedValue);
    });

    test('값이 있는 문자열을 입력하면 false를 반환한다.', () => {
      // given
      const value = 'hello';
      const expectedValue = false;

      // when
      const result = TypeValidator.isEmpty(value);

      // then
      expect(result).toBe(expectedValue);
    });

    test('값이 있는 배열을 입력하면 false를 반환한다.', () => {
      // given
      const value = [1, 2, 3];
      const expectedValue = false;

      // when
      const result = TypeValidator.isEmpty(value);

      // then
      expect(result).toBe(expectedValue);
    });
  });
});
