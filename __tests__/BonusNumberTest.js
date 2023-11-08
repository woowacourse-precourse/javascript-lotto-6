import Lotto from "../src/Lotto.js";
import GetBonusNumber from "../src/GetBonusNumber.js";

describe("보너스 번호 클래스 테스트", () => {
  test("보너스 번호가 당첨 번호와 같으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6]);
      new GetBonusNumber(6);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 숫자가 아닐 경우 예외가 발생한다.", () => {
    expect(() => {
      new GetBonusNumber("abc");
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 1~45의 범위 밖일 경우 예외가 발생한다.", () => {
    expect(() => {
      new GetBonusNumber(46);
    }).toThrow("[ERROR]");
  });
});
