import App from "../src/App";
import { validateMoney } from "../src/validation/money";
import { getLogSpy, mockQuestions, mockRandoms } from "./ApplicationTest";

describe("결과 계산 테스트", () => {
  test("3개인 경우", async () => {
    const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS_TO_END = ["1000", "1,2,3,4,5,6"];

    mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions([...INPUT_NUMBERS_TO_END]);

    // when
    const app = new App();
    await app.setLottos("1000");
    const result = await app.getResult([1, 2, 3, 9, 10, 11], 7, 1000);

    // then
    expect(result).toEqual({
      prizeCounts: {
        3: 1,
        4: 0,
        5: 0,
        bonus: 0,
        6: 0,
      },
      rate: "500.0",
    });
  });

  test("4개인 경우", async () => {
    const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS_TO_END = ["1000", "1,2,3,4,5,6"];

    mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions([...INPUT_NUMBERS_TO_END]);

    // when
    const app = new App();
    await app.setLottos("1000");
    const result = await app.getResult([1, 2, 3, 4, 8, 9], 7, 1000);

    // then
    expect(result).toEqual({
      prizeCounts: {
        3: 0,
        4: 1,
        5: 0,
        bonus: 0,
        6: 0,
      },
      rate: "5000.0",
    });
  });

  test("5개인 경우, 보너스 X", async () => {
    const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS_TO_END = ["1000", "1,2,3,4,5,6"];

    mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions([...INPUT_NUMBERS_TO_END]);

    // when
    const app = new App();
    await app.setLottos("1000");
    const result = await app.getResult([5, 4, 3, 2, 1, 9], 7, 1000);

    // then
    expect(result).toEqual({
      prizeCounts: {
        3: 0,
        4: 0,
        5: 1,
        bonus: 0,
        6: 0,
      },
      rate: "150000.0",
    });
  });

  test("5개인 경우, 보너스 O", async () => {
    const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS_TO_END = ["1000", "1,2,3,4,5,6"];

    mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions([...INPUT_NUMBERS_TO_END]);

    // when
    const app = new App();
    await app.setLottos("1000");
    const result = await app.getResult([5, 4, 3, 2, 1, 45], 6, 1000);

    // then
    expect(result).toEqual({
      prizeCounts: {
        3: 0,
        4: 0,
        5: 0,
        bonus: 1,
        6: 0,
      },
      rate: "3000000.0",
    });
  });

  test("6개인 경우", async () => {
    const RANDOM_NUMBERS_TO_END = [10, 21, 13, 4, 45, 6];
    const INPUT_NUMBERS_TO_END = ["1000", "1,2,3,4,5,6"];

    mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions([...INPUT_NUMBERS_TO_END]);

    // when
    const app = new App();
    await app.setLottos("1000");
    const result = await app.getResult([13, 4, 45, 21, 10, 6], 11, 1000);

    // then
    expect(result).toEqual({
      prizeCounts: {
        3: 0,
        4: 0,
        5: 0,
        bonus: 0,
        6: 1,
      },
      rate: "200000000.0",
    });
  });

  test("2개 구입하여 3개, 4개인 경우", async () => {
    const RANDOM_NUMBERS_TO_END = [[1,2,3,4,5,6], [1,2,3,10,11,12]];
    const INPUT_NUMBERS_TO_END = ["2000", "1,2,3,4,5,6"];

    mockRandoms(RANDOM_NUMBERS_TO_END);
    mockQuestions([...INPUT_NUMBERS_TO_END]);

    // when
    const app = new App();
    await app.setLottos("2000");
    const result = await app.getResult([1,2,3,4,44,45], 43, 2000);

    // then
    expect(result).toEqual({
      prizeCounts: {
        3: 1,
        4: 1,
        5: 0,
        bonus: 0,
        6: 0,
      },
      rate: "2750.0",
    });
  });

  test("3개 구입하여 3개, 4개, 보너스인 경우", async () => {
    const RANDOM_NUMBERS_TO_END = [[1,2,3,4,5,6], [1,2,3,10,11,12], [1,2,3,4,44,43]];
    const INPUT_NUMBERS_TO_END = ["2000", "1,2,3,4,5,6"];

    mockRandoms(RANDOM_NUMBERS_TO_END);
    mockQuestions([...INPUT_NUMBERS_TO_END]);

    // when
    const app = new App();
    await app.setLottos("3000");
    const result = await app.getResult([1,2,3,4,44,45], 43, 3000);

    // then
    expect(result).toEqual({
      prizeCounts: {
        3: 1,
        4: 1,
        5: 0,
        bonus: 1,
        6: 0,
      },
      rate: "1001833.3",
    });
  });
});
