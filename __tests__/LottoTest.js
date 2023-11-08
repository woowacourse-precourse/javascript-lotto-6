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

  test("로또 번호의 개수가 6개보다 적으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 1보다 작으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 0]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 45보다 크면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 자연수가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 2.5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호와 당첨 번호를 입력하면 올바른 결과를 출력한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    lotto.checkResult({ win: [1, 2, 9, 10, 11, 12], bonus: 7 });
    expect(lotto.result).toBe("None");

    lotto.checkResult({ win: [1, 2, 3, 4, 5, 7], bonus: 6 });
    expect(lotto.result).toBe("5개 일치, 보너스 볼 일치 (30,000,000원)");

    lotto.checkResult({ win: [1, 2, 3, 4, 5, 6], bonus: 7 });
    expect(lotto.result).toBe("6개 일치 (2,000,000,000원)");
  });
});
