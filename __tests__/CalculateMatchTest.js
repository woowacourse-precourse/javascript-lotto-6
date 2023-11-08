import calculateMatch from '../src/process/calculateMatch.js';

describe('숫자 일치 계산 기능 테스트', () => {
  test('숫자 일치 계산', () => {
    // given
    const tally = {
      match3: 0,
      match4: 0,
      match5: 0,
      match5PlusBonus: 0,
      match6: 0,
    };
    const lottosList = [
      [1, 2, 3, 4, 5, 6],
      [34, 12, 31, 22, 11, 43],
    ];
    const winningNumbers = [1, 2, 3, 4, 5, 34];
    const bonusNumber = 6;

    // when
    const output = calculateMatch(tally, lottosList, winningNumbers, bonusNumber);

    // then
    expect(output).toEqual({
      match3: 0,
      match4: 0,
      match5: 0,
      match5PlusBonus: 1,
      match6: 0,
    });
  });
});
