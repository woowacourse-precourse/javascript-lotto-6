import BonusNumber from "../src/model/BonusNumber";

describe("보너스 번호 클래스 테스트", () => {
  test("보너스 번호가 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new BonusNumber("a", [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 1보다 작으면 예외가 발생한다.", () => {
    expect(() => {
      new BonusNumber(0, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 45보다 크면 예외가 발생한다.", () => {
    expect(() => {
      new BonusNumber(46, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 로또 번호와 중복되면 예외가 발생한다.", () => {
    expect(() => {
      new BonusNumber(6, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });
});
