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

describe('Validation.isProperPurchaseAmount', () => {
  test('구입 금액이 1000원보다 작은 경우 false이다.', () => {
    expect(Validation.isProperPurchaseAmount(999)).toBe(false);
    expect(Validation.isProperPurchaseAmount(1)).toBe(false);
    expect(Validation.isProperPurchaseAmount(0)).toBe(false);
    expect(Validation.isProperPurchaseAmount(-1)).toBe(false);
  });

  test('구입 금액이 1000보다 크고 1000으로 나누어 떨어지면 true이다.', () => {
    expect(Validation.isProperPurchaseAmount(1001000)).toBe(true);
    expect(Validation.isProperPurchaseAmount(2000)).toBe(true);
    expect(Validation.isProperPurchaseAmount(3000)).toBe(true);
  });

  test('구입 금액이 1000보다 크지만 1000으로 나누어 떨어지지 않으면 false이다.', () => {
    expect(Validation.isProperPurchaseAmount(12300)).toBe(false);
    expect(Validation.isProperPurchaseAmount(2010)).toBe(false);
    expect(Validation.isProperPurchaseAmount(3001)).toBe(false);
  });
});
