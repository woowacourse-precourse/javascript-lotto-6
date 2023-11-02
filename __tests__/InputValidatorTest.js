import InputValidator from "../src/InputValidator";

describe("InputValidator 테스트", () => {
  describe("구매금액", () => {
    test.each([
      ["빈값일 때", ""],
      ["숫자가 아닐 때", "ab"],
      ["중간에 공백이 들어갔을 때", "10 00"],
      ["1000원 단위가 아닐 때", "12345"],
    ])("%s", (_, input) => {
      const validator = new InputValidator();

      expect(() => {
        validator.validateAmount(input);
      }).toThrow("[ERROR]");
    });
  });
});
