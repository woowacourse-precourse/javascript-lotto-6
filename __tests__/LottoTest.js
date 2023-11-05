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

  test("로또 당첨 안됨", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.winningCheck([5,6,7,8,9,10],10)).toEqual(0);
  });

  test("로또 5등 당첨", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.winningCheck([1,2,3,7,8,9],10)).toEqual(5000);
  });

  test("로또 4등 당첨", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.winningCheck([1,2,3,4,8,9],10)).toEqual(50000);
  });

  test("로또 3등 당첨", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.winningCheck([1,2,3,4,5,9],10)).toEqual(1500000);
  });

  test("로또 2등 당첨", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.winningCheck([1,2,3,4,6,10],10)).toEqual(30000000);
  });

  test("로또 1등 당첨", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.winningCheck([1,2,3,4,5,6],10)).toEqual(2000000000);
  });
});
