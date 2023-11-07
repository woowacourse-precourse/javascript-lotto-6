/* eslint-disable */
import Statistics from '../src/model/Statistics.js';
import { STATISTICS } from '../src/constants/constants.js';

describe('Statistics 클래스 테스트', () => {
  const statistics = new Statistics();

  test('calculateStatistics 메소드 작동 테스트 1', () => {
    const matchingResult = {
      fifth: 21,
      fourth: 6,
      third: 3,
      second: 0,
      first: 0,
    };
    const purchaseAmount = 70000;

    const expectedStatistics = STATISTICS.map((statistic) => {
      return { ...statistic, count: matchingResult[statistic.rank] };
    });
    const expectedRateOfReturn = '7,007.1';

    statistics.calculateStatistics(matchingResult, purchaseAmount);
    expect(statistics.getStatistics()).toEqual(expectedStatistics);
    expect(statistics.getRateOfReturn()).toBe(expectedRateOfReturn);
  });

  test('calculateStatistics 메소드 작동 테스트 2', () => {
    const matchingResult = {
      fifth: 0,
      fourth: 0,
      third: 0,
      second: 0,
      first: 1,
    };
    const purchaseAmount = 2000;

    const expectedStatistics = STATISTICS.map((statistic) => {
      return { ...statistic, count: matchingResult[statistic.rank] };
    });
    const expectedRateOfReturn = '100,000,000.0';

    statistics.calculateStatistics(matchingResult, purchaseAmount);
    expect(statistics.getStatistics()).toEqual(expectedStatistics);
    expect(statistics.getRateOfReturn()).toBe(expectedRateOfReturn);
  });
});
