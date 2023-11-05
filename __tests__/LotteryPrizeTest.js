import LotteryPrize from '../src/LotteryPrize.js';
describe('LotteryPrize.getMatchCount', () => {
  test('두 번호를 비교해 공통된 번호의 개수를 리턴해야 한다.', () => {
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

describe('LotteryPrize.IsBonusNumberMatch', () => {
  test('보너스 번호가 포함되면 true이다.', () => {
    expect(LotteryPrize.IsBonusNumberMatch([1, 2, 3, 4, 5, 6], 1)).toBe(true);
    expect(LotteryPrize.IsBonusNumberMatch([1, 2, 3, 4, 5, 6], 2)).toBe(true);
    expect(LotteryPrize.IsBonusNumberMatch([1, 2, 3, 4, 5, 6], 3)).toBe(true);
  });

  test('보너스 번호가 포함되지 않으면 false이다.', () => {
    expect(LotteryPrize.IsBonusNumberMatch([1, 2, 3, 4, 5, 6], 7)).toBe(false);
    expect(LotteryPrize.IsBonusNumberMatch([1, 2, 3, 4, 5, 6], 8)).toBe(false);
    expect(LotteryPrize.IsBonusNumberMatch([1, 2, 3, 4, 5, 6], 9)).toBe(false);
  });
});
