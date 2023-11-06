/* eslint-disable */

import {
  validateBonusNumber,
  validatePurchase,
  validateWinningNumber,
} from "../src/utils/validation.js";

describe("validation 모듈 테스트", () => {
  test("구입액에 빈 값을 입력하면 예외가 발생한다.", () => {
    expect(() => validatePurchase("")).toThrow("[ERROR]");
  });

  test("구입액에 문자가 포함되면 예외가 발생한다.", () => {
    expect(() => validatePurchase("100a")).toThrow("[ERROR]");
  });

  test("구입액이 1000으로 나누어 떨어지지 않으면 예외가 발생한다.", () => {
    expect(() => validatePurchase("1200")).toThrow("[ERROR]");
  });

  // 당첨 번호 입력에 대한 예외 처리
  test("당첨 번호에 빈 값을 입력하면 예외가 발생한다.", () => {
    expect(() => validateWinningNumber("")).toThrow("[ERROR]");
  });

  test("당첨 번호의 개수가 6개 미만이면 예외가 발생한다.", () => {
    expect(() => validateWinningNumber("1,2,3,4,5")).toThrow("[ERROR]");
  });

  test("당첨 번호의 개수가 6개 초과하면 예외가 발생한다.", () => {
    expect(() => validateWinningNumber("1,2,3,4,5,6,7")).toThrow("[ERROR]");
  });

  test("당첨 번호에 숫자 외의 문자를 입력하면 예외가 발생한다.", () => {
    expect(() => validateWinningNumber("1,2,3,4,5,a")).toThrow("[ERROR]");
  });

  test("당첨 번호에 범위(1~45)외의 숫자를 입력하면 예외가 발생한다.", () => {
    expect(() => validateWinningNumber("1,2,3,4,5,60")).toThrow("[ERROR]");
  });

  test("당첨 번호에 중복이 포함되면 예외가 발생한다.", () => {
    expect(() => validateWinningNumber("1,2,3,4,5,5")).toThrow("[ERROR]");
  });

  // 보너스 번호 입력에 대한 예외 처리
  test("당첨 번호에 빈 값을 입력하면 예외가 발생한다.", () => {
    expect(() => validateBonusNumber([1, 2, 3, 4, 5, 6], "")).toThrow(
      "[ERROR]",
    );
  });

  test("당첨 번호에 숫자 외의 문자를 입력하면 예외가 발생한다.", () => {
    expect(() => validateBonusNumber([1, 2, 3, 4, 5, 6], "a")).toThrow(
      "[ERROR]",
    );
  });

  test("당첨 번호에 범위(1~45)외의 숫자를 입력하면 예외가 발생한다.", () => {
    expect(() => validateBonusNumber([1, 2, 3, 4, 5, 6], "0")).toThrow(
      "[ERROR]",
    );
  });

  test("당첨 번호에 중복이 포함되면 예외가 발생한다.", () => {
    expect(() => validateBonusNumber([1, 2, 3, 4, 5, 6], "6")).toThrow(
      "[ERROR]",
    );
  });
});
