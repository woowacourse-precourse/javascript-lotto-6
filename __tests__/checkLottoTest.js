import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

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

describe("로또 당첨 결과 테스트", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test("각 로또의 등수대로 결과 배열에 잘 들어가는 지 확인", async () => {
    // given
    mockRandoms([
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 5, 8],
      [1, 2, 3, 4, 8, 9],
      [1, 2, 3, 8, 9, 10],
      [1, 2, 8, 9, 10, 11],
      [1, 8, 9, 10, 11, 12],
      [8, 9, 10, 11, 12, 13],
    ]);
    mockQuestions(["8000", "1,2,3,4,5,6", "7"]);
    const RESULT = [3, 1, 1, 1, 1, 1];

    // when
    const app = new App();
    await app.play();

    // then

    expect(app.lottoResult).toEqual(RESULT);
  });
});
