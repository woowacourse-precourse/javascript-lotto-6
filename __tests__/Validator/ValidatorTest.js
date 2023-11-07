import { MissionUtils } from "@woowacourse/mission-utils";
import InputValidator from "../../src/Validator/inputValidator";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("validator 클래스 테스트", () => {
  const logSpy = getLogSpy();
  const errorOutput = "[ERROR]";

  describe("Test 1. validator 개별 로직 테스트", () => {
    test("Test 1-1. 숫자가 아닌 경우 예외 처리한다.", () => {
      const value = "a";

      const result = InputValidator.isNumber(value);
      expect(result).toBe(false);
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(errorOutput));
    });

    test("Test 1-2. 입력받은 금액이 1,000원 단위로 나누어 떨어지지 않는 경우 예외 처리한다.", () => {
      const value = "1001";

      const result = InputValidator.isDivideByLottoPrice(value);
      expect(result).toBe(false);
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(errorOutput));
    });

    test("Test 1-3. 보너스 번호가 당첨 번호에 포함되는 경우 예외 처리한다.", () => {
      const bonusNumber = 6;
      const luckyNumbers = [1, 2, 3, 4, 5, 6];

      const result = InputValidator.isBonusInLuckyNumbers(bonusNumber, luckyNumbers);
      expect(result).toBe(false);
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(errorOutput));
    });

    test("Test 1-4. 배열의 모든 원소에 대해 callback 함수를 실행해 검증한다", () => {
      const array = [1, 2, 3, 4, 5, 'a'];
      const callback = InputValidator.isNumber;

      const result = InputValidator.validateArray(array, callback);
      expect(result).toBe(false);
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(errorOutput));
    });
  });

  describe("Test 2. validator 통합 로직 테스트", () => {
    test("Test 2-1. 구입 금액에 대해 검증한다", () => {
      const values = ["a", "1001"];

      values.forEach((value) => {
        const result = InputValidator.validateMoney(value);
        expect(result).toBe(false);
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(errorOutput));
      });
    });

    test("Test 2-2. 당첨 번호에 대해 검증한다", () => {
      const numbers = [
        '1,2,3,4,5,a',
        '1,2,3,4,5',
        '1,2,3,4,5,5',
        '1,2,3,4,5,46'
      ];

      numbers.forEach((number) => {
        const result = InputValidator.validateLuckyNumbers(number);
        expect(result).toBe(false);
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(errorOutput));
      });
    });

    test("Test 2-3. 보너스 번호에 대해 검증한다", () => {
      const bonusNumber = 6;
      const luckyNumbers = [1, 2, 3, 4, 5, 6];

      const result = InputValidator.validateBonusNumber(bonusNumber, luckyNumbers);
      expect(result).toBe(false);
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(errorOutput));
    });
  });
});