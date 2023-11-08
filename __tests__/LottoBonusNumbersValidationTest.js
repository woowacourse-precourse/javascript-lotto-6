import InputValidate from "../src/utils/InputValidate.js";

describe("로또 테스트: 보너스 번호 예외 테스트", () => {
  test("공백 입력", () => {
    const emptyInput = " ";

    expect(() => InputValidate.validateBonusNumber(emptyInput)).toThrow(
      "[ERROR]"
    );
  });

  test("입력값이 숫자가 아닌 경우", () => {
    const nonNumericInput = "a";

    expect(() => InputValidate.validateBonusNumber(nonNumericInput)).toThrow(
      "[ERROR]"
    );
  });

  test("0이하 또는 음수 입력", () => {
    const negativeInput = "0";

    expect(() => InputValidate.validateBonusNumber(negativeInput)).toThrow(
      "[ERROR]"
    );
  });

  test("0 이하 또는 음수 입력", () => {
    const negativeInput = "-6";

    expect(() => InputValidate.validateBonusNumber(negativeInput)).toThrow(
      "[ERROR]"
    );
  });

  test("유효한 범위를 벗어나는 입력이 존재하는 경우", () => {
    const outOfRangeInput = "48";

    expect(() => InputValidate.validateBonusNumber(outOfRangeInput)).toThrow(
      "[ERROR]"
    );
  });
});
