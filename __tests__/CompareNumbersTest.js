import Lotto from "../src/Lotto.js";

describe("로또 당첨 번호 비교 테스트", () => {
  test("3개 미만 일치하는 경우", async () => {
    // given
    const LOTTO_NUMBERS = [1, 2, 3, 4, 5, 6];

    const WINNING_NUMBERS = [7, 8, 9, 10, 11, 12];
    const BONUS_NUMBERS = [13];

    const RESULT = { winningCount: 0, bonusCount: 0 };
    // when

    const lotto = new Lotto(LOTTO_NUMBERS);
    const compareResult = lotto.compareNumbers(WINNING_NUMBERS, BONUS_NUMBERS);
    expect(compareResult).toEqual(RESULT);
  });

  test("3개 일치하는 경우", async () => {
    // given
    const LOTTO_NUMBERS = [1, 2, 3, 4, 5, 6];

    const WINNING_NUMBERS = [1, 2, 3, 7, 8, 9];
    const BONUS_NUMBERS = [10];

    const RESULT = { winningCount: 3, bonusCount: 0 };
    // when

    const lotto = new Lotto(LOTTO_NUMBERS);
    const compareResult = lotto.compareNumbers(WINNING_NUMBERS, BONUS_NUMBERS);
    expect(compareResult).toEqual(RESULT);
  });

  test("4개 일치하는 경우", async () => {
    // given
    const LOTTO_NUMBERS = [1, 2, 3, 4, 5, 6];

    const WINNING_NUMBERS = [1, 2, 3, 4, 7, 8];
    const BONUS_NUMBERS = [9];

    const RESULT = { winningCount: 4, bonusCount: 0 };
    // when

    const lotto = new Lotto(LOTTO_NUMBERS);
    const compareResult = lotto.compareNumbers(WINNING_NUMBERS, BONUS_NUMBERS);
    expect(compareResult).toEqual(RESULT);
  });

  test("5개 일치하는 경우", async () => {
    // given
    const LOTTO_NUMBERS = [1, 2, 3, 4, 5, 6];

    const WINNING_NUMBERS = [1, 2, 3, 4, 5, 7];
    const BONUS_NUMBERS = [8];

    const RESULT = { winningCount: 5, bonusCount: 0 };
    // when

    const lotto = new Lotto(LOTTO_NUMBERS);
    const compareResult = lotto.compareNumbers(WINNING_NUMBERS, BONUS_NUMBERS);
    expect(compareResult).toEqual(RESULT);
  });

  test("5개 + 보너스 일치하는 경우", async () => {
    // given
    const LOTTO_NUMBERS = [1, 2, 3, 4, 5, 6];

    const WINNING_NUMBERS = [1, 2, 3, 4, 5, 7];
    const BONUS_NUMBERS = 6;

    const RESULT = { winningCount: 5, bonusCount: 1 };
    // when

    const lotto = new Lotto(LOTTO_NUMBERS);
    const compareResult = lotto.compareNumbers(WINNING_NUMBERS, BONUS_NUMBERS);
    expect(compareResult).toEqual(RESULT);
  });

  test("6개 일치하는 경우", async () => {
    // given
    const LOTTO_NUMBERS = [1, 2, 3, 4, 5, 6];

    const WINNING_NUMBERS = [1, 2, 3, 4, 5, 6];
    const BONUS_NUMBERS = 7;

    const RESULT = { winningCount: 6, bonusCount: 0 };
    // when

    const lotto = new Lotto(LOTTO_NUMBERS);
    const compareResult = lotto.compareNumbers(WINNING_NUMBERS, BONUS_NUMBERS);
    expect(compareResult).toEqual(RESULT);
  });
});
