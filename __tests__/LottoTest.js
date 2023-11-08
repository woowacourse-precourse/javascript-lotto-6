import Lotto from "../src/Lotto.js";

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

  test("로또 번호에 숫자가 아닌 문자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto(["100dj", 2, 3, 4, "asd", "3we"]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호의 범위가 1~45가 아니라면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([80, 90, 50, 1, 2, 3]);
    }).toThrow("[ERROR]");
  });
});
