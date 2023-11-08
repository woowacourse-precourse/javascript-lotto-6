import Rank from '../src/Rank.js';

describe('Rank 클래스 테스트', () => {
  test('2등에 당첨됐다면 2등 당첨금을 받는다.', () => {
    // given
    const SECOND_RANK = {
      NUMBERS: 5,
      BONUS: true,
      PRIZE: 30000000,
    };

    // when
    const rank = new Rank();
    rank.choose(SECOND_RANK.NUMBERS, SECOND_RANK.BONUS);

    // then
    expect(rank.findTotalWinnings()).toBe(SECOND_RANK.PRIZE);
  });

  test('1등과 3등에 동시에 당첨됐다면 1등 당첨금과 3등 당첨금을 합한 금액을 받는다.', () => {
    // given
    const FIRST_RANK = {
      NUMBERS: 6,
      BONUS: false,
      PRIZE: 2000000000,
    };

    const THIRD_RANK = {
      NUMBERS: 5,
      BONUS: false,
      PRIZE: 1500000,
    };

    // when
    const rank = new Rank();
    rank.choose(FIRST_RANK.NUMBERS, FIRST_RANK.BONUS);
    rank.choose(THIRD_RANK.NUMBERS, THIRD_RANK.BONUS);

    // then
    expect(rank.findTotalWinnings()).toBe(FIRST_RANK.PRIZE + THIRD_RANK.PRIZE);
  });

  test('4등에 3개 당첨됐다면 4등 당첨금의 3배 만큼의 금액을 받는다.', () => {
    // given
    const FOURTH_RANK = {
      NUMBERS: 4,
      BONUS: false,
      PRIZE: 50000,
    };

    // when
    const rank = new Rank();
    rank.choose(FOURTH_RANK.NUMBERS, FOURTH_RANK.BONUS);
    rank.choose(FOURTH_RANK.NUMBERS, FOURTH_RANK.BONUS);
    rank.choose(FOURTH_RANK.NUMBERS, FOURTH_RANK.BONUS);

    // then
    expect(rank.findTotalWinnings()).toBe(FOURTH_RANK.PRIZE * 3);
  });

  test('4등에 1개, 5등에 2개 당첨됐다면 4등 당첨금과 5등 당첨금 2배를 합한 금액을 받는다.', () => {
    // given
    const FOURTH_RANK = {
      NUMBERS: 4,
      BONUS: false,
      PRIZE: 50000,
    };

    const FIFTH_RANK = {
      NUMBERS: 3,
      BONUS: false,
      PRIZE: 5000,
    };

    // when
    const rank = new Rank();
    rank.choose(FOURTH_RANK.NUMBERS, FOURTH_RANK.BONUS);
    rank.choose(FIFTH_RANK.NUMBERS, FIFTH_RANK.BONUS);
    rank.choose(FIFTH_RANK.NUMBERS, FIFTH_RANK.BONUS);

    // then
    expect(rank.findTotalWinnings()).toBe(
      FOURTH_RANK.PRIZE + FIFTH_RANK.PRIZE * 2
    );
  });
});
