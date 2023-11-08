import App from "../src/App";
import { validateMoney } from "../src/validation/money";
import { getLogSpy, mockQuestions, mockRandoms } from "./ApplicationTest";

describe("구매 가격 입력 테스트", () => {
  test("1000원 이하인 경우 에러", async () => {
    const logSpy = getLogSpy();

    // const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS_TO_END = ["100","1000"];

    // mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions([...INPUT_NUMBERS_TO_END]);

    // when
    const app = new App();
    await app.getInputMoney();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });

  test("1000원 단위가 아닌 경우 에러", async () => {
    const logSpy = getLogSpy();

    // const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS_TO_END = ["100","1000"];

    // mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions([...INPUT_NUMBERS_TO_END]);

    // when
    const app = new App();
    await app.getInputMoney();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });

  test("숫자가 아닌경우 에러", async () => {
    const logSpy = getLogSpy();

    // const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS_TO_END = ["asd","1000"];

    // mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions([...INPUT_NUMBERS_TO_END]);

    // when
    const app = new App();
    await app.getInputMoney();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });
});
