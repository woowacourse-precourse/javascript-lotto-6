import BonusNumber from "../src/BonusNumber.js";

describe("보너스 번호 클래스 테스트", () => {
  test("보너스 번호의 범위가 1~45에 있지 않으면 예외가 발생한다.", () => {
    expect(() => {
      new BonusNumber(100);
    }).toThrow("[ERROR]");
  });

  test("구입 금액이 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new BonusNumber("lott0");
    }).toThrow("[ERROR]");
  });
});
