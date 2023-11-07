import Lotto from '../src/Lotto';
import ResultCalculator from '../src/ResultCalculator';
import WinningLotto from '../src/WinningLotto';

describe('당첨 결과 테스트', () => {
  const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6]);
  winningLotto.bonusNumber = 7;

  describe('발행한 로또의 번호가 당첨 로또 번호', () => {
    test.each([
      [6, 1, [1, 2, 3, 4, 5, 6], 'first'],
      [5, 3, [1, 2, 3, 4, 5, 45], 'third'],
      [4, 4, [1, 2, 3, 4, 44, 45], 'fourth'],
      [3, 5, [1, 2, 3, 43, 44, 45], 'fifth'],
    ])(
      '%d개와 일치하면, %d등 당첨이다.',
      (matchingNumber, rankNumber, numbers, rankString) => {
        const lotto = new Lotto(numbers);
        const resultCalculator = new ResultCalculator();

        resultCalculator.compareLottos([lotto], winningLotto);
        const output = resultCalculator.cntRank[rankString];

        expect(output).toBe(1);
      },
    );

    test('5개, 보너스 번호와 일치하면, 2등 당첨이다.', () => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 7]);
      const resultCalculator = new ResultCalculator();

      resultCalculator.compareLottos([lotto], winningLotto);
      const output = resultCalculator.cntRank.second;

      expect(output).toBe(1);
    });
  });
});
