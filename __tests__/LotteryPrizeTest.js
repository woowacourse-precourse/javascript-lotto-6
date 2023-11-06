import LotteryPrize from '../src/LotteryPrize.js';
import WinningStatistic from '../src/WinningStatistic.js';

describe('LotteryPrize.calculatePrize', () => {
  test('1등 당첨, 수익률 200,000,000%', () => {
    const lottoBundle = [[1, 2, 3, 4, 5, 6]];
    const winningNumbers = [1, 2, 3, 4, 5, 6];

    const lotteryPrize = new LotteryPrize(lottoBundle, winningNumbers, 7);
    let winningStatistic = lotteryPrize.getWinningStatistics();

    expect(winningStatistic.getFirstPrize()).toBe(1);
    expect(winningStatistic.getSecondPrize()).toBe(0);
    expect(winningStatistic.getThirdPrize()).toBe(0);
    expect(winningStatistic.getFourthPrize()).toBe(0);
    expect(winningStatistic.getFifthPrize()).toBe(0);
    expect(winningStatistic.getEaringRate()).toBe(200000000);
  });

  test('3등 당첨, 수익률 62.5%', () => {
    const lottoBundle = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ];
    const winningNumbers = [1, 2, 3, 4, 5, 6];

    const lotteryPrize = new LotteryPrize(lottoBundle, winningNumbers, 7);
    let winningStatistic = lotteryPrize.getWinningStatistics();

    expect(winningStatistic.getFirstPrize()).toBe(0);
    expect(winningStatistic.getSecondPrize()).toBe(0);
    expect(winningStatistic.getThirdPrize()).toBe(0);
    expect(winningStatistic.getFourthPrize()).toBe(0);
    expect(winningStatistic.getFifthPrize()).toBe(1);
    expect(winningStatistic.getEaringRate()).toBe(62.5);
  });

  test('4등 1개, 5등 3개당첨 수익률 812.5%', () => {
    const lottoBundle = [
      [1, 34, 2, 3, 4, 42],
      [1, 3, 4, 7, 8, 9],
      [1, 2, 3, 42, 43, 44],
      [1, 2, 3, 12, 13, 14],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [31, 32, 355, 14, 22, 45],
    ];
    const winningNumbers = [1, 2, 3, 4, 5, 6];

    const lotteryPrize = new LotteryPrize(lottoBundle, winningNumbers, 7);
    let winningStatistic = lotteryPrize.getWinningStatistics();

    expect(winningStatistic.getFirstPrize()).toBe(0);
    expect(winningStatistic.getSecondPrize()).toBe(0);
    expect(winningStatistic.getThirdPrize()).toBe(0);
    expect(winningStatistic.getFourthPrize()).toBe(1);
    expect(winningStatistic.getFifthPrize()).toBe(3);
    expect(winningStatistic.getEaringRate()).toBe(812.5);
  });
});
