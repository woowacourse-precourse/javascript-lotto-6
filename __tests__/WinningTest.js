import WinningController from "../src/WinningController.js";
import Lotto from "../src/Lotto.js";

describe("당첨 계산 테스트", () => {
  test("로또 번호와 당첨 번호가 몇 개가 맞는지 계산한다.", () => {
    // given
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const lottos = [
      new Lotto([7, 8, 9, 10, 11, 12]),
      new Lotto([1, 7, 8, 9, 10, 11]),
      new Lotto([1, 2, 7, 8, 9, 10]),
      new Lotto([1, 2, 3, 7, 8, 9]),
      new Lotto([1, 2, 3, 4, 7, 8]),
      new Lotto([1, 2, 3, 4, 5, 7]),
      new Lotto([1, 2, 3, 4, 5, 6]),
    ];
    const results = [0, 1, 2, 3, 4, 5, 6];

    // when
    const answers = lottos.map((lotto) => WinningController.countWinning({ lotto, winningNumbers }));

    // then
    expect(answers).toEqual(results);
  });

  test("로또 번호와 보너스 번호가 일치하는지 확인한다.", () => {
    // given
    const bonusNumbers = [1, 2, 3, 4, 5, 6, 7];
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const results = [true, true, true, true, true, true, false];

    // when
    const answers = bonusNumbers.map((bonusNumber) => WinningController.checkBonus({ lotto, bonusNumber }));

    // then
    expect(answers).toEqual(results);
  });

  test("당첨 번호 갯수와 보너스 번호 일치 여부를 통해 등수를 계산한다.", () => {
    // given
    const matchResults = [
      { winning: 6, bonus: false },
      { winning: 5, bonus: true },
      { winning: 5, bonus: false },
      { winning: 4, bonus: false },
      { winning: 3, bonus: false },
      { winning: 2, bonus: false },
    ];
    const ranks = [0, 1, 2, 3, 4, 5];

    // when
    const answers = matchResults.map((matchResult) => WinningController.toRank(matchResult));

    // then
    expect(answers).toEqual(ranks);
  });

  test("당첨 순위를 개수를 계산한다.", () => {
    // given
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const lottos = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([1, 2, 3, 4, 5, 7]),
      new Lotto([1, 2, 3, 4, 5, 8]),
      new Lotto([1, 2, 3, 4, 7, 8]),
      new Lotto([1, 2, 3, 7, 8, 9]),
      new Lotto([1, 2, 7, 8, 9, 10]),
    ];
    const results = [1, 1, 1, 1, 1, 1];

    // when
    const ranks = WinningController.countRanks({ lottos, winningNumbers, bonusNumber});

    // then
    expect(ranks).toEqual(results);
  });

  test("당첨 수를 통해 총 당첨금을 계산한다.", () => {
    // given
    const ranksList = [
      [1, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 1],
    ];
    const results = [2000000000, 30000000, 1500000, 50000, 5000, 0];

    // when
    const prizeList = ranksList.map(WinningController.calculatePrize);

    // then
    expect(results).toEqual(prizeList);
  });
});
