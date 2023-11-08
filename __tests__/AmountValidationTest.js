import InputValidate from "../src/utils/InputValidate";

describe("로또 테스트: 금액 입력 예외 테스트", () => {
  test("공백 입력", () => {
    const emptyInput = " ";

    expect(() => InputValidate.validateAmount(emptyInput)).toThrow("[ERROR]");
  });

  test("입력값이 숫자가 아닌 경우", () => {
    const nonNumericInput = "abc";

    expect(() => InputValidate.validateAmount(nonNumericInput)).toThrow(
      "[ERROR]"
    );
  });

  test("0 입력", () => {
    const negativeInput = "0";

    expect(() => InputValidate.validateAmount(negativeInput)).toThrow(
      "[ERROR]"
    );
  });

  test("음수 입력", () => {
    const negativeInput = "-1000";

    expect(() => InputValidate.validateAmount(negativeInput)).toThrow(
      "[ERROR]"
    );
  });

  test("1000원 단위가 아닌 수 입력", () => {
    const invalidAmount = "2500";

    expect(() => InputValidate.validateAmount(invalidAmount)).toThrow(
      "[ERROR]"
    );
  });
});
