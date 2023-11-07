import InputValidate from "../src/utils/InputValidate";

describe("로또 테스트: 금액 입력 예외 테스트", () => {
  test("공백 입력", () => {
    const emptyInput = " ";

    expect(() => InputValidate.validateAmount(emptyInput)).toThrow(
      "[ERROR] 입력값이 비어 있습니다."
    );
  });

  test("입력값이 숫자가 아닌 경우", () => {
    const nonNumericInput = "abc";

    expect(() => InputValidate.validateAmount(nonNumericInput)).toThrow(
      "[ERROR] 숫자가 아닌 값이 입력되었습니다."
    );
  });

  test("0 입력", () => {
    const negativeInput = "0";

    expect(() => InputValidate.validateAmount(negativeInput)).toThrow(
      "[ERROR] 0 이하의 음수를 입력할 수 없습니다."
    );
  });

  test("음수 입력", () => {
    const negativeInput = "-1000";

    expect(() => InputValidate.validateAmount(negativeInput)).toThrow(
      "[ERROR] 0 이하의 음수를 입력할 수 없습니다."
    );
  });

  test("1000원 단위가 아닌 수 입력", () => {
    const invalidAmount = "2500";

    expect(() => InputValidate.validateAmount(invalidAmount)).toThrow(
      "[ERROR] 구입금액은 1000원 단위로 입력해야 합니다."
    );
  });

  test("유효한 입력", () => {
    const validInput = "3000";

    expect(InputValidate.validateAmount(validInput)).toBe(3000);
  });
});
