import ArrayValidator from '../../src/validators/ArrayValidator';
import ERROR_MESSAGE from '../../src/constants/error';

describe('ArrayValidator 클래스 테스트', () => {
  describe('isArrayOfLength 메서드 테스트', () => {
    test('배열의 길이가 count와 같으면 true를 반환한다', () => {
      // given
      const value = [1, 2, 3, 4, 5];
      const count = 5;
      const expectedValue = true;

      // when
      const result = ArrayValidator.isArrayOfLength(value, count);

      // then
      expect(result).toBe(expectedValue);
    });

    test('배열의 길이가 count와 다르면 false를 반환한다', () => {
      // given
      const value = [1, 2, 3, 4, 5];
      const count = 6;
      const expectedValue = false;

      // when
      const result = ArrayValidator.isArrayOfLength(value, count);

      // then
      expect(result).toBe(expectedValue);
    });

    test('value가 배열이 아닐 경우 false를 반환한다', () => {
      // given
      const value = 10;
      const count = 5;
      const expectedValue = false;

      // when
      const result = ArrayValidator.isArrayOfLength(value, count);

      // then
      expect(result).toBe(expectedValue);
    });
  });

  describe('isSortedArray 메서드 테스트', () => {
    test('배열이 오름차순으로 정렬되어 있으면 true를 반환한다', () => {
      // given
      const value = [1, 2, 3, 4, 5];
      const expectedValue = true;

      // when
      const result = ArrayValidator.isSortedArray(value);

      // then
      expect(result).toBe(expectedValue);
    });

    test('배열이 내림차순으로 정렬되어 있으면 false를 반환한다', () => {
      // given
      const value = [5, 4, 3, 2, 1];
      const expectedValue = false;

      // when
      const result = ArrayValidator.isSortedArray(value);

      // then
      expect(result).toBe(expectedValue);
    });

    test('배열이 정렬되어 있지 않으면 false를 반환한다', () => {
      // given
      const value = [1, 3, 2, 4, 5];
      const expectedValue = false;

      // when
      const result = ArrayValidator.isSortedArray(value);

      // then
      expect(result).toBe(expectedValue);
    });

    test('order가 desc일 때, 배열이 내림차순으로 정렬되어 있으면 true를 반환한다', () => {
      // given
      const value = [5, 4, 3, 2, 1];
      const order = 'desc';
      const expectedValue = true;

      // when
      const result = ArrayValidator.isSortedArray(value, order);

      // then
      expect(result).toBe(expectedValue);
    });

    test('order가 desc일 때, 배열이 오름차순으로 정렬되어 있으면 false를 반환한다', () => {
      // given
      const value = [1, 2, 3, 4, 5];
      const order = 'desc';
      const expectedValue = false;

      // when
      const result = ArrayValidator.isSortedArray(value, order);

      // then
      expect(result).toBe(expectedValue);
    });
  });

  describe('isUniqueArray 메서드 테스트', () => {
    test('배열 내에 중복된 요소가 없으면 true를 반환한다', () => {
      // given
      const value = [1, 2, 3, 4, 5];
      const expectedValue = true;

      // when
      const result = ArrayValidator.isUniqueArray(value);

      // then
      expect(result).toBe(expectedValue);
    });

    test('배열 내에 중복된 요소가 있으면 false를 반환한다', () => {
      // given
      const value = [1, 2, 3, 4, 5, 5];
      const expectedValue = false;

      // when
      const result = ArrayValidator.isUniqueArray(value);

      // then
      expect(result).toBe(expectedValue);
    });

    test('value가 배열이 아닐 경우 false를 반환한다', () => {
      // given
      const value = 10;
      const expectedValue = false;

      // when
      const result = ArrayValidator.isUniqueArray(value);

      // then
      expect(result).toBe(expectedValue);
    });
  });

  describe('isInRange 메서드 테스트', () => {
    test('배열 내의 모든 요소가 범위 내의 정수일 경우 true를 반환한다', () => {
      // given
      const value = [1, 2, 3, 4, 5];
      const range = { from: 1, to: 5 };
      const expectedValue = true;

      // when
      const result = ArrayValidator.isInRange(value, range);

      // then
      expect(result).toBe(expectedValue);
    });

    test('배열 내의 모든 요소가 범위 내의 정수가 아닐 경우 false를 반환한다', () => {
      // given
      const value = [1, 2, 3, 4, 6];
      const range = { from: 1, to: 5 };
      const expectedValue = false;

      // when
      const result = ArrayValidator.isInRange(value, range);

      // then
      expect(result).toBe(expectedValue);
    });

    test('value가 배열이 아닐 경우 false를 반환한다', () => {
      // given
      const value = 10;
      const range = { from: 1, to: 5 };
      const expectedValue = false;

      // when
      const result = ArrayValidator.isInRange(value, range);

      // then
      expect(result).toBe(expectedValue);
    });
  });

  describe('validateLottoNumbers 메서드 테스트', () => {
    const LOTTO_COUNT = 6;
    const LOTTO_RANGE = { from: 1, to: 45 };

    test('배열의 길이가 6이 아닐 경우 에러 메시지를 반환한다', () => {
      // given
      const numbers = [1, 2, 3, 4, 5];
      const expectedValue = ERROR_MESSAGE.NOT_IN_LOTTO_COUNT;

      // when
      const result = ArrayValidator.validateLottoNumbers(numbers);

      // then
      expect(result).toBe(expectedValue);
    });

    test('배열 내에 중복된 요소가 있을 경우 에러 메시지를 반환한다', () => {
      // given
      const numbers = [1, 2, 3, 4, 5, 5];
      const expectedValue = ERROR_MESSAGE.DUPLICATED_NUMBER;

      // when
      const result = ArrayValidator.validateLottoNumbers(numbers);

      // then
      expect(result).toBe(expectedValue);
    });

    test('배열이 오름차순으로 정렬되어 있지 않을 경우 에러 메시지를 반환한다', () => {
      // given
      const numbers = [5, 4, 3, 2, 1];
      const expectedValue = ERROR_MESSAGE.NOT_SORTED;

      // when
      const result = ArrayValidator.validateLottoNumbers(numbers);

      // then
      expect(result).toBe(expectedValue);
    });

    test('배열 내의 모든 요소가 범위 내의 정수가 아닐 경우 에러 메시지를 반환한다', () => {
      // given
      const numbers = [1, 2, 3, 4, 46, 47];
      const expectedValue = ERROR_MESSAGE.NOT_IN_RANGE;

      // when
      const result = ArrayValidator.validateLottoNumbers(numbers);

      // then
      expect(result).toBe(expectedValue);
    });
  });
});
