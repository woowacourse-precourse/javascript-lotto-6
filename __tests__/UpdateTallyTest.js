import updateTally from '../src/process/updateTally.js';

describe('통계 업데이트 기능 테스트', () => {
  test('통계 업데이트 기능', () => {
    // given
    const tally = {
      match3: 0,
      match4: 0,
      match5: 0,
      match5PlusBonus: 1,
      match6: 0,
    };
    const match = 5;
    const bonusMatch = 1;

    // when
    const output = updateTally(tally, match, bonusMatch);

    // then
    expect(output).toEqual({
      match3: 0,
      match4: 0,
      match5: 0,
      match5PlusBonus: 2,
      match6: 0,
    });
  });
});
