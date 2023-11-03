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

  test("로또 정보를 가져왔을 때 정렬된 로또 번호의 배열을 반환한다.", () => {
    const lotto = new Lotto([6, 2, 3, 5, 4, 1]);

    expect(lotto.getInformation()).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
