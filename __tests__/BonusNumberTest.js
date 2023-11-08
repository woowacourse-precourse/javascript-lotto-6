import BonusNumber from "../src/BonusNumber.js";
import PRIZE from "../src/constant/PRIZE.js";

const correctWinningNumberArray = [1, 2, 3, 4, 5, 6];

describe("보너스 번호 클래스 테스트", () => {
  test.each([["100"], ["123s"], ["015"]])(
    "보너스 번호가 로또 숫자 범위 내의 숫자가 아니라면 예외 처리한다 - %s",
    (bonusNumber) => {
      expect(() => {
        new BonusNumber(correctWinningNumberArray, bonusNumber);
      }).toThrow(PRIZE.ERROR.BONUS_NUMBER_RANGE_NUMBER);
    }
  );

  test("보너스 번호가 당첨 번호와 중복되면 예외 처리한다", () => {
    const bonusNumber = "1";
    expect(() => {
      new BonusNumber(correctWinningNumberArray, bonusNumber);
    }).toThrow(PRIZE.ERROR.BONUS_NUMBER_DUPLICATE);
  });
});
