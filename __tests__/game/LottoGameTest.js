import LottoGame from "../../src/model/LottoGame.js";

describe("LottoGame", () => {
  test("LottoGame 클래스 동작 확인", () => {
    // given
    const userNumbers = [
      [1, 2, 3, 4, 5, 7],
      [7, 8, 9, 10, 11, 12],
      [5, 29, 31, 36, 39, 45],
      [5, 7, 8, 12, 17, 18],
      [3, 8, 9, 10, 41, 45],
      [4, 7, 13, 19, 26, 34],
      [6, 12, 23, 38, 39, 43],
    ];
    const numbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    // when
    const lottoGame = new LottoGame(userNumbers, numbers, bonusNumber);
    const profitability = lottoGame.profitability([0, 1, 0, 0, 0]);

    // then
    expect(profitability).toEqual("428571.4");
  });
});
