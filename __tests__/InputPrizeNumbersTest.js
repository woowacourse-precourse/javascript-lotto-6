import App from "../src/App";
import { validateMoney } from "../src/validation/money";
import { getLogSpy, mockQuestions, mockRandoms } from "./ApplicationTest";

describe("당첨 번호 입력 테스트", () => {
  test("당첨 번호 6개 초과된 경우 에러 발생", async () => {
    const logSpy = getLogSpy();

    // const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS_TO_END = ["1,2,3,4,5,6,7","1,2,3,4,5,6"];

    // mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions([...INPUT_NUMBERS_TO_END]);

    // when
    const app = new App();
    await app.getNumbers();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });

  test("당첨 번호 6개 미만인 경우 에러 발생", async () => {
    const logSpy = getLogSpy();

    // const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS_TO_END = ["1,2,3,4,5","1,2,3,4,5,6"];

    // mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions([...INPUT_NUMBERS_TO_END]);

    // when
    const app = new App();
    await app.getNumbers();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });

  test("당첨 번호 중 숫자가 아닌 경우 에러 발생", async () => {
    const logSpy = getLogSpy();

    // const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS_TO_END = ["1,2,3,4,5,asd","1,2,3,4,5,6"];

    // mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions([...INPUT_NUMBERS_TO_END]);

    // when
    const app = new App();
    await app.getNumbers();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });

  test("당첨 번호 중 1~45가 아닌 경우 에러 발생", async () => {
    const logSpy = getLogSpy();

    // const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS_TO_END = ["1,2,3,4,5,0","1,2,3,4,5,6"];

    // mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions([...INPUT_NUMBERS_TO_END]);

    // when
    const app = new App();
    await app.getNumbers();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });

  test("당첨 번호 중 중복인 경우 에러 발생", async () => {
    const logSpy = getLogSpy();

    // const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS_TO_END = ["1,2,3,4,5,5","1,2,3,4,5,6"];

    // mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions([...INPUT_NUMBERS_TO_END]);

    // when
    const app = new App();
    await app.getNumbers();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });

  test("당첨 번호 중 정수가 아닌 경우 에러 발생", async () => {
    const logSpy = getLogSpy();

    // const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS_TO_END = ["1,2,3,4,5,1.1","1,2,3,4,5,6"];

    // mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions([...INPUT_NUMBERS_TO_END]);

    // when
    const app = new App();
    await app.getNumbers();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });

});
