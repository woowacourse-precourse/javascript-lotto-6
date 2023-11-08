import Analyzer from '../src/models/Analyzer';

describe('Analyzer 클래스 테스트', () => {
  const matchedNumberList = [
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
  const money = 7000;
  const analyzer = new Analyzer();
  analyzer.countWinningRank(matchedNumberList);
  const rankedLotto = analyzer.getRankedLotto();

  test('로또 번호 매칭 결과에 따른 등수를 얻는다', () => {
    expect(rankedLotto.first).toBe(1);
    expect(rankedLotto.second).toBe(1);
    expect(rankedLotto.third).toBe(1);
    expect(rankedLotto.fourth).toBe(1);
    expect(rankedLotto.fifth).toBe(1);
    expect(rankedLotto.losing).toBe(2);
  });

  test('수익률을 계산한다', () => {
    const profitRate = ((totalPrize / money) * 100).toFixed(1);
    expect(analyzer.calculateProfitRate()).toBe(profitRate);
  });
});
