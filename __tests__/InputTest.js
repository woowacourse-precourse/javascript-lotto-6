import Input from "../src/core/Input.js";
import { getLogSpy, mockQuestions } from "./utils.js";

describe("Input 클래스 테스트", () => {
  /** @type {Input} */
  let input;

  beforeEach(() => {
    jest.restoreAllMocks();
    input = new Input();
  });

  test("구입 금액 입력 테스트: 예외 상황이 생겨도 프로그램이 종료되지 않는가?", async () => {
    const inputs = ["1", "2", "3", "4", "1000"];
    const logSpy = getLogSpy();

    mockQuestions(inputs);

    const value = await input.askPurchaseValue();

    expect(value).toBe(1000);
    expect(logSpy).toHaveBeenCalledTimes(4);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });

  test("당첨 번호 입력 테스트: 예외 상황이 생겨도 프로그램이 종료되지 않는가?", async () => {
    const inputs = [
      "1,2,3",
      "1,2,3,4,5,6,7",
      "",
      "1,2,3,4,5,",
      "0,1,2,4",
      "1,2,3,4,5,6",
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);

    const value = await input.askWinningNumbers();

    expect(value).toEqual([1, 2, 3, 4, 5, 6]);
    expect(logSpy).toHaveBeenCalledTimes(5);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });

  test("보너스 번호 입력 테스트: 예외 상황이 생겨도 프로그램이 종료되지 않는가?", async () => {
    const setInputs = ["1,2,3,4,5,6"];
    const inputs = ["0", "46", "a", "", "3", "7"];
    const logSpy = getLogSpy();

    mockQuestions(setInputs);
    await input.askWinningNumbers();

    mockQuestions(inputs);
    const value = await input.askBounsNumber();

    expect(value).toBe(7);
    expect(logSpy).toHaveBeenCalledTimes(5);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });
});
