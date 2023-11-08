import Lotto from "../src/Lotto.js";
import LOTTO from "../src/constant/LOTTO.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(LOTTO.ERROR.SIZE);
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(LOTTO.ERROR.DUPLICATE);
  });

  test("로또 번호는 오름차순으로 정렬한다.", () => {
    const lotto = new Lotto([6, 5, 4, 3, 2, 1]);
    expect(lotto.numbers).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
