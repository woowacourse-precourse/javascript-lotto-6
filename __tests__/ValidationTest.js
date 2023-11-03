import {
  isValidAmount,
  isValidNumber,
  isValidWinningNumbers,
  hasDuplicate,
} from "../src/validation";

describe("입력 유효성 검사 함수 테스트", () => {
  describe("isValidAmount", () => {
    test("1000의 배수인 경우 true를 반환해야 함", () => {
      expect(isValidAmount(1000)).toBeTruthy();
      expect(isValidAmount(5000)).toBeTruthy();
    });

    test("1000의 배수가 아닌 경우 false를 반환해야 함", () => {
      expect(isValidAmount(100)).toBeFalsy();
      expect(isValidAmount(5500)).toBeFalsy();
    });
  });

  describe("isValidNumber", () => {
    test("유효 범위 내의 숫자인 경우 true를 반환해야 함", () => {
      expect(isValidNumber(1)).toBeTruthy();
      expect(isValidNumber(45)).toBeTruthy();
    });

    test("유효 범위를 벗어난 숫자인 경우 false를 반환해야 함", () => {
      expect(isValidNumber(0)).toBeFalsy();
      expect(isValidNumber(46)).toBeFalsy();
    });

    test("숫자가 아닌 경우 false를 반환해야 함", () => {
      expect(isValidNumber("a")).toBeFalsy();
      expect(isValidNumber(undefined)).toBeFalsy();
    });
  });

  describe("isValidWinningNumbers", () => {
    test("당첨 번호가 6개이고 모두 유효한 경우 true를 반환해야 함", () => {
      expect(isValidWinningNumbers([1, 2, 3, 4, 5, 6])).toBeTruthy();
    });

    test("당첨 번호가 6개가 아닌 경우 false를 반환해야 함", () => {
      expect(isValidWinningNumbers([1, 2, 3, 4, 5])).toBeFalsy();
    });

    test("당첨 번호 중 유효하지 않은 숫자가 있는 경우 false를 반환해야 함", () => {
      expect(isValidWinningNumbers([1, 2, 3, 4, 5, 46])).toBeFalsy();
    });
  });

  describe("hasDuplicate", () => {
    test("중복된 숫자가 없는 경우 false를 반환해야 함", () => {
      expect(hasDuplicate([1, 2, 3, 4, 5, 6])).toBeFalsy();
    });

    test("중복된 숫자가 있는 경우 true를 반환해야 함", () => {
      expect(hasDuplicate([1, 2, 3, 3, 5, 6])).toBeTruthy();
    });
  });
});
