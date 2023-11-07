/* eslint-disable */
import Lotto from "../src/Lotto.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("당첨 번호와 로또 번호를 비교한다. - 일반", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const winningNumber = [1, 2, 3, 25, 43, 45];
    const bonusNumber = 5;

    expect(lotto.match(winningNumber, bonusNumber)).toEqual("fifth");
  });

  test("당첨 번호와 로또 번호를 비교한다. - 보너스", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const winningNumber = [1, 2, 3, 4, 5, 45];
    const bonusNumber = 6;

    expect(lotto.match(winningNumber, bonusNumber)).toEqual("second");
  });

  test("로또 번호 반환을 확인한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    expect(lotto.numbers).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
