import Bonus from "../src/Bonus.js";

describe("보너스 클래스 테스트", () => {
  test("보너스 번호의 범위가 1~45 사이의 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus(47, [1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 로또 당첨 번호와 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus(2, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 숫자가 아닌 다른 것이 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus("1g", [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });
});
