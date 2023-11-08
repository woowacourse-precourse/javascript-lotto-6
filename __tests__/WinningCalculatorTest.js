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

  const winningCalculator = new WinningCalculator(
    totalWinningNumbers,
    issuedLotto,
  );

  test.each([
    [[1, 2, 3, 4, 5, 6], 6],
    [[1, 2, 3, 4, 5, 7], 5],
    [[1, 2, 3, 4, 7, 8], 4],
  ])(
    '당첨 번호와 일치하는 수의 개수만큼 반환해야 한다.',
    (inputs, expected) => {
      const matchedCount = winningCalculator.calculateMatchNumbers(
        totalWinningNumbers.get(NUMBER_OPTIONS.winningName),
        inputs,
      );

      expect(matchedCount).toBe(expected);
    },
  );
});
