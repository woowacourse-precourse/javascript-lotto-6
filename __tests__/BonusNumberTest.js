import * as valid from "../src/Validation.js";

describe("보너스 번호 테스트", () => {
  test("보너스 번호가 숫자가 아닐 경우 예외가 발생한다.", () => {
    expect(() => {
      valid.bonusNumberCheck([1, 2, 3, 4, 5, 6], "z");
    }).toThrow("[ERROR]");
  });

  test("보너스 번호와 당첨 번호가 겹치면 예외가 발생한다.", () => {
    expect(() => {
      valid.bonusNumberCheck([1, 2, 3, 4, 5, 6], "1");
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 1~45 범위가 아닐 경우 예외가 발생한다.", () => {
    expect(() => {
      valid.bonusNumberCheck([1, 2, 3, 4, 5, 6], "99");
    }).toThrow("[ERROR]");
  });
});
