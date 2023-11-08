import WinningCalculator from '../src/domain/WinningCalculator.js';
import {
  NUMBER_OPTIONS,
  STATISTICS_STANDARD,
  PURCHASE_OPTIONS,
} from '../src/service/Constants.js';

describe('WinningCalculator 클래스 테스트', () => {
  const winningNumbers = [1, 2, 3, 4, 5, 6];
  const bonusNumber = 7;

  const totalWinningNumbers = new Map([
    [NUMBER_OPTIONS.winningName, winningNumbers],
    [NUMBER_OPTIONS.bonusName, bonusNumber],
  ]);

  const issuedLotto = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
  ];

  test.each([
    [[1, 2, 3, 4, 5, 6], 6],
    [[1, 2, 3, 4, 5, 7], 5],
    [[1, 2, 3, 4, 7, 8], 4],
  ])(
    '당첨 번호와 일치하는 수의 개수만큼 반환해야 한다.',
    (inputs, expected) => {
      const winningCalculator = new WinningCalculator(
        totalWinningNumbers,
        issuedLotto,
      );

      const matchedCount = winningCalculator.calculateMatchNumbers(
        totalWinningNumbers.get(NUMBER_OPTIONS.winningName),
        inputs,
      );

      expect(matchedCount).toBe(expected);
    },
  );

  test.each([[3], [4], [5]])(
    '일치하는 수에 따라 등수를 반환하는지 테스트',
    (inputs) => {
      const winningCalculator = new WinningCalculator(
        totalWinningNumbers,
        issuedLotto,
      );

      winningCalculator.runCompilingWinner(inputs);

      expect(
        winningCalculator.winnerList.get(
          STATISTICS_STANDARD.matchCountRank.get(inputs),
        ),
      ).toBe(1);
    },
  );

  test.each([
    [[3, true], undefined],
    [[4, true], undefined],
    [[0, false], undefined],
    [[5, true], 1],
    [[5, false], undefined],
  ])(
    '보너스 수의 일치여부를 판별하여 2등을 체크하는지 테스트',
    (inputs, expected) => {
      const winningCalculator = new WinningCalculator(
        totalWinningNumbers,
        issuedLotto,
      );

      const matchCount = inputs[0];
      const isWinningBonus = inputs[1];
      winningCalculator.runCompileBonusWinner(matchCount, isWinningBonus);

      const rankList = STATISTICS_STANDARD.matchCountRank;
      const bonusRank = rankList.get(NUMBER_OPTIONS.bonusName);

      expect(winningCalculator.winnerList.get(bonusRank)).toBe(expected);
    },
  );
});
