import winningInfoGeneration from './winningInfoGeneration.module.js';

const PRIZES = {
  '1st': winningInfoGeneration.constants.rankInfo['1st'].prizeAmount,
  '2nd': winningInfoGeneration.constants.rankInfo['2nd'].prizeAmount,
  '3rd': winningInfoGeneration.constants.rankInfo['3rd'].prizeAmount,
  '4th': winningInfoGeneration.constants.rankInfo['4th'].prizeAmount,
  '5th': winningInfoGeneration.constants.rankInfo['5th'].prizeAmount,
};

describe('당첨 정보 생성 테스트', () => {
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
      },
    },
    {
      input: [{ matchCount: 0, hasBonusNumber: false }],
      output: {
        prize: 0,
      },
    },
  ])('입력 값에 대해 벌어 들인 총 상금은 $output.prize원 이다.', ({ input, output }) => {
    // given - when
    const result = winningInfoGeneration.createWinningInfo(input);
    // then
    expect(result.prize).toBe(output.prize);
  });

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
        rankDistributionTable: { '1st': 1, '2nd': 1, '3rd': 1, '4th': 1, '5th': 1 },
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
        rankDistributionTable: { '1st': 1, '2nd': 1, '4th': 1, '5th': 1 },
      },
    },
    {
      input: [{ matchCount: 0, hasBonusNumber: false }],
      output: {
        rankDistributionTable: null,
      },
    },
  ])(
    '입력 값에 대한 랭킹 분포 테이블은 $output.rankDistributionTable과 같다.',
    ({ input, output }) => {
      // given - when
      const result = winningInfoGeneration.createWinningInfo(input);
      // then
      expect(result.rankDistributionTable).toStrictEqual(output.rankDistributionTable);
    },
  );
});
