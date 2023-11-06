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
