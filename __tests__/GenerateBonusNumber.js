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
});
