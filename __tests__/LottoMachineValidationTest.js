import {
  validateMoneyReceived,
  validateWinningNumbersCountMismatch,
  validateWinningNumbersNotAllNumbers,
  validateWinningBonusNumberNotNumbers,
  validateWinningNumbersOutOfRange,
  validateWinningNumberIsUniq,
} from "../src/Validation/LottoMachineValidation.js";

describe("LottoMachineValidation Tests", () => {
  describe("validateMoneyReceived", () => {
    test("받은 돈이 숫자가 아닌 경우", () => {
      const money = "not-a-number";
      expect(() => validateMoneyReceived(money)).toThrow();
    });

    test("받은 돈이 숫자인 경우", () => {
      const money = 1000;
      expect(() => validateMoneyReceived(money)).not.toThrow();
    });
  });

  describe("validateLottoNumbersCountMismatch", () => {
    test("당첨 번호 갯수가 맞지 않은 경우", () => {
      const input = [1, 2, 3, 4, 5]; // 6개가 아닌 경우
      expect(() => validateWinningNumbersCountMismatch(input)).toThrow();
    });

    test("당첨 번호 갯수가 맞는 경우", () => {
      const input = [1, 2, 3, 4, 5, 6]; // 정확히 6개
      expect(() => validateWinningNumbersCountMismatch(input)).not.toThrow();
    });
  });

  describe("validateWinningNumbersNotAllNumbers", () => {
    test("당첨 번호에 숫자가 아닌 문자가 있는 경우", () => {
      const input = [1, 2, "x", 4, 5, 6];
      expect(() => validateWinningNumbersNotAllNumbers(input)).toThrow();
    });

    test("당첨 번호가 숫자로만 이루어진 경우", () => {
      const input = [1, 2, 3, 4, 5, 6];
      expect(() => validateWinningNumbersNotAllNumbers(input)).not.toThrow();
    });
  });

  describe("validateWinningBonusNumberNotNumbers", () => {
    test("보너스 숫자가 숫자가 아닌경우", () => {
      const bonusNumber = "x";
      expect(() => validateWinningBonusNumberNotNumbers(bonusNumber)).toThrow();
    });

    test("보너스 숫자가 숫자인 경우", () => {
      const bonusNumber = 7;
      expect(() =>
        validateWinningBonusNumberNotNumbers(bonusNumber)
      ).not.toThrow();
    });
  });

  describe("validateWinningNumbersOutOfRange", () => {
    test("당첨 번호의 숫자 범위가 맞지 않은 경우", () => {
      const input = [0, 2, 3, 4, 5, 6]; // 0은 유효한 범위를 벗어난 가정
      expect(() => validateWinningNumbersOutOfRange(input)).toThrow();
    });

    test("당첨 번호의 숫자 범위가 맞는 않은 경우", () => {
      const input = [1, 2, 3, 4, 5, 6];
      expect(() => validateWinningNumbersOutOfRange(input)).not.toThrow();
    });
  });

  describe("validateWinningNumberIsUniq", () => {
    test("당첨 번호가 중복되는 경우", () => {
      const input = [1, 2, 3, 3, 5, 6];
      expect(() => validateWinningNumberIsUniq(input)).toThrow();
    });

    test("당첨 번호가 중복되지 않는 경우", () => {
      const input = [1, 2, 3, 4, 5, 6];
      expect(() => validateWinningNumberIsUniq(input)).not.toThrow();
    });
  });
});
