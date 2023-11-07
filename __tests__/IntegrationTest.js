import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickUniqueNumbersInRange
  );
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

// eslint-disable-next-line
describe("통합 테스트", () => {
  // eslint-disable-next-line
  test("통합 테스트", async () => {
    const answers = ["300", "3000", "0,8,21", "8,21,23,42,43,45", "46", "41"];
    const randoms = [
      [8, 21, 23, 41, 42, 43],
      [7, 23, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
    ];
    const outputs = [
      "3개를 구매했습니다.",
      "[8, 21, 23, 41, 42, 43]",
      "[7, 23, 30, 40, 42, 43]",
      "[2, 13, 22, 32, 38, 45]",
      "3개 일치 (5,000원) - 1개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 1개",
      "6개 일치 (2,000,000,000원) - 0개",
      "총 수익률은 1000166.7%입니다.",
    ];
    mockQuestions(answers);
    mockRandoms(randoms);
    const logSpy = getLogSpy();

    const app = new App();
    await app.play();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
