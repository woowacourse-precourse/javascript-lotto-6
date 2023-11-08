import Lotto from "../src/Lotto";

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

  test("로또 번호에 문자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 4, 5, 6, NaN]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 0이 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 4, 5, 6, 0]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 음수가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 4, 5, 6, -100]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 1~45이외의 수가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 4, 5, 6, 3000]);
    }).toThrow("[ERROR]");
  });
});
