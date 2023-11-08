import { MissionUtils } from "@woowacourse/mission-utils";
import GameModel from "../src/LottoGame/GameModel.js";
import App from "../src/App.js";

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

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("로또 생성 및 출력 테스트", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test("BUYING_MONEY 상수 확인", async () => {
    const mockData = "3000";
    // when
    const model = new GameModel();
    await model.lottoCount(mockData);

    // then
    expect(model.LOTTO_COUNT).toBe(3);
  });

  test("로또 생성 갯수 확인", async () => {
    const mockData = "3000";
    // when
    const model = new GameModel();
    await model.lottoCount(mockData);
    await model.generateLotto(model.LOTTO_COUNT);

    // then
    expect(model.LOTTOS.length).toBe(3);
  });

  test("LOTTOS 확인", async () => {
    mockRandoms([[1, 2, 3, 4, 5, 6]]);
    mockQuestions(["1000", "1,2,3,4,5,6", "7"]);

    const printLottos = [1, 2, 3, 4, 5, 6];
    // when
    const app = new App();
    const model = new GameModel();
    await app.play();

    // then
    if (model.LOTTOS[0]) {
      expect(model.LOTTOS[0].getLottoNumber()).toEqual(printLottos);
    }
  });

  test("LOTTOS 출력 확인", async () => {
    const logSpy = getLogSpy();

    mockRandoms([
      [1, 2, 3, 4, 5, 6],
      [12, 2, 31, 4, 5, 6],
    ]);
    mockQuestions(["2000", "1,2,3,4,5,6", "7"]);

    const printLottos = ["[1, 2, 3, 4, 5, 6]", "[12, 2, 31, 4, 5, 6]"];
    // when
    const app = new App();
    await app.play();

    // then
    printLottos.forEach((lotto) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(lotto));
    });
  });
});
