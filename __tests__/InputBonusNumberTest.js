import App from "../src/App";
import { validateMoney } from "../src/validation/money";
import { getLogSpy, mockQuestions, mockRandoms } from "./ApplicationTest";

describe("보너스 번호 입력 테스트", () => {
  test("당첨번호 중복인 경우 에러 발생", async () => {
    const logSpy = getLogSpy();

    // const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS_TO_END = ["1","45"];

    // mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions([...INPUT_NUMBERS_TO_END]);

    // when
    const app = new App();
    await app.getBonusNumber([1,2,3,4,5,6]);

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });

  test("숫자가 1~45 밖인 경우 에러 발생", async () => {
    const logSpy = getLogSpy();

    // const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS_TO_END = ["-10","45"];

    // mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions([...INPUT_NUMBERS_TO_END]);

    // when
    const app = new App();
    await app.getBonusNumber([1,2,3,4,5,6]);

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });

  test("숫자가 아닌 경우 에러 발생", async () => {
    const logSpy = getLogSpy();

    // const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS_TO_END = ["asd","45"];

    // mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions([...INPUT_NUMBERS_TO_END]);

    // when
    const app = new App();
    await app.getBonusNumber([1,2,3,4,5,6]);

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });

  test("입력하지 않은 경우 에러 발생", async () => {
    const logSpy = getLogSpy();

    // const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS_TO_END = ['',"45"];

    // mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions([...INPUT_NUMBERS_TO_END]);

    // when
    const app = new App();
    await app.getBonusNumber([1,2,3,4,5,6]);

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });

  test("정수가 아닌 경우 에러 발생", async () => {
    const logSpy = getLogSpy();

    // const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS_TO_END = ["3.14","45"];

    // mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions([...INPUT_NUMBERS_TO_END]);

    // when
    const app = new App();
    await app.getBonusNumber([1,2,3,4,5,6]);

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });
  
});
