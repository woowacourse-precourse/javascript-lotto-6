import { isValidLength, isValidUnique, isValidRange } from './index.js';

describe('isValidLength 함수 테스트', () => {
  test('길이가 6인 배열이면 true', () => {
    // GIVEN
    const numbers = [1, 2, 3, 4, 5, 6];

    // WHEN
    const result = isValidLength(numbers);

    // THEN
    expect(result).toBe(true);
  });

  test('길이가 6이 아닌 배열이면 false', () => {
    // GIVEN
    const numbers = [
      [1, 2],
      [1, 2, 3, 4, 5, 6, 7],
    ];

    // WHEN
    numbers.forEach(number => {
      const result = isValidLength(number);

      // THEN
      expect(result).toBe(false);
    });
  });
});

describe('isValidUnique 함수 테스트', () => {
  test('모든 숫자가 고유한 배열이면 true', () => {
    // GIVEN
    const numbers = [1, 2, 3, 4, 5, 6];

    // WHEN
    const result = isValidUnique(numbers);

    // THEN
    expect(result).toBe(true);
  });

  test('중복된 숫자가 있는 배열이면 false', () => {
    // GIVEN
    const numbers = [
      [1, 1, 1, 1, 1],
      [10, 11, 12, 13, 10],
    ];

    // WHEN
    numbers.forEach(number => {
      const result = isValidUnique(number);

      // THEN
      expect(result).toBe(false);
    });
  });
});

describe('isValidRange 함수 테스트', () => {
  test('유효한 범위의 숫자면 true', () => {
    // GIVEN
    const validNumber = 1;

    // WHEN
    const result = isValidRange(validNumber);

    // THEN
    expect(result).toBe(true);
  });

  test('유효하지 않은 범위의 숫자면 false', () => {
    // GIVEN
    const invalidNumber = 50;

    // WHEN
    const result = isValidRange(invalidNumber);

    // THEN
    expect(result).toBe(false);
  });
});
