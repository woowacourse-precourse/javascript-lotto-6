import BonusLotto from "../src/BonusLotto.js";

describe("보너스 로또 클래스 테스트", () => {
  test("보너스 번호를 입력받지 못한 경우 예외가 발생한다.", () => {
    expect(() => {
      new BonusLotto('', [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호에 문자가 포함된 경우 예외가 발생한다.", () => {
    expect(() => {
      new BonusLotto("3a", [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test.each([
    0,
    46,
  ])("보너스 번호가 숫자 범위를 벗어난 경우 예외가 발생한다.", (input) => {
    expect(() => {
      new BonusLotto(input, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });
  
  test("당첨 번호에 속한 숫자를 뽑은 경우 예외가 발생한다.", () => {
    expect(() => {
      new BonusLotto(3, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });
});