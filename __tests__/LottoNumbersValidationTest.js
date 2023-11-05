import UserInput from "../src/utils/UserInput.js";

describe("로또 테스트: 당첨번호 예외 테스트", () => {
  test("공백 입력", () => {
    const emptyInput = " ";

    expect(() => UserInput.validateLottoNumbers(emptyInput)).toThrow("[ERROR]");
  });

  test("입력값이 숫자가 아닌 경우", () => {
    const nonNumericInput = ["a", "b", "c", "d", "e", "5"];

    expect(() => UserInput.validateLottoNumbers(nonNumericInput)).toThrow(
      "[ERROR]"
    );
  });

  test("0이하 또는 음수 입력", () => {
    const negativeInput = ["0", "1", "2", "3", "4", "5"];

    expect(() => UserInput.validateLottoNumbers(negativeInput)).toThrow(
      "[ERROR]"
    );
  });

  test("0이하 또는 음수 입력", () => {
    const negativeInput = ["-6", "1", "2", "3", "4", "5"];

    expect(() => UserInput.validateLottoNumbers(negativeInput)).toThrow(
      "[ERROR]"
    );
  });

  test("중복된 번호가 존재하는 경우", () => {
    const duplicateInput = ["1", "1", "2", "3", "4", "5"];

    expect(() => UserInput.validateLottoNumbers(duplicateInput)).toThrow(
      "[ERROR]"
    );
  });

  test("유효한 범위를 벗어나는 입력이 존재하는 경우", () => {
    const outOfRangeInput = ["48", "1", "2", "3", "4", "5"];

    expect(() => UserInput.validateLottoNumbers(outOfRangeInput)).toThrow(
      "[ERROR]"
    );
  });
});
