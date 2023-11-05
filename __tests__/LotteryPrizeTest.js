import LotteryPrize from '../src/LotteryPrize.js';
describe('LotteryPrize.getMatchCount', () => {
  test('LotteryPrize.getMatchCount', () => {
    expect(
      LotteryPrize.getMatchCount([1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12])
    ).toBe(0);
    expect(
      LotteryPrize.getMatchCount([1, 2, 3, 4, 5, 6], [1, 11, 12, 13, 14, 15])
    ).toBe(1);
    expect(
      LotteryPrize.getMatchCount([1, 2, 3, 4, 5, 6], [1, 2, 11, 12, 13, 14])
    ).toBe(2);
    expect(
      LotteryPrize.getMatchCount([1, 2, 3, 4, 5, 6], [1, 2, 3, 12, 13, 14])
    ).toBe(3);
    expect(
      LotteryPrize.getMatchCount([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 13, 14])
    ).toBe(4);
    expect(
      LotteryPrize.getMatchCount([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 14])
    ).toBe(5);
    expect(
      LotteryPrize.getMatchCount([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])
    ).toBe(6);
  });
});
