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

  describe("당첨 로또 번호", () => {
    test.each([
      ["빈값일 때", ""],
      ["구분자만 있을 때", ","],
      ["숫자가 아닌 값이 있을 때", "1,2,a,b,5,6"],
      ["로또 번호가 아닌 숫자가 있을 때", "0,1,2,3,4,5"],
      ["로또 번호가 6개가 아닐 때", "1,2,3,4,5"],
    ])("%s 에러를 발생시킨다", (_, input) => {
      const validator = new InputValidator();

      expect(() => {
        validator.validateWinningNumbers(input);
      }).toThrow("[ERROR]");
    });
  });
});
