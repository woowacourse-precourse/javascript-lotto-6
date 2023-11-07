import { Validator } from "../../src/utils/Validator.js";

describe("로또 번호 예외 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      Validator.isLotteryNumber([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      Validator.isLotteryNumber([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 1~45 외의 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      Validator.isLotteryNumber([0, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 숫자가 아닌게 있다면 예외가 발생한다", () => {
    expect(() => {
      Validator.isLotteryNumber([NaN, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });
});
