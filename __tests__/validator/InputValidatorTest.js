import InputValidator from '../../src/validator/InputValidator.js';

describe('형변환을 위한 Parser 테스트', () => {
  test('배열에 포함된 nan을 감지하는지 테스트', () => {
    const nanArr = [1, 'a'];
    const numArr = [1, 2];

    expect(InputValidator.isArrayHaveNan(nanArr)).toEqual(true);
    expect(InputValidator.isArrayHaveNan(numArr)).toEqual(false);
  });

  test('배열의 중복 요소를 감지하는지 테스트', () => {
    const duplicatedArr = [1, 2, 1, 2, 1, 2];

    expect(InputValidator.isDuplicated(duplicatedArr)).toEqual(true);
  });

  test('숫자가 범위 안에 포함되는지 테스트', () => {
    expect(InputValidator.isNotInRange([1, 2], 1)).toEqual(false);
    expect(InputValidator.isNotInRange([1, 3], 100)).toEqual(true);
  });

  test('음수을 잘 감지하는지 테스트', () => {
    expect(InputValidator.isNegativeNumber(-1)).toEqual(true);
    expect(InputValidator.isNegativeNumber(1)).toEqual(false);
  });
});
