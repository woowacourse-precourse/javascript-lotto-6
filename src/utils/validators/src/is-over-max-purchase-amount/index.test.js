import isOverMaxPurchaseAmount from './index.js';

describe('isMaxPurchaseAmount', () => {
  test('최대 구입 금액을 초과할 시 false를 리턴한다.', () => {
    // given
    const input = '150000';
    const max = 100_000;

    // when
    // then
    expect(isOverMaxPurchaseAmount(input, max)).toBe(true);
  });

  test('최대 구입 금액을 초과하지 않을 시 true를 리턴한다.', () => {
    // given
    const input = '90000';
    const max = 100_000;

    // when
    // then
    expect(isOverMaxPurchaseAmount(input, max)).toBe(false);
  });
});
