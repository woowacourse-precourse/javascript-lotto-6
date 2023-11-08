import DrawMachine from '../src/components/DrawMachine';

describe('DrawMachine 테스트', () => {
  test(`당첨 통계 테스트`, async () => {
    // given
    const state = {
      tickets: [
        [8, 21, 23, 41, 42, 43],
        [3, 5, 11, 16, 32, 38],
        [7, 11, 16, 35, 36, 44],
        [1, 8, 11, 31, 41, 42],
        [13, 14, 16, 38, 42, 45],
        [7, 11, 30, 40, 42, 43],
        [2, 13, 22, 32, 38, 45],
        [1, 3, 5, 14, 22, 45],
      ],
      myNumbers: [1, 2, 3, 4, 5, 6],
      bonusNumber: 7,
      rank: {
        FIFTH_RANK: 0,
        FOURTH_RANK: 0,
        THIRD_RANK: 0,
        SECOND_RANK: 0,
        FIRST_RANK: 0,
      },
    };

    // when
    const drawMachine = new DrawMachine(state);

    //then
    const ranks = {
      FIFTH_RANK: 1,
      FOURTH_RANK: 0,
      THIRD_RANK: 0,
      SECOND_RANK: 0,
      FIRST_RANK: 0,
    };

    expect(drawMachine.calculateWinningStats()).toEqual(ranks);
  });
});
