import Lotto from "../src/domain/Lotto.js";
import WinningLotto from "../src/domain/WinningLotto.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 숫자가 아닌 값이 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, "a"]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 로또 번호와 중복이면 예외가 발생한다.", () => {
    expect(() => {
      new WinningLotto([1, 2, 3, 4, 5, 6]).getBonus(6);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 로또 번호의 범위가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new WinningLotto([1, 2, 3, 4, 5, 6]).getBonus(46);
    }).toThrow("[ERROR]");
  });
});
