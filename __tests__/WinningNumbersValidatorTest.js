import WinningNumbersValidator from "../src/validate/WinningNumbersValidator.js";
import { WINNING_NUMBERS_ERROR_MESSAGE } from "../src/constants/Message.js";

describe("당첨 번호 유효성 검사 테스트", () => {
  test("입력된 당첨 번호가 없으면 예외가 발생한다.", () => {
    expect(() => {
      WinningNumbersValidator.validateWinningNumbers([]);
    }).toThrow(WINNING_NUMBERS_ERROR_MESSAGE.emptyInput);
  });

  test("당첨 번호의 개수가 6개가 아니면 예외가 발생한다.", () => {
    expect(() => {
      WinningNumbersValidator.validateWinningNumbers([1, 2, 3, 4, 5]);
    }).toThrow(WINNING_NUMBERS_ERROR_MESSAGE.wrongCount);
  });

  test("당첨 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      WinningNumbersValidator.validateWinningNumbers([1, 1, 3, 4, 5, 6]);
    }).toThrow(WINNING_NUMBERS_ERROR_MESSAGE.wrongWinningNumber);
  });

  test("당첨 번호에 숫자가 아닌 값이 포함되어 있으면 예외가 발생한다.", () => {
    expect(() => {
      WinningNumbersValidator.validateWinningNumbers([1, "a", 3, 4, 5, 6]);
    }).toThrow(WINNING_NUMBERS_ERROR_MESSAGE.notNaturalNumber);
  });

  test("당첨 번호가 1부터 45 범위를 벗어나면 예외가 발생한다.", () => {
    expect(() => {
      WinningNumbersValidator.validateWinningNumbers([0, 2, 3, 4, 5, 6]);
    }).toThrow(WINNING_NUMBERS_ERROR_MESSAGE.wrongRange);

    expect(() => {
      WinningNumbersValidator.validateWinningNumbers([1, 2, 3, 4, 5, 46]);
    }).toThrow(WINNING_NUMBERS_ERROR_MESSAGE.wrongRange);
  });

  test("올바른 당첨 번호 입력에서는 예외가 발생하지 않는다.", () => {
    expect(() => {
      WinningNumbersValidator.validateWinningNumbers([1, 2, 3, 4, 5, 6]);
    }).not.toThrow();
  });
});