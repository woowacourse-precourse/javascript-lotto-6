import Validator from "../src/Validator.js";

describe("Validator 클래스 테스트", () => {
  test.each([
    ["false 반환", [1, 2, 3], 2, false],
    ["true 반환", [1, 2, 3], 3, true],
  ])(
    "배열의 크기가 주어진 숫자와 같으면 true, 다르면 false 반환 - %s",
    (testName, array, number, expectedOutput) => {
      expect(Validator.isArrayLengthEqualTo(array, number)).toBe(
        expectedOutput
      );
    }
  );

  test.each([
    ["false 반환", [1, 2, 3, 4], false],
    ["true 반환", [1, 2, 3, 1], true],
  ])(
    "배열 내에 중복된 값이 있다면 true, 없다면 false 반환 - %s",
    (testName, array, expectedOutput) => {
      expect(Validator.hasDuplicate(array)).toBe(expectedOutput);
    }
  );

  test.each([
    ["1234s5", false],
    ["123456", true],
  ])(
    "문자열 내에 숫자만 있다면 true, 아니라면 false 반환 - %s",
    (string, expectedOutput) => {
      expect(Validator.isStringOnlyDigits(string)).toBe(expectedOutput);
    }
  );

  test.each([
    [25, 5, true],
    [16, 3, false],
  ])(
    "첫 번째 숫자가 두 번째 숫자로 나누어 떨어지면 true, 아니라면 false 반환 - %d",
    (dividend, divisor, expectedOutput) => {
      expect(Validator.isDivisible(dividend, divisor)).toBe(expectedOutput);
    }
  );

  test.each([
    ["1000", false],
    ["0100", true],
  ])(
    "문자열이 0으로 시작하면 true, 아니라면 false 반환 - %s",
    (string, expectedOutput) => {
      expect(Validator.startWithZero(string)).toBe(expectedOutput);
    }
  );
});
