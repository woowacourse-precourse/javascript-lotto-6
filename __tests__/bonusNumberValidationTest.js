import bonusNumberValidation from "../src/validator/bonusNumberValidation.js";

describe("보너스 숫자 테스트", () => {
  test("보너스 숫자가 1 ~ 45 사이의 수가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new bonusNumberValidation(['50']);
    }).toThrow("[ERROR]");
  });
});