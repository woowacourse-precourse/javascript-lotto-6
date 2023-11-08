import BonusNumber from "../src/BonusNumber.js";

describe("보너스 번호관련 테스트", () => {
  test("보너스 번호가 0이라면 예외가 발생한다.", () => {
    expect(() => {
      new BonusNumber(0, '1,2,3,4,5,6');
    }).toThrow("[ERROR]");
  });

  test.each([
    ['0a', '1,2,3,4,5,6'],
    ['#$%^', '1,2,3,4,5,6']
  ])("숫자 외의 문자가 포함된다면 예외가 발생한다.", (bonus, winnings) => {
    expect(() => {
      new BonusNumber(bonus, winnings);
    }).toThrow("[ERROR]");
  });

  test.each([
    [-1, '1,2,3,4,5,6'],
    [46, '1,2,3,4,5,6']
  ])("보너스 번호가 1보다 작거나 45보다 크다면 예외가 발생한다.", (bonus, winnings) => {
    expect(() => {
      new BonusNumber(bonus, winnings);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 당첨 번호에 포함되어있다면 예외가 발생한다.", () => {
    expect(() => {
      new BonusNumber(4, '1,2,3,4,5,6');
    }).toThrow("[ERROR]");
  });
});
