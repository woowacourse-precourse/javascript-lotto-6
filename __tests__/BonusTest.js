import Bonus from "../src/Bonus";
import { ERROR } from "../src/constants/message";

describe("Bonus 클래스 테스트", () => {
  test("보너스 번호에 숫자가 아닌 값이 입력되면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus("a", [1, 2, 3, 4, 5, 6]);
    }).toThrow(ERROR.NOT_ONLY_NUMBER);
  });

  test("보너스 번호가 1 이상 45 이하가 아니라면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus("46", [1, 2, 3, 4, 5, 6]);
    }).toThrow(ERROR.INVALID_RANGE);
  });

  test("보너스 번호에 당첨 번호와 중복되는 값이 입력되면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus("1", [1, 2, 3, 4, 5, 6]);
    }).toThrow(ERROR.ALREADY_EXIST);
  });

  test("getter를 통해 유효한 보너스 번호를 얻는다.", () => {
    const bonus = new Bonus("7", [1, 2, 3, 4, 5, 6]);
    expect(bonus.getBonus()).toBe(7);
  });
});
