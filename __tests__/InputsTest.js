import Inputs from "../src/Inputs.js";

describe("Inputs 클래스 테스트", () => {
  test("로또 구입 금액이 1,000원 단위가 아니면 예외가 발생한다.", () => {
    const inputs = new Inputs();
    expect(() => {
      inputs.validPrice(1500);
    }).toThrow("[ERROR]");
  });

  test("로또 구입 금액이 숫자가 아닌 문자나 공백이면 예외가 발생한다.", () => {
    const inputs = new Inputs();
    expect(() => {
      inputs.validPrice("천원");
    }).toThrow("[ERROR]");
  });

  test("로또 구입 금액이 천 원보다 적을 경우 예외가 발생한다.", () => {
    const inputs = new Inputs();
    expect(() => {
      inputs.validPrice(-1000);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 1과 45 사이의 정수가 아니면 예외가 발생한다.", () => {
    const inputs = new Inputs();
    expect(() => {
      inputs.validBonusNumber(46);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 숫자가 아닌 문자나 공백이면 예외가 발생한다.", () => {
    const inputs = new Inputs();
    expect(() => {
      inputs.validBonusNumber("");
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 당첨 번호와 중복되면 예외가 발생한다.", () => {
    const inputs = new Inputs();
    expect(() => {
      inputs.validBonusNumber(5, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });
});
