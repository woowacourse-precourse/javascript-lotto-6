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

  test("로또번호 반환 ", () => {
    const input = [1, 2, 3, 4, 5, 6];
    const lotto = new Lotto(input);
    const returnNumbers = lotto.getNumbers();
    expect(returnNumbers).toEqual(input);
  });

  test("당첨번호 비교", () => {
    const input = [1, 2, 3, 4, 5, 6];
    const winNumbers = [1, 2, 4, 6, 8, 10];
    const bonusNumber = 33;
    const expectedResult = {winNumbersCount: 4, isWinBonus: false};
    const lotto = new Lotto(input);
    const result = lotto.getResult(winNumbers, bonusNumber);
    expect(result).toEqual(expectedResult);
  });
});
