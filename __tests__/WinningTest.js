import LottoData from '../src/models/LottoData.js';

describe('로또 당첨 테스트', () => {
  let lottoData;

  beforeEach(() => {
    lottoData = new LottoData(8000);
  });

  test('로또 당첨 내역 계산', () => {
    const winningNumber = [1, 2, 4, 8, 28, 40];
    const bonusNumber = 42;
    lottoData.lottos = [
      [3, 13, 18, 19, 24, 26],
      [4, 7, 30, 31, 39, 43],
      [1, 30, 34, 35, 37, 44],
      [1, 2, 4, 8, 28, 42],
      [1, 25, 28, 34, 40, 44],
      [8, 14, 23, 24, 35, 39],
      [13, 18, 24, 25, 39, 43],
      [1, 9, 12, 20, 22, 44],
    ];
    lottoData.calculateStats(winningNumber, bonusNumber);
    const lottoStats = lottoData.getLottoStats();
    expect(lottoStats[3]).toBe(1);
    expect(lottoStats[4]).toBe(0);
    expect(lottoStats[5]).toBe(0);
    expect(lottoStats.bonus).toBe(1);
    expect(lottoStats[6]).toBe(0);
  });

  test('수익률 계산', () => {
    lottoData.lottoStats = { 3: 1, 4: 0, 5: 0, 6: 0, bonus: 0 };
    const profit = lottoData.calculateProfit();
    expect(profit).toBe('62.5');
  });
});
