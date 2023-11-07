import Lottos from "../src/Lottos.js";

describe("로또스(구매금액) 클래스 테스트", () => {
  test.each([
    [['trytest']],
    [[false]]
  ])("입력한 금액이 숫자가 아니면 예외가 발생한다.", (input) => {
    expect(() => {
      new Lottos(input);
    }).toThrow("[ERROR]");
  });

  test.each([
    [[20]],
    [[10030]]
  ])
  ("입력한 금액이 1000원 단위가 아니면 예외가 발생한다.", (input) => {
    expect(() => {
      new Lottos(input);
    }).toThrow("[ERROR]");
  });

});