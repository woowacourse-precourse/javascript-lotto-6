import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App.js";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

describe("로또 당첨 번호 입력 테스트", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test("1~45사이 서로다른 6자리 로또 당첨 번호 입력", async () => {
    // given
    const INPUT_WINNING_NUMBERS = ["1,2,3,4,5,6"];
    const RESULT = [1, 2, 3, 4, 5, 6];
    mockQuestions(INPUT_WINNING_NUMBERS);

    // when
    const app = new App();

    await app.inputWinningNumbers();

    // then

    expect(app.winningNumbers).toEqual(RESULT);
  });

  test("숫자가 아닌 입력이 있을 경우 에러 발생", async () => {
    // given
    const INPUT_WINNING_NUMBERS = ["1,2,3,4,oh,6"];
    mockQuestions(INPUT_WINNING_NUMBERS);

    // when
    const app = new App();

    // then
    await expect(app.inputWinningNumbers()).rejects.toThrow("[ERROR]");
  });

  test("입력된 숫자가 6개가 아닐 경우 에러 발생", async () => {
    // given
    const INPUT_WINNING_NUMBERS = ["1,2,3,4,6"];
    mockQuestions(INPUT_WINNING_NUMBERS);

    // when
    const app = new App();

    // then
    await expect(app.inputWinningNumbers()).rejects.toThrow("[ERROR]");
  });

  test("입력된 숫자가 1에서 45사이가 아닐 경우 에러 발생", async () => {
    // given
    const INPUT_WINNING_NUMBERS = ["1,2,3,4,123,6"];
    mockQuestions(INPUT_WINNING_NUMBERS);

    // when
    const app = new App();

    // then
    await expect(app.inputWinningNumbers()).rejects.toThrow("[ERROR]");
  });

  test("입력된 숫자중 중복된 숫자가 있을 경우", async () => {
    // given
    const INPUT_WINNING_NUMBERS = ["1,2,3,4,3,6"];
    mockQuestions(INPUT_WINNING_NUMBERS);

    // when
    const app = new App();

    // then
    await expect(app.inputWinningNumbers()).rejects.toThrow("[ERROR]");
  });
});
