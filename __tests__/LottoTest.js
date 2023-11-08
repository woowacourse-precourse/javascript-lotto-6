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
  test("로또 번호 중 하나가 가능한 숫자 범위를 벗어나면 예외가 발생한다.", () => {
    expect(() => new Lotto([1, 2, 3, 4, 5, 200])).toThrow("[ERROR]");
    expect(() => new Lotto([1, 2, 3, 4, 5, 0])).toThrow("[ERROR]");
  });

  test("로또 객체의 has 메소드가 번호 포함 여부를 올바르게 반환한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    expect(lotto.has(2)).toBe(true);
    expect(lotto.has(10)).toBe(false);
  });

  test("로또 번호에 숫자가 아닌 값이 포함되어 있는 경우 예외가 발생한다", () => {
    expect(() => new Lotto([1, 2, 3, 4, 5, "6"])).toThrow("[ERROR]");
  });
});
