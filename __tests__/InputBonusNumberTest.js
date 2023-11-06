import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App.js";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

describe("로또 보너스 번호 입력 테스트", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test("기존 당첨 번호와 중복되지 않는 1~45사이의 정상적인 숫자 입력", async () => {
    // given
    const INPUT_WINNING_NUMBERS = ["1,2,3,4,5,6", "7"];
    const RESULT = 7;
    mockQuestions(INPUT_WINNING_NUMBERS);

    // when
    const app = new App();

    await app.inputWinningNumbers();
    await app.inputBonusNumber();

    // then

    expect(app.bonusNumber).toEqual(RESULT);
  });

  test("입력된 숫자가 숫자가 아닐 경우", async () => {
    // given
    const INPUT_WINNING_NUMBERS = ["1,2,3,4,5,6", "oh"];
    mockQuestions(INPUT_WINNING_NUMBERS);

    // when
    const app = new App();

    await app.inputWinningNumbers();

    // then
    await expect(app.inputBonusNumber()).rejects.toThrow("[ERROR]");
  });

  test("입력된 숫자가 1~45사이가 아닐 경우", async () => {
    // given
    const INPUT_WINNING_NUMBERS = ["1,2,3,4,5,6", "123"];
    mockQuestions(INPUT_WINNING_NUMBERS);

    // when
    const app = new App();

    await app.inputWinningNumbers();

    // then
    await expect(app.inputBonusNumber()).rejects.toThrow("[ERROR]");
  });

  test("입력된 숫자가 당첨 번호와 중복 되는 경우", async () => {
    // given
    const INPUT_WINNING_NUMBERS = ["1,2,3,4,5,6", "5"];
    mockQuestions(INPUT_WINNING_NUMBERS);

    // when
    const app = new App();

    await app.inputWinningNumbers();

    // then
    await expect(app.inputBonusNumber()).rejects.toThrow("[ERROR]");
  });
});
