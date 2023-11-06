import Validator from '../../src/utils/Validator';

describe('Validator 클래스 테스트', () => {
  describe('isDefined 메서드 테스트', () => {
    test('값이 undefined 또는 null이라면 false, 아니라면 true를 반환한다.', () => {
      // given
      const testCases = [1, 'test', [], {}, true, false, 0, NaN, null, undefined];
      const expectedResults = [true, true, true, true, true, true, true, true, false, false];

      testCases.forEach((testCase, index) => {
        // when
        const validator = new Validator(testCase);
        const result = validator.isDefined();

        // then
        expect(result).toBe(expectedResults[index]);
      });
    });
  });

  describe('isString 메서드 테스트', () => {
    test('값이 string이라면 true를, 아니라면 false를 반환한다.', () => {
      const testCases = ['test', '', '1', '0', 'true', 'false', 1, 0, true, false];
      const expectedResults = [true, true, true, true, true, true, false, false, false, false];
      // given
      testCases.forEach((testCase, index) => {
        // when
        const validator = new Validator(testCase);
        const result = validator.isString();

        // then
        expect(result).toBe(expectedResults[index]);
      });
    });
  });

  describe('isArray 메서드 테스트', () => {
    test('값이 배열이라면 true를, 아니라면 false를 반환한다.', () => {
      // given
      const testCases = [[], [1, 2, 3], ['test'], [true, false], [{}], {}, 1];
      const expectedResults = [true, true, true, true, true, false, false];

      testCases.forEach((testCase, index) => {
        // when
        const validator = new Validator(testCase);
        const result = validator.isArray();

        // then
        expect(result).toBe(expectedResults[index]);
      });
    });
  });

  describe('isNumber 메서드 테스트', () => {
    test('값이 number라면 true를 반환한다.', () => {
      // given
      const testCases = [1, 1.1, 0, -1, '1', true, NaN];
      const expectedResults = [true, true, true, true, false, false, false];

      testCases.forEach((testCase, index) => {
        // when
        const validator = new Validator(testCase);
        const result = validator.isNumber();

        // then
        expect(result).toBe(expectedResults[index]);
      });
    });
  });

  describe('isInteger 메서드 테스트', () => {
    test('값이 정수라면 true, 아니라면 false를 반환한다.', () => {
      // given
      const testCases = [1, 0, -1, 1.1, '1', true, NaN];
      const expectedResults = [true, true, true, false, false, false, false];

      testCases.forEach((testCase, index) => {
        // when
        const validator = new Validator(testCase);
        const result = validator.isInteger();

        // then
        expect(result).toBe(expectedResults[index]);
      });
    });
  });

  describe('isEmpty 메서드 테스트', () => {
    test('값이 비어있다면 true, 아니라면 false를 반환한다.', () => {
      // given
      const testCases = ['', ' ', [], 0, null, undefined];
      const expectedResults = [true, true, true, false, true, true];

      testCases.forEach((testCase, index) => {
        // when
        const validator = new Validator(testCase);
        const result = validator.isEmpty();

        // then
        expect(result).toBe(expectedResults[index]);
      });
    });
  });

  describe('isIntegerInRange 메서드 테스트', () => {
    test('값이 정수가 아니라면 false를 반환한다.', () => {
      // given
      const validator = new Validator(1.1);

      // when
      const result = validator.isIntegerInRange(0, 2);

      // then
      expect(result).toBe(false);
    });

    test('값이 범위 내의 정수라면 true, 아니라면 false를 반환한다.', () => {
      // given
      const range = { from: 0, to: 2 };
      const testCases = [0, 2, 4, -1, -2];
      const expectedResults = [true, true, false, false, false];

      testCases.forEach((testCase, index) => {
        // when
        const validator = new Validator(testCase);
        const result = validator.isIntegerInRange(range.from, range.to);

        // then
        expect(result).toBe(expectedResults[index]);
      });
    });
  });
});
