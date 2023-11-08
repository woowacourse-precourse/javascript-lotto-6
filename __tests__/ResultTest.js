import Result from "../src/Result.js";

describe("Result 클래스 테스트", () => {
  test("보너스 번호가 당첨 번호와 중복될 경우 예외가 발생한다.", () => {
    expect(() => {
      const RESULT = new Result();
      RESULT.winningNumber = [1, 2, 3, 4, 5, 6];
      RESULT.bonusNumber = 1;
    }).toThrow("[ERROR]");
  });
});
