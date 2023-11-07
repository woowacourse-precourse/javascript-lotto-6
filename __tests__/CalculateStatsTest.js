import CalculateStats from '../src/CalculateStats';

describe('CalculateStats', () => {
  let calculateStats;

  beforeEach(() => {
    calculateStats = new CalculateStats();
  });

  test('countMatchingNumbers는 구입한 티켓과 당첨 번호 사이의 일치하는 숫자 개수를 반환한다', () => {
    const ticket = [1, 2, 3, 4, 5, 6];
    const winningNumbers = [3, 4, 5, 6, 7, 8];
    const result = calculateStats.countMatchingNumbers(ticket, winningNumbers);
    expect(result).toBe(4);
  });

  test('checkBonusMatch는 보너스 번호가 구입한 티켓에 있는 경우 true를 반환한다', () => {
    const ticket = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 5;
    const result = calculateStats.checkBonusMatch(ticket, bonusNumber);
    expect(result).toBe(true);
  });

  test('updateStats는 stats 객체를 맞게 업데이트해야한다', () => {
    let stats = { 3: 0, 4: 0, 5: 0, '5b': 0, 6: 0 };
    const matchingNumbersCount = 5;
    const bonusMatch = true;
    stats = calculateStats.updateStats(stats, matchingNumbersCount, bonusMatch);
    expect(stats).toEqual({ 3: 0, 4: 0, 5: 0, '5b': 1, 6: 0 });
  });

  test('calculateEarningsRate는 수익률을 맞게 계산해야한다', () => {
    calculateStats.stats = { 3: 1, 4: 0, 5: 0, '5b': 0, 6: 0 };
    const purchaseAmount = 8000;
    const result = calculateStats.calculateEarningsRate(purchaseAmount);
    expect(result).toBe('62.5%');
  });

  test('calculateTotalPrize는 총 상금을 맞게 계산해야한다', () => {
    calculateStats.stats = { 3: 1, 4: 0, 5: 0, '5b': 0, 6: 0 };
    const result = calculateStats.calculateTotalPrize(calculateStats.stats);
    expect(result).toBe(5000);
  });
});
