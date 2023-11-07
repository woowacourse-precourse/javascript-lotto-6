import { Console } from "@woowacourse/mission-utils";
import InputView from "../../src/view/InputView.js";
import { INPUT_ERROR } from "../../src/model/Constants.js";

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

describe("로또 구입 금액 입력 테스트", () => {
  const nullMoney = "";
  const emptyMoney = ",";
  const blankMoney = "14 000";
  const indivisibleMoney = "14999";

  test("아무 입력을 안하고 엔터 누르면 예외 발생", async () => {
    mockQuestions([nullMoney]);

    await expect(InputView.receiveMoney()).rejects.toThrow(
      `${INPUT_ERROR.null}`
    );
  });

  test("숫자 내 공백 존재할 때 예외 발생", async () => {
    mockQuestions([emptyMoney]);

    await expect(InputView.receiveMoney()).rejects.toThrow(
      `${INPUT_ERROR.empty}`
    );
  });

  test("문자(공백 포함) 입력할 때 예외 발생", async () => {
    mockQuestions([blankMoney]);

    await expect(InputView.receiveMoney()).rejects.toThrow(
      `${INPUT_ERROR.char}`
    );
  });

  test("1,000원으로 나누어 떨어지지 않는 경우 예외 발생", async () => {
    mockQuestions([indivisibleMoney]);

    await expect(InputView.receiveMoney()).rejects.toThrow(
      `${INPUT_ERROR.indivisible}`
    );
  });
});
