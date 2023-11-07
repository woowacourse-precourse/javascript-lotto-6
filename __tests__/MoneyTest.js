import Money from "../src/Money";
import ERROR_MESSAGES from "../src/constants/ErrorMessage";

describe("Money 클래스 테스트", () => {
  test("입력한 값이 숫자형태가 아닐 경우 예외처리.", () => {
    const money = new Money();
    const expectedError = ERROR_MESSAGES.IS_NUMBER;

    expect(() => {
      if (isNaN(money.userMoney())) {
        throw new Error(expectedError);
      }
    }).toThrow(expectedError);
  });

  test("입력한 값이 1000원 단위가 아닐 경우 예외처리.", () => {
    const money = new Money();
    const expectedError = ERROR_MESSAGES.IS_ONE_THOUSAND_WON;

    expect(() => {
      if (money % 1000 !== 0) {
        throw new Error(expectedError);
      }
    }).toThrow(expectedError);
  });

  test("입력한 값이 0일 경우 예외 처리", () => {
    const money = new Money();
    const expectedError = ERROR_MESSAGES.IS_ZERO;

    expect(() => {
      if (money === 0) {
        throw new Error(expectedError);
      }
    });
  });
});
