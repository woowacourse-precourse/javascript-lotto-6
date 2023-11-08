import { MissionUtils } from '@woowacourse/mission-utils';

import {
  calculateProfit,
  calculateProfitRate,
  countIncludeNumbers,
  matchedLottoNumbers,
  filterLottoNumbers,
} from '../src/utils/calculate/calculate.js';

describe('당첨금 계산 함수 테스트', () => {
  test('당첨금 합계 테스트', () => {
    const lottoResults = [
      { 1: 1, 2: 0 },
      { 2: 0, 5: 1 },
      { 1: 0, 2: 0, 3: 0, 4: 0, 5: 1 },
    ];
    const prices = [2000000000, 5000, 5000];

    lottoResults.forEach((result, index) => {
      expect(calculateProfit(result)).toBe(prices[index]);
    });
  });

  test('당첨 수익률 확인 테스트', () => {
    const startMoney = [8000, 1000, 5000];
    const winningMoney = [2000000000, 5000, 5000];

    const profitRate = [25000000, 500, 100];

    startMoney.forEach((_, index) => {
      expect(calculateProfitRate(startMoney[index], winningMoney[index])).toBe(profitRate[index]);
    });
  });
});
