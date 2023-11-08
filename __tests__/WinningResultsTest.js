import WinningResults from '../src/WinningResults';

describe('당첨 결과 클래스 테스트', () => {
  describe('총 수익률에 대한 테스트', () => {
    test('구입금액이 8000원이고 로또 당첨 결과가 5등 1개라면 수익률은 62.5%', () => {
      const winningResults = new WinningResults();
      winningResults.saveResultBy(3);
      expect(winningResults.getProfitRate(8000)).toBe(62.5);
    });

    test('구입금액이 55000원이고 로또 당첨 결과가 4등 1개, 5등 1개라면 수익률은 100.0%', () => {
      const winningResults = new WinningResults();
      winningResults.saveResultBy(4);
      winningResults.saveResultBy(3);
      expect(winningResults.getProfitRate(55000)).toBe(100.0);
    });
  });
});
