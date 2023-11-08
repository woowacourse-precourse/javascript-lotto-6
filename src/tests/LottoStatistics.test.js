import LottoStatistics from '../utils/LottoStatistics.js';

describe('당첨 통계 테스트', () => {
  test('로또 번호와 당첨 번호를 비교해서 일치 개수를 계산한다.', () => {
    const lottoStatistics = new LottoStatistics();
    const result = lottoStatistics.countMatchingNumbers(
      [1, 3, 5, 7, 9, 11],
      [1, 5, 9, 13, 17, 21],
    );

    expect(result).toBe(3);
  });

  test('당첨된 등수의 개수를 계산한다.', () => {
    const lottoStatistics = new LottoStatistics();
    const result = lottoStatistics.resultLottoRank(
      [
        [1, 2, 3, 4, 5, 6],
        [1, 2, 3, 4, 5, 7],
        [1, 2, 3, 4, 16, 17],
        [1, 2, 3, 7, 8, 9],
        [7, 8, 9, 10, 11, 12],
      ],
      [1, 2, 3, 4, 5, 6],
      7,
    );

    expect(result).toStrictEqual([1, 1, 0, 1, 1]);
  });

  test('번 돈을 계산해서 수익률을 반환한다.', () => {
    const lottoStatistics = new LottoStatistics();
    lottoStatistics.rankingCounts = [1, 0, 0, 0, 0];
    const result = lottoStatistics.calculateProfitPercentage('8000');

    expect(result).toBe('62.5');
  });
});
