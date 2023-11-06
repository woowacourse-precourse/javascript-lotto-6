import Analyzer from '../src/models/Analyzer';

describe('Analyzer 클래스 테스트', () => {
  const winnigResult = [
    { idx: 0, count: [6, 0], prize: 2000000000 },
    { idx: 1, count: [5, 1], prize: 30000000 },
    { idx: 2, count: [5, 0], prize: 150000 },
    { idx: 3, count: [4, 0], prize: 50000 },
    { idx: 4, count: [3, 0], prize: 5000 },
    { idx: 5, count: [2, 0], prize: 0 },
    { idx: 6, count: [1, 0], prize: 0 },
  ];
  const analyzer = new Analyzer();
  analyzer.getPrize(winnigResult.map((result) => result.count));

  test.each(winnigResult)('당첨 결과별 상금을 얻는다', (result) => {
    const lottoStats = analyzer.getPrizeInfo();
    expect(lottoStats.prizeRank[result.idx]).toBe(result.prize);
  });

  test('총 상금을 계산한다', () => {
    analyzer.calculateTotalPrize();
    const lottoStats = analyzer.getPrizeInfo();
    const totalPrize = winnigResult.reduce(
      (sum, result) => sum + result.prize,
      0,
    );
    // console.log(totalPrize);
    expect(lottoStats.totalPrize).toBe(totalPrize);
  });

  test('수익률을 계산한다', () => {
    const money = 10000;
    const prizeYield = analyzer.calculateYield(money);
    const expectedYield = (
      (winnigResult.reduce((sum, result) => sum + result.prize, 0) / money) *
      100
    ).toFixed(2);
    // console.log(expectedYield);
    expect(prizeYield).toBe(expectedYield);
  });
});
