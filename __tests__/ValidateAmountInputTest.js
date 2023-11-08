/* eslint-disable no-undef */
import { ERROR_MESSAGE } from "../src/constant/Error.js";
import { validateAmount } from "../src/validator/ValidateAmount.js";
describe("로또 구매 금액 입력 테스트", () => {
  test("비어있거나 빈칸이 포함되어 있으면 예외가 발생한다.", () => {
    const empty = "";
    const spaces = "   ";
    expect(() => validateAmount(empty)).toThrow(ERROR_MESSAGE.inputEmpty);
    expect(() => validateAmount(spaces)).toThrow(ERROR_MESSAGE.inputEmpty);
  });

  test("문자가 입력되면 예외가 발생한다.", () => {
    const input = "a";
    expect(() => validateAmount(input)).toThrow(ERROR_MESSAGE.inputString);
  });

  test("자연수 이외의 실수가 입력되면 예외가 발생한다.", () => {
    const zero = "0";
    const decimal = "1.5";
    const negative = "-1";
    expect(() => validateAmount(zero)).toThrow(
      ERROR_MESSAGE.inputNaturalNumber
    );
    expect(() => validateAmount(decimal)).toThrow(
      ERROR_MESSAGE.inputNaturalNumber
    );
    expect(() => validateAmount(negative)).toThrow(
      ERROR_MESSAGE.inputNaturalNumber
    );
  });

  test("1000단위로 입력되지 않으면 예외가 발생한다.", () => {
    const input = "10";
    expect(() => validateAmount(input)).toThrow(
      ERROR_MESSAGE.amountDivisibleThousand
    );
  });
});
