import WinningStatistics from '../src/WinningStatistics.js';

describe('WinningStatistics 클래스 테스트', () => {
  test('구입한 로또와 당첨 번호를 비교하여 일치하는 번호의 갯수 확인', () => {
    const AMOUNT = '3000';
    const PURCHASED_LOTTO_LIST = [
      [1, 2, 3, 4, 5, 6],
      [13, 14, 15, 16, 17, 18],
      [24, 25, 26, 27, 28, 29],
    ];
    const LOTTO_WINNING_NUMBERS = [1, 2, 3, 13, 14, 15];
    const BOUNUS_WINNING_NUMBER = '30';

    const WINNING_STATISTICS = new WinningStatistics(
      AMOUNT,
      PURCHASED_LOTTO_LIST,
      LOTTO_WINNING_NUMBERS,
      BOUNUS_WINNING_NUMBER
    );

    const equl = [3, 3, 0];

    PURCHASED_LOTTO_LIST.forEach((purchaseLotto, idx) => {
      expect(WINNING_STATISTICS.countWinningNumbers(purchaseLotto)).toEqual(
        equl[idx]
      );
    });
  });
});
