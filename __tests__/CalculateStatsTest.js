import CalculateStats from '../src/CalculateStats';

describe('CalculateStats', () => {
  let calculateStats;

  beforeEach(() => {
    calculateStats = new CalculateStats();
  });

  test('countMatchingNumbers', () => {
    expect(calculateStats.countMatchingNumbers([1, 2, 3, 4, 5, 6], [3, 4, 5, 6, 7, 8])).toBe(4);
  });

  test('checkBonusMatch', () => {
    expect(calculateStats.checkBonusMatch([1, 2, 3, 4, 5, 6], 5)).toBe(true);
  });

  test('updateStats', () => {
    const stats = { 3: 0, 4: 0, 5: 0, '5b': 0, 6: 0 };
    const updatedStats = calculateStats.updateStats(stats, 5, true);
    expect(updatedStats).toEqual({ 3: 0, 4: 0, 5: 0, '5b': 1, 6: 0 });
  });

  test('calculateEarningsRate', () => {
    calculateStats.stats = { 3: 1, 4: 0, 5: 0, '5b': 0, 6: 0 };
    expect(calculateStats.calculateEarningsRate(8000)).toBe('62.5%');
  });

  test('calculateTotalPrize', () => {
    calculateStats.stats = { 3: 1, 4: 0, 5: 0, '5b': 0, 6: 0 };
    expect(calculateStats.calculateTotalPrize(calculateStats.stats)).toBe(5000);
  });
});
