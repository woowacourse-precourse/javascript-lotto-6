import { ERROR_MESSAGE } from "../src/constants/errorMessage.js";
import Bonus from "../src/models/Bonus.js";

describe("Bonus 클래스 테스트", () => {
  test("보너스 번호가 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus('a');
    }).toThrow(ERROR_MESSAGE.not_number);
  });

  test("보너스 번호가 1부터 45까지의 범위에 있지 않으면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus(46);
    }).toThrow(ERROR_MESSAGE.not_in_range);
  });

  test("정상적인 입력이면 에러가 발생하지 않는다.", () => {
    expect(() => {
      new Bonus(16);
    }).not.toThrow();
  });
});