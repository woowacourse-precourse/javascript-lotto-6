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

  test('당첨된 로또 번호 체크 함수 테스트', () => {
    const testCases = [
      {
        winningNumbers: [5, 17, 23, 33, 45, 49],
        lottoNumbers: [3, 17, 23, 33, 45, 49],
        expected: [17, 23, 33, 45, 49],
      },
      {
        winningNumbers: [5, 17, 23, 33, 45, 49],
        lottoNumbers: [3, 17, 20, 35, 45, 50],
        expected: [17, 45],
      },
      {
        winningNumbers: [5, 17, 23, 33, 45, 49],
        lottoNumbers: [1, 2, 3, 4, 6, 7],
        expected: [],
      },
    ];

    testCases.forEach(({ winningNumbers, lottoNumbers, expected }) => {
      const filteredNumbers = filterLottoNumbers(winningNumbers, lottoNumbers);
      expect(filteredNumbers).toEqual(expected);
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

  test('당첨수 확인 함수 테스트', () => {
    const lottoResults = [
      { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
      { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
      { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
    ];
    const matchedNumbers = [
      [1, 2, 3, 4, 5],
      [1, 2],
      [1, 4, 5],
    ];
    const matchedBonus = [true, 0, 0];

    const predictedResults = [
      { 1: 0, 2: 1, 3: 0, 4: 0, 5: 0 },
      { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
      { 1: 0, 2: 0, 3: 0, 4: 0, 5: 1 },
    ];

    lottoResults.forEach((_, index) => {
      const updatedResults = matchedLottoNumbers(lottoResults[index], matchedNumbers[index], matchedBonus[index]);
      expect(updatedResults).toEqual(predictedResults[index]);
    });
  });

  test('로또번호 확인하는 전체 로직 함수 테스트', () => {
    const lottoResults = [
      { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
      { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
      { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
    ];
    const winningNumbers = [
      [1, 2, 3, 4, 5, 6],
      [2, 4, 5, 6, 7, 8],
      [10, 13, 14, 15, 16, 17],
    ];
    const bonusNumber = [5, 1, 7];

    const lottoNumbersArray = [
      [
        [1, 2, 3, 4, 5, 6],
        [7, 8, 9, 10, 11, 12],
        [12, 13, 14, 15, 16, 17],
      ],
      [[2, 3, 9, 10, 11, 23]],
      [
        [12, 13, 14, 15, 16, 17],
        [2, 3, 9, 10, 11, 23],
      ],
    ];

    const predictedResults = [
      { 1: 1, 2: 0, 3: 0, 4: 0, 5: 0 },
      { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
      { 1: 0, 2: 0, 3: 1, 4: 0, 5: 0 },
    ];

    winningNumbers.forEach((_, index) => {
      expect(countIncludeNumbers(lottoResults[index], winningNumbers[index], bonusNumber[index], lottoNumbersArray[index])).toEqual(
        predictedResults[index],
      );
    });
  });
});
