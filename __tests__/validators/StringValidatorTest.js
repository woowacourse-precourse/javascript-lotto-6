import StringValidator from '../../src/validators/StringValidator';

describe('StringValidator 클래스 테스트', () => {
  describe('isPositiveInteger 메서드 테스트', () => {
    test('값이 숫자가 아닐 경우 false를 반환한다', () => {
      // given
      const value = 'abc';
      const expectedValue = false;

      // when
      const result = StringValidator.isPositiveInteger(value);

      // then
      expect(result).toBe(expectedValue);
    });

    test('값이 양의 정수일 경우 true를 반환한다', () => {
      // given
      const value = '123';
      const expectedValue = true;

      // when
      const result = StringValidator.isPositiveInteger(value);

      // then
      expect(result).toBe(expectedValue);
    });

    test('값이 음의 정수일 경우 false를 반환한다', () => {
      // given
      const value = '-123';
      const expectedValue = false;

      // when
      const result = StringValidator.isPositiveInteger(value);

      // then
      expect(result).toBe(expectedValue);
    });

    test('값이 소수일 경우 false를 반환한다', () => {
      // given
      const value = '1.23';
      const expectedValue = false;

      // when
      const result = StringValidator.isPositiveInteger(value);

      // then
      expect(result).toBe(expectedValue);
    });

    test('값이 콤마로 구분된 숫자일 경우 false를 반환한다', () => {
      // given
      const value = '1,000';
      const expectedValue = false;

      // when
      const result = StringValidator.isPositiveInteger(value);

      // then
      expect(result).toBe(expectedValue);
    });

    test('값이 0일 경우 false를 반환한다', () => {
      // given
      const value = '0';
      const expectedValue = false;

      // when
      const result = StringValidator.isPositiveInteger(value);

      // then
      expect(result).toBe(expectedValue);
    });
  });

  describe('isCommaSeparatedNumbers 메서드 테스트', () => {
    test('값이 콤마로 구분된 숫자가 아닐 경우 false를 반환한다', () => {
      // given
      const value = 'a,b,c';
      const expectedValue = false;

      // when
      const result = StringValidator.isCommaSeparatedNumbers(value);

      // then
      expect(result).toBe(expectedValue);
    });

    test('값이 콤마로 구분된 숫자일 경우 true를 반환한다', () => {
      // given
      const value = '1,2,3';
      const expectedValue = true;

      // when
      const result = StringValidator.isCommaSeparatedNumbers(value);

      // then
      expect(result).toBe(expectedValue);
    });

    test('값이 콤마로 구분된 소수일 경우 false를 반환한다', () => {
      // given
      const value = '1,1.2';
      const expectedValue = false;

      // when
      const result = StringValidator.isCommaSeparatedNumbers(value);

      // then
      expect(result).toBe(expectedValue);
    });
  });
});
