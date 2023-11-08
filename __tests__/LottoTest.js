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

  test("로또 번호에 숫자가 아닌 값이 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, "육"]);
    }).toThrow("[ERROR]");

    expect(() => {
      new Lotto([1, 2, 3, 4, 5, ","]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 1에서 45 사이가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([0, 1, 2, 3, 4, 5]);
    }).toThrow("[ERROR]");

    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow("[ERROR]");

    expect(() => {
      new Lotto([1, 2, 3, 4, 5, -1]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 빈 값을 반환하면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, ""]);
    }).toThrow("[ERROR]");

    expect(() => {
      new Lotto([1, 2, 3, 4, 5, " "]);
    }).toThrow("[ERROR]");
  });
});
