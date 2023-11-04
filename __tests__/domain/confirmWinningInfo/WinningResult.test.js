/* eslint-disable max-lines-per-function */
import winningResult from '../../src/domain/confirmWinningInfo/winningResult';

const PRIZES = {
  '1st': winningResult.constants.prizeInfo['1st'],
  '2nd': winningResult.constants.prizeInfo['2nd'],
  '3rd': winningResult.constants.prizeInfo['3rd'],
  '4th': winningResult.constants.prizeInfo['4th'],
  '5th': winningResult.constants.prizeInfo['5th'],
};

describe('당첨 결과 테스트', () => {
  test.each([
    {
      input: [
        { matchCount: 6, hasBonusNumber: false },
        { matchCount: 5, hasBonusNumber: true },
        { matchCount: 5, hasBonusNumber: false },
        { matchCount: 4, hasBonusNumber: false },
        { matchCount: 3, hasBonusNumber: false },
      ],
      output: {
        prize: PRIZES['1st'] + PRIZES['2nd'] + PRIZES['3rd'] + PRIZES['4th'] + PRIZES['5th'],
        rewardInfo: { '1st': 1, '2nd': 1, '3rd': 1, '4th': 1, '5th': 1 },
      },
    },
    {
      input: [
        { matchCount: 6, hasBonusNumber: false },
        { matchCount: 5, hasBonusNumber: true },
        { matchCount: 4, hasBonusNumber: false },
        { matchCount: 3, hasBonusNumber: false },
        { matchCount: 2, hasBonusNumber: false },
      ],
      output: {
        prize: PRIZES['1st'] + PRIZES['2nd'] + PRIZES['4th'] + PRIZES['5th'],
        rewardInfo: { '1st': 1, '2nd': 1, '4th': 1, '5th': 1 },
      },
    },
    {
      input: [{ matchCount: 0, hasBonusNumber: false }],
      output: {
        prize: 0,
        rewardInfo: null,
      },
    },
  ])(
    '입력 값에 대한 당첨 결과로 총 상금은 $output.prize원 이며, 당첨 정보는 $output.rewardInfo 이다.',
    ({ input, output }) => {
      // given - when
      const result = winningResult.createWinningResult(input);
      // then
      expect(result.prize).toBe(output.prize);
      expect(result.rewardInfo).toStrictEqual(output.rewardInfo);
    },
  );
});
