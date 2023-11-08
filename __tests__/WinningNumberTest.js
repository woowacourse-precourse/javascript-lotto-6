import WinningNumber from "../src/WinningNumber.js";
import PRIZE from "../src/constant/PRIZE.js";

describe("당첨 번호 클래스 테스트", () => {
  test.each([
    ["공백 있음", "1, 2, 3, 4,5,6"],
    ["다른 문자 있음", "1,2,3,4,5,12s"],
  ])(
    "당첨 번호는 공백 없이 숫자와 쉼표로만 이루어지지 않으면 예외 처리한다 - %s",
    (testName, winningNumberString) => {
      expect(() => {
        new WinningNumber(winningNumberString);
      }).toThrow(PRIZE.ERROR.WINNING_NUMBER_STRING_TYPE);
    }
  );

  test("당첨 번호가 6개가 아니라면 예외 처리한다", () => {
    const winningNumberString = "1,2,3,4,5,6,7";
    expect(() => {
      new WinningNumber(winningNumberString);
    }).toThrow(PRIZE.ERROR.WINNING_NUMBER_SIZE);
  });

  test.each([
    ["숫자 범위 초과", "1,2,3,4,5,80"],
    ["0으로 시작", "1,2,3,4,5,06"],
  ])(
    "당첨 번호가 모두 로또 숫자 범위 내의 숫자가 아니라면 예외 처리한다 - %s",
    (testName, winningNumberString) => {
      expect(() => {
        new WinningNumber(winningNumberString);
      }).toThrow(PRIZE.ERROR.WINING_NUMBER_RANGE_NUMBER);
    }
  );

  test("당첨 번호가 중복되면 예외 처리한다", () => {
    const winningNumberString = "1,1,23,4,5,6";
    expect(() => {
      new WinningNumber(winningNumberString);
    }).toThrow(PRIZE.ERROR.WINING_NUMBER_DUPLICATE);
  });

  test("당첨 번호를 배열로 반환한다", () => {
    const winningNumberString = "1,2,3,4,5,6";
    const result = new WinningNumber(winningNumberString).numberArray;
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
