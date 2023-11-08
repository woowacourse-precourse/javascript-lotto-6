import { winningNumberLength, duplicate } from "../src/validator/winningNumberValidation.js";

describe("당첨 번호 테스트", () => {
  test("당첨 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new winningNumberLength([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test("당첨 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new duplicate([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });
});