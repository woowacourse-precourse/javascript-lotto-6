import Validation from '../src/Validation.js';
describe('Validation.hasDuplication', () => {
  test('중복된 숫자가 있는 경우 true를 반환한다', () => {
    expect(Validation.hasDuplication([1, 1, 3, 4, 5, 6])).toBe(true);
    expect(Validation.hasDuplication([1, 2, 3, 4, 5, 6, 7, 7])).toBe(true);
  });

  test('중복된 숫자가 없는 경우 false를 반환한다', () => {
    expect(Validation.hasDuplication([1, 2, 3, 4, 5, 6, 7, 8])).toBe(false);
  });
});

describe('Validation.hasProperRange', () => {
  test('1~45범위인 경우 true를 반환한다', () => {
    expect(Validation.hasProperRange([1, 2, 3, 4, 5, 6])).toBe(true);
    expect(Validation.hasProperRange([7, 8, 9, 10, 11, 12])).toBe(true);
    expect(Validation.hasProperRange([13, 14, 15, 16, 17, 18])).toBe(true);
    expect(Validation.hasProperRange([41, 42, 43, 44, 45, 1])).toBe(true);
  });

  test('1~45범위가 아닌경우 false를 반환한다', () => {
    expect(Validation.hasProperRange([1, 2, 3, 4, 5, 46])).toBe(false);
    expect(Validation.hasProperRange([7, 231, 9, 10, 11, 12])).toBe(false);
    expect(Validation.hasProperRange([55, 14, 15, 16, 17, 18])).toBe(false);
    expect(Validation.hasProperRange([0, 14, 15, 16, 17, 18])).toBe(false);
  });
});
