import InputValidator from "../src/InputValidator";

describe("InputValidator 테스트", () => {
  describe("구매금액", () => {
    test.each([
      ["빈값일 때", ""],
      ["숫자가 아닐 때", "ab"],
      ["중간에 공백이 들어갔을 때", "10 00"],
      ["1000원 단위가 아닐 때", "12345"],
    ])("%s 에러를 발생시킨다", (_, input) => {
      const validator = new InputValidator();

      expect(() => {
        validator.validateAmount(input);
      }).toThrow("[ERROR]");
    });

    test("1000원 단위의 금액을 입력했을 경우 에러를 발생시키지 않는다", () => {
      const validator = new InputValidator();

      expect(() => {
        validator.validateAmount("10000");
      }).not.toThrow("[ERROR]");
    });
  });

  describe("당첨 로또 번호", () => {
    test.each([
      ["빈값일 때", ""],
      ["구분자만 있을 때", ","],
      ["숫자가 아닌 값이 있을 때", "1,2,a,b,5,6"],
      ["로또 번호가 아닌 숫자가 있을 때", "0,1,2,3,4,5"],
      ["로또 번호가 6개가 아닐 때", "1,2,3,4,5"],
      ["중복된 로또 번호를 골랐을 때", "1,1,2,3,4,5"],
    ])("%s 에러를 발생시킨다", (_, input) => {
      const validator = new InputValidator();

      expect(() => {
        validator.validateWinningNumbers(input);
      }).toThrow("[ERROR]");
    });

    test("6개의 중복없는 로또번호를 입력했을 경우 에러를 발생시키지 않는다", () => {
      const validator = new InputValidator();

      expect(() => {
        validator.validateWinningNumbers("1,2,3,4,5,6");
      }).not.toThrow("[ERROR]");
    });
  });

  describe("보너스 로또 번호", () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];

    test.each([
      ["빈값일 때", ""],
      ["숫자가 아닐 때", "ab"],
      ["중간에 공백이 들어갔을 때", "4 5"],
      ["로또 번호가 아닐 때", "55"],
      ["중복되는 로또 번호를 선택했을 때", "5"],
    ])("%s 에러를 발생시킨다", (_, input) => {
      const validator = new InputValidator();

      expect(() => {
        validator.validateBonusNumber(input, winningNumbers);
      }).toThrow("[ERROR]");
    });

    test("중복되지 않은 보너스 로또 번호를 선택했을 경우 에러를 발생시키지 않는다", () => {
      const validator = new InputValidator();

      expect(() => {
        validator.validateBonusNumber("7", winningNumbers);
      }).not.toThrow("[ERROR]");
    });
  });
});
