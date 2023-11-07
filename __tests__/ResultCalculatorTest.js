import Lotto from '../src/Lotto';
import ResultCalculator from '../src/ResultCalculator';
import WinningLotto from '../src/WinningLotto';

describe('당첨 결과 테스트', () => {
  const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6]);
  winningLotto.bonusNumber = 7;

  describe('발행한 로또의 번호가 당첨 로또 번호', () => {
    test('6개와 일치하면, 1등 당첨이다.', () => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      const resultCalculator = new ResultCalculator();

      resultCalculator.compareLottos([lotto], winningLotto);
      const output = resultCalculator.cntRank.first;

      expect(output).toBe(1);
    });

    test('5개, 보너스 번호와 일치하면, 2등 당첨이다.', () => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 7]);
      const resultCalculator = new ResultCalculator();

      resultCalculator.compareLottos([lotto], winningLotto);
      const output = resultCalculator.cntRank.second;

      expect(output).toBe(1);
    });

    test('5개와 일치하면, 3등 당첨이다.', () => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 45]);
      const resultCalculator = new ResultCalculator();

      resultCalculator.compareLottos([lotto], winningLotto);
      const output = resultCalculator.cntRank.third;

      expect(output).toBe(1);
    });

    test('4개와 일치하면, 4등 당첨이다.', () => {
      const lotto = new Lotto([1, 2, 3, 4, 44, 45]);
      const resultCalculator = new ResultCalculator();

      resultCalculator.compareLottos([lotto], winningLotto);
      const output = resultCalculator.cntRank.fourth;

      expect(output).toBe(1);
    });

    test('3개와 일치하면, 5등 당첨이다.', () => {
      const lotto = new Lotto([1, 2, 3, 43, 44, 45]);
      const resultCalculator = new ResultCalculator();

      resultCalculator.compareLottos([lotto], winningLotto);
      const output = resultCalculator.cntRank.fifth;

      expect(output).toBe(1);
    });
  });
});
