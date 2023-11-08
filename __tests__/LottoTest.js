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

  // 아래에 추가 테스트 작성 가능
  test("로또 번호에 문자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, "a", 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 45가 넘는 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 111, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 0 이하의 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, -2, 3, 4, 11, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 등수 테스트", () => {
    const rank = new Lotto([1, 2, 3, 4, 11, 5]).getRank([1, 2, 3, 4, 11, 5], 7);
    expect(rank).toBe(1);
  });
});
