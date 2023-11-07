import Bonus from "../src/Bonus";

describe("보너스 클래스 테스트", () => {
  test("보너스 번호가 1 ~ 45 사이의 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus(46, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 당첨 번호와 중복되면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus(1, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });
});
