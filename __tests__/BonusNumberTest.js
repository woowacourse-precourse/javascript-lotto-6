import BonusNumber from "../src/domain/BonusNumber";

describe("보너스 숫자 클래스 테스트", () => {
  test("보너스 숫자가 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      const bouns_number = new BonusNumber();
      bouns_number.validate("str");
    }).toThrow("[ERROR]");
  });

  test("보너스 숫자가 숫자가 1~45에 포함되지 않으면 예외가 발생한다.", () => {
    expect(() => {
      const bouns_number = new BonusNumber();
      bouns_number.validate(50);
    }).toThrow("[ERROR]");
  });
});
