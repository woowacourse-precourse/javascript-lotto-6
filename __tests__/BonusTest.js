import Bonus from "../src/model/Bonus";

describe("보너스 번호 클래스 테스트", () => {
  test("보너스 번호가 한 개가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus([1, 2], [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
    expect(() => {
      new Bonus([], [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });
  test("보너스 번호가 숫자가 아니라면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus(["가"], [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
    expect(() => {
      new Bonus([NaN], [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
    expect(() => {
      new Bonus([undefined], [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });
  test("보너스 번호가 1부터 45까지 수가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus([0], [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
    expect(() => {
      new Bonus([46], [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });
  test("보너스 번호가 당첨 번호에 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus([1], [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });
});
