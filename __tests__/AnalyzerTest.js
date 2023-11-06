import Analyzer from '../src/models/Analyzer';

describe('Analyzer 클래스 테스트', () => {
  const winnigResult = [
    [6, 0],
    [5, 1],
    [5, 0],
    [4, 0],
    [3, 0],
    [2, 0],
    [1, 0],
  ];
  const prizeMoeny = [2000000000, 30000000, 1500000, 50000, 5000];
  const totalPrize = prizeMoeny.reduce((sum, cur) => sum + cur, 0);
  const analyzer = new Analyzer();
  analyzer.getPrize(winnigResult);

  test('당첨 결과에 따른 상금을 얻는다', () => {
    const prizeInfo = analyzer.getPrizeInfo();
    expect(prizeInfo.firstPlace).toBe(1);
    expect(prizeInfo.secondPlace).toBe(1);
    expect(prizeInfo.thirdPlace).toBe(1);
    expect(prizeInfo.fourthPlace).toBe(1);
    expect(prizeInfo.fifthPlace).toBe(1);
  });

  test('총 상금을 계산한다', () => {
    analyzer.calculateTotalPrize();
    const lottoStats = analyzer.getPrizeInfo();
    expect(lottoStats.totalPrizeMoeny).toBe(totalPrize);
  });

  test('수익률을 계산한다', () => {
    const money = 10000;
    const prizeYield = analyzer.calculateYield(money);
    const expectedYield = ((totalPrize / money) * 100).toFixed(2);
    expect(prizeYield).toBe(expectedYield);
  });
});
