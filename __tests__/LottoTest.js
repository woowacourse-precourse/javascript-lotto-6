import Lotto from "../src/domain/Lotto.js";

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

  test("로또 결과 계산 메서드 테스트", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    lotto.calculateResult([1, 2, 3, 4, 5, 6], 7);
    expect(lotto.judgeResult()).toBe(1);

    lotto.calculateResult([1, 2, 3, 4, 5, 7], 6);
    expect(lotto.judgeResult()).toBe(2);

    lotto.calculateResult([1, 2, 3, 4, 5, 7], 8);
    expect(lotto.judgeResult()).toBe(3);

    lotto.calculateResult([1, 2, 3, 4, 8, 9], 10);
    expect(lotto.judgeResult()).toBe(4);

    lotto.calculateResult([1, 2, 3, 11, 12, 13], 14);
    expect(lotto.judgeResult()).toBe(5);

    lotto.calculateResult([15, 16, 17, 18, 19, 20], 21);
    expect(lotto.judgeResult()).toBe(0);
  });
});