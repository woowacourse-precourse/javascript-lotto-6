import isValidType from './index.js';

describe('isValidType 함수 테스트', () => {
  test('유효한 숫자 입력이면 true', () => {
    // GIVEN
    const validNumber = 1000;

    // WHEN
    const result = isValidType(validNumber);

    // THEN
    expect(result).toBe(true);
  });

  test('0 입력이면 true', () => {
    // GIVEN
    const zero = 0;

    // WHEN
    const result = isValidType(zero);

    // THEN
    expect(result).toBe(true);
  });

  test('음수 입력이면 false', () => {
    // GIVEN
    const negativeNumber = -1000;

    // WHEN
    const result = isValidType(negativeNumber);

    // THEN
    expect(result).toBe(false);
  });

  test('소수 입력이면 false', () => {
    // GIVEN
    const floatNumber = 3.1415;

    // WHEN
    const result = isValidType(floatNumber);

    // THEN
    expect(result).toBe(false);
  });

  test('NaN 입력이면 false', () => {
    // GIVEN
    const nanValue = NaN;

    // WHEN
    const result = isValidType(nanValue);

    // THEN
    expect(result).toBe(false);
  });
});
