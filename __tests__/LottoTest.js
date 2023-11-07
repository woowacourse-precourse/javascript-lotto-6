import Lotto from "../src/modules/Lotto.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호는 오름차순으로 정렬된다.", () => {
    const lotto = new Lotto([3, 6, 4, 1, 2, 5]);
    expect(lotto.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
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
