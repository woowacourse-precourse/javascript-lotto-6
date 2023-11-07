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
  test("유효한 로또 번호가 주어지면 정상적으로 객체가 생성되어야 한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6]);
    }).not.toThrow();
  });

  test("로또 번호를 올바르게 정렬할 수 있어야 한다.", () => {
    const sortedNumbers = new Lotto.sortNumbers([6, 3, 5, 2, 4, 1]);
    expect(sortedNumbers).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("로또 번호와 당첨 번호가 일치하는 숫자의 개수를 반환해야 한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const winningNumbers = [1, 2, 3, 7, 8, 9];
    const count = lotto.winningNumbersCount(winningNumbers);
    expect(count).toBe(3);
  });

  test("로또 번호와 보너스 번호가 중복하지 않아야 한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const bonusNumber = 7;
    const hasBonusMatch = lotto.bonusMatch(bonusNumber);
    expect(hasBonusMatch).toBe(false);
  });
});
