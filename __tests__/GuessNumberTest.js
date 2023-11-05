import * as valid from "../src/Validation.js";

describe("당첨 번호 테스트", () => {
  test("당첨 번호가 6개가 아닐 경우 예외가 발생한다.", () => {
    expect(() => {
      valid.guessNumberCheck([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test("당첨 번호가 숫자가 아닐 경우 예외가 발생한다.", () => {
    expect(() => {
      valid.guessNumberCheck(["a", 2, "b", 4, "c", 6]);
    }).toThrow("[ERROR]");
  });

  test("당첨 번호에 중복이 있는 경우 예외가 발생한다.", () => {
    expect(() => {
      valid.guessNumberCheck([1, 1, 2, 2, 3, 3]);
    }).toThrow("[ERROR]");
  });

  test("당첨 번호가 1~45범위가 아닐 경우 예외가 발생한다.", () => {
    expect(() => {
      valid.guessNumberCheck([1, 2, 3, 4, 5, 99]);
    }).toThrow("[ERROR]");
  });
});
