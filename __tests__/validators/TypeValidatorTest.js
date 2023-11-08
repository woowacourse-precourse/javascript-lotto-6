import NumberValidator from '../../src/validators/NumberValidator';

describe('NumberValidator 클래스 테스트', () => {
  describe('isDivisibleBy 메서드 테스트', () => {
    test('나누는 수가 0일 경우, CustomError를 던진다', () => {
      // given
      const value = 10;
      const divisor = 0;

      // when
      const result = () => NumberValidator.isDivisibleBy(value, divisor);

      // then
      expect(result).toThrow('divisor는 0이 될 수 없습니다.');
    });

    test('값이 숫자가 아닐 경우 false를 반환한다', () => {
      // given
      const value = '10';
      const divisor = 3;
      const expectedValue = false;

      // when
      const result = NumberValidator.isDivisibleBy(value, divisor);

      // then
      expect(result).toBe(expectedValue);
    });

    test('값이 divisor로 나누어 떨어지면 true를 반환한다', () => {
      // given
      const value = 10;
      const divisor = 2;
      const expectedValue = true;

      // when
      const result = NumberValidator.isDivisibleBy(value, divisor);

      // then
      expect(result).toBe(expectedValue);
    });

    test('값이 divisor로 나누어 떨어지지 않으면 false를 반환한다', () => {
      // given
      const value = 10;
      const divisor = 3;
      const expectedValue = false;

      // when
      const result = NumberValidator.isDivisibleBy(value, divisor);

      // then
      expect(result).toBe(expectedValue);
    });
  });

  describe('isInRange 메서드 테스트', () => {
    test('값이 숫자가 아닐 경우 false를 반환한다', () => {
      // given
      const value = '10';
      const range = { from: 1, to: 5 };
      const expectedValue = false;

      // when
      const result = NumberValidator.isInRange(value, range);

      // then
      expect(result).toBe(expectedValue);
    });

    test('값이 범위 내에 있으면 true를 반환한다', () => {
      // given
      const value = 3;
      const range = { from: 1, to: 5 };
      const expectedValue = true;

      // when
      const result = NumberValidator.isInRange(value, range);

      // then
      expect(result).toBe(expectedValue);
    });

    test('값이 범위 내에 없으면 false를 반환한다', () => {
      // given
      const value = 10;
      const range = { from: 1, to: 5 };
      const expectedValue = false;

      // when
      const result = NumberValidator.isInRange(value, range);

      // then
      expect(result).toBe(expectedValue);
    });
  });
});
