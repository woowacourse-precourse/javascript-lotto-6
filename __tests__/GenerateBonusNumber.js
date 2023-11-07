import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App.js";
import GameModel from "../src/LottoGame/GameModel.js";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe("보너스 번호 생성", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test("보너스 번호가 숫자가 아닌 경우", async () => {
    mockRandoms([[1, 2, 3, 4, 5, 6]]);
    mockQuestions(["1000", "1,2,3,4,5,6", "ㅂ"]);
    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow("[ERROR] 숫자만 입력이 가능합니다.");
  });

  test("보너스 번호가 유효 범위의 숫자가 아닌 경우", async () => {
    mockRandoms([[1, 2, 3, 4, 5, 6]]);
    mockQuestions(["1000", "1,2,3,4,5,6", "55"]);
    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow("[ERROR] 1에서 45 사이에 숫자만 입력이 가능합니다.");
  });

  test("보너스 번호가 중복된 숫자의 경우", async () => {
    mockRandoms([[1, 2, 3, 4, 5, 6]]);
    mockQuestions(["1000", "1,2,3,4,5,6", "5"]);
    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow("[ERROR] 당첨 번호와 중복되지 않은 숫자만 입력이 가능한니다.");
  });

  test("BONUS_NUMBER 상수 확인", async () => {
    const winningNumberMockData = [1, 2, 3, 4, 5, 6];
    const bonusNumberMockData = [2];
    // when
    const model = new GameModel();
    model.generateWinningNumber(winningNumberMockData);
    model.generateBonusNumber(bonusNumberMockData);

    // then
    expect(model.BONUS_NUMBER).toBe(2);
  });
});
