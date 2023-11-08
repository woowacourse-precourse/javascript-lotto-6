import LottoResultCalculator from '../../src/models/LottoResultCalculator';
import NUMBER from '../../src/utils/constants/number';
import Lotto from '../../src/Lotto';
describe('LottoResultCalculator 클래스', () => {
  let calculator;
  const winningNumbers = [3, 7, 13, 17, 19, 23];
  const bonusNumber = 5;

  beforeEach(() => {
    calculator = new LottoResultCalculator();
  });

  describe('calculateResults 메서드', () => {
    it('모든 결과를 올바르게 계산해야 한다', () => {
      const tickets = [
        new Lotto([3, 7, 13, 17, 19, 23]), // 1등
        new Lotto([3, 7, 13, 17, 19, 5]), // 2등 (보너스 번호 매칭)
        new Lotto([3, 7, 13, 17, 19, 1]), // 3등
        new Lotto([3, 7, 13, 17, 1, 2]), // 4등
        new Lotto([3, 7, 13, 1, 2, 4]), // 5등
        new Lotto([3, 7, 1, 2, 4, 9]), // 미당첨
      ];

      const expectedResults = {
        first: 1,
        second: 1,
        third: 1,
        fourth: 1,
        fifth: 1,
      };

      const results = calculator.calculateResults(
        tickets,
        winningNumbers,
        bonusNumber,
      );

      expect(results).toEqual(expectedResults);
    });
  });

  describe('calculateProfitRate 메서드', () => {
    it('수익률을 올바르게 계산해야 한다', () => {
      calculator.calculateResults(
        [new Lotto([3, 7, 13, 17, 19, 23])],
        winningNumbers,
        bonusNumber,
      );

      const moneySpent = 1000;

      const profitRate = calculator.calculateProfitRate(moneySpent);

      const expectedProfitRate = (2000000000 / moneySpent) * 100;
      expect(profitRate).toBe(expectedProfitRate);
    });
  });
});
