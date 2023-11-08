import {
  validateLottoNumbersCountMismatch,
  validateLottoNumbersNotAllNumbers,
  validateLottoNumbersOutOfRange,
  validateLottoNumberIsUniq,
} from "../src/Validation/LottoValidation.js";

describe("LottoValidation Tests", () => {
  describe("validateLottoNumbersCountMismatch", () => {
    test("로또 갯수가 맞지 않은 경우", () => {
      const input = [1, 2, 3, 4, 5]; // 6개가 아닌 경우
      expect(() => validateLottoNumbersCountMismatch(input)).toThrow();
    });

    test("로또 갯수가 맞는 경우", () => {
      const input = [1, 2, 3, 4, 5, 6]; // 정확히 6개
      expect(() => validateLottoNumbersCountMismatch(input)).not.toThrow();
    });
  });

  describe("validateLottoNumbersNotAllNumbers", () => {
    test("로또 번호에 숫자가 아닌 문자가 있는 경우", () => {
      const input = [1, 2, "x", 4, 5, 6];
      expect(() => validateLottoNumbersNotAllNumbers(input)).toThrow();
    });

    test("로또 번호가 숫자로만 이루어진 경우", () => {
      const input = [1, 2, 3, 4, 5, 6];
      expect(() => validateLottoNumbersNotAllNumbers(input)).not.toThrow();
    });
  });

  describe("validateLottoNumbersOutOfRange", () => {
    test("로또 번호의 숫자 범위가 맞지 않은 경우", () => {
      const input = [0, 2, 3, 4, 5, 6]; // 0은 유효한 범위를 벗어난 가정
      expect(() => validateLottoNumbersOutOfRange(input)).toThrow();
    });

    test("로또 번호의 숫자 범위가 맞는 않은 경우", () => {
      const input = [1, 2, 3, 4, 5, 6];
      expect(() => validateLottoNumbersOutOfRange(input)).not.toThrow();
    });
  });

  describe("validateLottoNumberIsUniq", () => {
    test("로또 번호가 중복되는 경우", () => {
      const input = [1, 2, 3, 3, 5, 6];
      expect(() => validateLottoNumberIsUniq(input)).toThrow();
    });

    test("로또 번호가 중복되지 않는 경우", () => {
      const input = [1, 2, 3, 4, 5, 6];
      expect(() => validateLottoNumberIsUniq(input)).not.toThrow();
    });
  });
});
