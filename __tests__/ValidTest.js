import Validate from "../src/Validate";

describe("Validate 클래스 테스트", () => {
  describe("isNumeric 메서드 테스트", () => {
    test("숫자로만 이루어진 문자열은 true를 반환해야 합니다.", () => {
      expect(Validate.isNumeric("12345")).toBe(true);
    });

    test("숫자가 아닌 문자를 포함한 문자열은 false를 반환해야 합니다.", () => {
      expect(Validate.isNumeric("123abc")).toBe(false);
    });
  });

  describe("isMultipleOf1000 메서드 테스트", () => {
    test("1000의 배수인 경우 true를 반환해야 합니다.", () => {
      expect(Validate.isMultipleOf1000("5000")).toBe(true);
    });

    test("1000의 배수가 아닌 경우 false를 반환해야 합니다.", () => {
      expect(Validate.isMultipleOf1000("3001")).toBe(false);
    });
  });
});