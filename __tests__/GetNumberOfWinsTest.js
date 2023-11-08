import App from "../src/App.js";
import Lotto from "../src/Lotto.js";

describe("데이터 처리 테스트", () => {
  test("승리 저장 테스트", async () => {
    const MOCK_APP = new App();
    const MOCK_ARRAY_OF_GAMES = [new Lotto([1, 2, 3, 4, 5, 6])];
    const MOCK_WINNING_NUMBER = [1, 2, 3, 41, 42, 43];
    const MOCK_BONUS_NUMBER = 44;
    const GET_NUMBER_OF_WINS_TEST = MOCK_APP.getNumberOfWins(
      MOCK_ARRAY_OF_GAMES,
      MOCK_WINNING_NUMBER,
      MOCK_BONUS_NUMBER
    );
    expect(GET_NUMBER_OF_WINS_TEST).toEqual({
      3: 1,
      4: 0,
      5: 0,
      6: 0,
      bonus: 0,
    });
  });
  test("승리 저장 테스트(보너스)", async () => {
    const MOCK_APP = new App();
    const MOCK_ARRAY_OF_GAMES = [new Lotto([1, 2, 3, 4, 5, 6])];
    const MOCK_WINNING_NUMBER = [1, 2, 3, 4, 5, 43];
    const MOCK_BONUS_NUMBER = 6;
    const GET_NUMBER_OF_WINS_BONUS_TEST = MOCK_APP.getNumberOfWins(
      MOCK_ARRAY_OF_GAMES,
      MOCK_WINNING_NUMBER,
      MOCK_BONUS_NUMBER
    );
    expect(GET_NUMBER_OF_WINS_BONUS_TEST).toEqual({
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      bonus: 1,
    });
  });
});
