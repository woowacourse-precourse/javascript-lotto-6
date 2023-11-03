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
});
