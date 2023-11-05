import LottoPrizeManager from "../src/LottoPrizeManager.js";
import PRIZE from "../src/constant/PRIZE.js";

describe("LottoPrizeManager 클래스 테스트", () => {
  test("당첨 번호가 6개가 아니라면 예외 처리한다", () => {
    const winningNumberArray = [1, 2, 3, 4, 5, 6, 7];
    expect(() => {
      new LottoPrizeManager(winningNumberArray);
    }).toThrow(PRIZE.ERROR.WINNING_NUMBER_SIZE);
  });
});
