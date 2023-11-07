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
  const validMoney = "14000";

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

  test("올바른 구입 금액을 입력", async () => {
    mockQuestions([validMoney]);

    const result = await InputView.receiveMoney();

    expect(result).toEqual(validMoney);
  });
});

describe("당첨 번호 입력 테스트", () => {
  const trimNumbers = " 1, 2, 3, 4, 5, 6";
  const nullNumbers = "";
  const wrongNumbers = "1,2,3,4,5,6,7";
  const emptyNumbers = "1,2,,4,5,6";
  const blankNumbers = "12,34,5 6,7,8,9";
  const charNumbers = "1,2,a,3,4,5,6";
  const outOfRangeNumbers = "12,34,56,78,9,10";
  const duplicateNumbers = "1,2,2,3,3,4";
  const validNumbers = "1,2,3,4,5,6";

  test("한 숫자 앞/뒤 공백 제거 전처리", async () => {
    mockQuestions([trimNumbers]);

    const result = await InputView.receiveNumbers();

    expect(result).toEqual(validNumbers);
  });

  test("아무 입력을 안하고 엔터 누르면 예외 발생", async () => {
    mockQuestions([nullNumbers]);

    await expect(InputView.receiveNumbers()).rejects.toThrow(
      `${INPUT_ERROR.null}`
    );
  });

  test("숫자 내 공백 존재할 때 예외 발생", async () => {
    mockQuestions([wrongNumbers]);

    await expect(InputView.receiveNumbers()).rejects.toThrow(
      `${INPUT_ERROR.wrong}`
    );
  });

  test("문자(공백 포함) 입력할 때 예외 발생", async () => {
    mockQuestions([emptyNumbers]);

    await expect(InputView.receiveNumbers()).rejects.toThrow(
      `${INPUT_ERROR.empty}`
    );
  });

  test("1,000원으로 나누어 떨어지지 않는 경우 예외 발생", async () => {
    mockQuestions([blankNumbers]);

    await expect(InputView.receiveNumbers()).rejects.toThrow(
      `${INPUT_ERROR.blank}`
    );
  });

  test("아무 입력을 안하고 엔터 누르면 예외 발생", async () => {
    mockQuestions([charNumbers]);

    await expect(InputView.receiveNumbers()).rejects.toThrow(
      `${INPUT_ERROR.char}`
    );
  });

  test("아무 입력을 안하고 엔터 누르면 예외 발생", async () => {
    mockQuestions([outOfRangeNumbers]);

    await expect(InputView.receiveNumbers()).rejects.toThrow(
      `${INPUT_ERROR.outOfRange}`
    );
  });

  test("아무 입력을 안하고 엔터 누르면 예외 발생", async () => {
    mockQuestions([duplicateNumbers]);

    await expect(InputView.receiveNumbers()).rejects.toThrow(
      `${INPUT_ERROR.duplicate}`
    );
  });

  test("올바른 당첨 번호 입력", async () => {
    mockQuestions([validNumbers]);

    const result = await InputView.receiveNumbers();

    expect(result).toEqual(validNumbers);
  });
});
