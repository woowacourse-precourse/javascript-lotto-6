import Validator from "../src/Validate.js";
import ERROR_MESSAGE from "../src/Errors.js";

describe("ValidateTest", () => {
  test("입력금액은 1000원 단위가 아니면 예외가 발생한다.", () => {
    expect(() => Validator.validateMoneyUnit(1500)).toThrow(
      ERROR_MESSAGE.moneyUnit
    );
  });

  test("입력금액에 공백이 포함되어있으면 예외가 발생한다.", () => {
    expect(() => Validator.validateInputMoney("15 00")).toThrow(
      ERROR_MESSAGE.moneyValue
    );
  });

  test("입력금액에 문자가 포함되어있으면 예외가 발생한다.", () => {
    expect(() => Validator.validateInputMoney("1@00!a")).toThrow(
      ERROR_MESSAGE.moneyValue
    );
  });

  test("당첨번호는 1~45이내 정수를 중복해서 입력하면 예외가 발생한다.", () => {
    expect(() =>
      Validator.validateWinningNumbers([1, 2, 3, 4, 5, 5]).toThrow(
        ERROR_MESSAGE.invalidTicketNumbers
      )
    );
  });
});
