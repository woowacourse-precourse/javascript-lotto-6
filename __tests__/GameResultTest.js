import GameResult from "../src/GameResult";
import GameResultDisplayer from "../src/GameResultDisplayer";
import Lotto from "../src/Lotto";

describe("GameResult 계산", () => {
  test("게임 결과 계산", () => {
    // given
    const LOTTOS = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([3, 4, 5, 6, 7, 8]),
    ];

    const gameResult = new GameResult(LOTTOS, [1, 2, 3, 4, 5, 6], 8);

    //then
    expect(gameResult.result).toEqual({ 3: 0, 4: 1, 5: 0, "5+1": 0, 6: 1 });
  });

  test("보너스번호 5+1", () => {
    // given
    const LOTTOS = [
      new Lotto([1, 2, 3, 4, 5, 8]),
      new Lotto([3, 4, 5, 6, 7, 8]),
    ];

    const gameResult = new GameResult(LOTTOS, [1, 2, 3, 4, 5, 6], 8);

    //then
    expect(gameResult.result).toEqual({ 3: 0, 4: 1, 5: 0, "5+1": 1, 6: 0 });
  });
});
