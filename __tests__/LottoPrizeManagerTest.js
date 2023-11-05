import LottoPrizeManager from "../src/LottoPrizeManager.js";
import PRIZE from "../src/constant/PRIZE.js";
가;
const correctWinningNumberArray = ["1", "2", "3", "4", "5", "6"];

describe("LottoPrizeManager 클래스 테스트", () => {
  test("당첨 번호가 6개가 아니라면 예외 처리한다", () => {
    const winningNumberArray = [1, 2, 3, 4, 5, 6, 7];
    expect(() => {
      new LottoPrizeManager(winningNumberArray);
    }).toThrow(PRIZE.ERROR.WINNING_NUMBER_SIZE);
  });

  test.each([
    ["숫자 범위 초과", ["1", "2", "3", "4", "5", "80"]],
    ["숫자가 아님", ["1", "2", "3", "4", "5", "12s"]],
    ["0으로 시작", ["1", "2", "3", "4", "5", "06"]],
  ])(
    "당첨 번호가 모두 로또 숫자 범위 내의 숫자가 아니라면 예외 처리한다 - %s",
    (testName, winningNumberArray) => {
      expect(() => {
        new LottoPrizeManager(winningNumberArray);
      }).toThrow(PRIZE.ERROR.WINING_NUMBER_RANGE_NUMBER);
    }
  );

  test("당첨 번호가 중복되면 예외 처리한다", () => {
    const winningNumberArray = ["1", "1", "2", "3", "4", "5"];
    expect(() => {
      new LottoPrizeManager(winningNumberArray);
    }).toThrow(PRIZE.ERROR.WINING_NUMBER_DUPLICATE);
  });

  test.each([["100"], ["123s"], ["015"]])(
    "보너스 번호가 로또 숫자 범위 내의 숫자가 아니라면 예외 처리한다 - %s",
    (bonusNumber) => {
      expect(() => {
        new LottoPrizeManager(correctWinningNumberArray, bonusNumber);
      }).toThrow(PRIZE.ERROR.BONUS_NUMBER_RANGE_NUMBER);
    }
  );
});
