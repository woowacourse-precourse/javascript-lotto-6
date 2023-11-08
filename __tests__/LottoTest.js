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
  test("로또 번호와 보너스 번호가 일치할 때 결과가 올바르게 반환된다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const numbers = [1, 2, 3, 4, 5, 7]; // 보너스 번호가 7로 가정
    expect(lotto.getCorrectNumberCount(numbers, 7)).toEqual([5, 0]);
  });

  test("로또 번호와 보너스 번호가 모두 일치하지 않을 때 결과가 올바르게 반환된다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const numbers = [7, 8, 9, 10, 11, 12]; // 아무 번호와도 일치하지 않는 것으로 가정
    expect(lotto.getCorrectNumberCount(numbers, 13)).toEqual([0, 0]);
  });
});
