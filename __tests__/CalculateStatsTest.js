import CalculateStats from '../src/CalculateStats';

describe('CalculateStats', () => {
  let calculateStats;

  beforeEach(() => {
    calculateStats = new CalculateStats();
  });

  test('countMatchingNumbers는 구입한 티켓과 당첨 번호 사이의 일치하는 숫자 개수를 반환한다', () => {
    expect(calculateStats.countMatchingNumbers([1, 2, 3, 4, 5, 6], [3, 4, 5, 6, 7, 8])).toBe(4);
  });

  test('checkBonusMatch는 보너스 번호가 구입한 티켓에 있는 경우 true를 반환한다', () => {
    expect(calculateStats.checkBonusMatch([1, 2, 3, 4, 5, 6], 5)).toBe(true);
  });

  test('updateStats는 stats 객체를 맞게 업데이트해야한다', () => {
    const stats = { 3: 0, 4: 0, 5: 0, '5b': 0, 6: 0 };
    expect(calculateStats.updateStats(stats, 5, true)).toEqual({ 3: 0, 4: 0, 5: 0, '5b': 1, 6: 0 });
  });

  test('calculateEarningsRate는 수익률을 맞게 계산해야한다', () => {
    calculateStats.stats = { 3: 1, 4: 0, 5: 0, '5b': 0, 6: 0 };
    expect(calculateStats.calculateEarningsRate(8000)).toBe('62.5%');
  });

  test('calculateTotalPrize는 총 상금을 맞게 계산해야한다', () => {
    calculateStats.stats = { 3: 1, 4: 0, 5: 0, '5b': 0, 6: 0 };
    expect(calculateStats.calculateTotalPrize(calculateStats.stats)).toBe(5000);
  });
});
