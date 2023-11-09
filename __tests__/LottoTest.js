import Lotto from "../src/Lotto.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR] 로또 번호는 6개여야 합니다.");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR] 중복된 값이 있습니다.");
  });

  test("당첨번호 확인 테스트", () => {
    const lotto = new Lotto([1,2,3,4,5,6]);
    const winNumbers = [1, 2, 3, 4, 5, 7];
    const bonusNumber = 6
    const expected = Object.freeze({
      main: 5,
      bonus: true,
    })
    const result = lotto.checkWin(winNumbers, bonusNumber);
    expect(result).toEqual(expected);
  })
});
