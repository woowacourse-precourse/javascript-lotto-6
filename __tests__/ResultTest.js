import { getRankCounts, calcEarning, calcEarningRate } from '../src/Result.js';
import { LOTTO } from '../src/Constants.js';

describe('getRankCounts 로직 테스트', () => {
  test('티켓에 저장된 등수를 rankCounts에 맞게 저장하는지 확인한다.', () => {
    const ticketArr = [
      { Rank: 1 },
      { Rank: 2 },
      { Rank: 3 },
      { Rank: 4 },
      { Rank: 5 },
      { Rank: 1 },
      { Rank: 3 },
      { Rank: 5 },
      { Rank: 2 },
      { Rank: 4 },
    ];

    const result = getRankCounts(ticketArr);

    expect(result).toEqual([2, 2, 2, 2, 2]);
  });
});

describe('calcEarning 계산 테스트', () => {
  test('당첨금을 상수를 이용해 맞게 계산하는지 확인한다', () => {
    const rankCounts = [2, 3, 1, 0, 4];

    const result = calcEarning(rankCounts);

    const expected =
      LOTTO.EARNING.RANK_5 * 4 +
      LOTTO.EARNING.RANK_4 * 0 +
      LOTTO.EARNING.RANK_3 * 1 +
      LOTTO.EARNING.RANK_2 * 3 +
      LOTTO.EARNING.RANK_1 * 2;

    expect(result).toBe(expected);
  });

  test('당첨금을 실제 금액과 맞게 계산하는지 확인한다', () => {
    const rankCounts = [0, 1, 1, 0, 4];

    const result = calcEarning(rankCounts);

    expect(result).toBe(31520000);
  });
});

describe('calcEarningRate 계산 테스트', () => {
  test('수익률을 맞게 계산하는지 확인한다.', () => {
    const earning = 20000;
    const purchasePrice = 350000;
    const result = calcEarningRate(earning, purchasePrice);

    expect(result).toEqual(5.71);
  });
});
