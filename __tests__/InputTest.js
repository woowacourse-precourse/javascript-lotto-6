import BonusNumber from "../src/BonusNumber";
import WinningNumbers from "../src/WinningNumbers";
import { ERROR_TYPE } from "../src/constants/messages.js";

describe("당첨 번호 클래스 테스트", () => {
  test("당첨 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new WinningNumbers([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR_TYPE.NOT_SIX_NUMBERS);
  });

  test("당첨 번호의 개수가 6개가 넘어가지 않으면 예외가 발생한다.", () => {
    expect(() => {
      new WinningNumbers([1, 2, 3, 4, 5]);
    }).toThrow(ERROR_TYPE.NOT_SIX_NUMBERS);
  });

  test("당첨 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new WinningNumbers([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR_TYPE.CONTAINS_DUPLICATES);
  });

  test("당첨 번호에 공백이 있으면 예외가 발생한다.", () => {
    expect(() => {
      new WinningNumbers([1, 2, 3, 4, 5, " "]);
    }).toThrow(ERROR_TYPE.CONTAINS_WHITESPACE);
  });

  test("당첨 번호에 숫자가 아닌 것이 있으면 예외가 발생한다.", () => {
    expect(() => {
      new WinningNumbers([1, 2, 3, 4, 5, "a"]);
    }).toThrow(ERROR_TYPE.NOT_NUMBERS);
  });

  test("당첨 번호에 1~45 범위가 아닌 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new WinningNumbers([1, 2, 3, 4, 5, 46]);
    }).toThrow(ERROR_TYPE.OUT_OF_RANGE);
  });
});

describe("보너스 번호 클래스 테스트", () => {
  test("보너스 번호가 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new BonusNumber('1q2w3e');
    }).toThrow(ERROR_TYPE.NOT_NUMBERS);
  });

  test("보너스 번호에 공백이 존재하면 예외가 발생한다.", () => {
    expect(() => {
      new BonusNumber(' ');
    }).toThrow(ERROR_TYPE.CONTAINS_WHITESPACE);
  });

  test("보너스 번호가 1~45 범위가 아닌 숫자라면 예외가 발생한다.", () => {
    expect(() => {
      new BonusNumber('100');
    }).toThrow(ERROR_TYPE.OUT_OF_RANGE);
  });
});
