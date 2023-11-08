import GameResult from "../src/GameResult";
import GameResultDisplayer from "../src/GameResultDisplayer";
import Lotto from "../src/Lotto";

describe("GameResult", () => {
  test("게임 결과 계산", () => {
    // given
    const LOTTOS = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([5, 6, 7, 8, 9, 10]),
    ];

    const gameResult = new GameResult(LOTTOS, [1, 2, 3, 4, 5, 7], 6);
    const gameResultDisplayer = new GameResultDisplayer(gameResult);
    gameResultDisplayer.show();
  });
});
