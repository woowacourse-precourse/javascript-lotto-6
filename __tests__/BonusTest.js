import Bonus from "../src/Bonus";

describe("보너스 클래스 테스트", () => {
  test("보너스 번호가 1 미만이면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus(0);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 45 초과이면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus(46);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus("육");
    }).toThrow("[ERROR]");
  });
});
