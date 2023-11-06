import Lotto from "../src/models/Lotto.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호를 넘기면 로또는 그 번호로 구성되야한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.getNumbers()).toContain(1, 2, 3, 4, 5, 6);
  });

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

  test("로또 번호가 범위를 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 66]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 자연수가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6.7]);
    }).toThrow("[ERROR]");
  });
});
