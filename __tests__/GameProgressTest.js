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

describe("GameProgess Test", () => {
  test("로또가 1번 생길 수 있을 때 이 1한번을 3개를 정확하게 일치하는 지 확인", async () => {
    // given
    const logSpy = getLogSpy();

    mockRandoms([[1, 2, 3, 4, 5, 6]]);
    mockQuestions(["1000", "1,2,3,7,8,9", "11"]);

    // when
    const app = new App();
    await app.play();

    // then
    const logs = [
      "1개를 구매했습니다.",
      "[1, 2, 3, 4, 5, 6]",
      "3개 일치 (5,000원) - 1개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 0개",
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("로또가 1번 생길 수 있을 때 이 1한번을 4개를 정확하게 일치하는 지 확인", async () => {
    // given
    const logSpy = getLogSpy();

    mockRandoms([[1, 2, 3, 4, 5, 6]]);
    mockQuestions(["1000", "1,2,3,4,8,9", "11"]);

    // when
    const app = new App();
    await app.play();

    // then
    const logs = [
      "1개를 구매했습니다.",
      "[1, 2, 3, 4, 5, 6]",
      "3개 일치 (5,000원) - 0개",
      "4개 일치 (50,000원) - 1개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 0개",
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("로또가 1번 생길 수 있을 때 이 1한번을 5개를 정확하게 일치하는 지 확인", async () => {
    // given
    const logSpy = getLogSpy();

    mockRandoms([[1, 2, 3, 4, 5, 6]]);
    mockQuestions(["1000", "1,2,3,4,5,9", "11"]);

    // when
    const app = new App();
    await app.play();

    // then
    const logs = [
      "1개를 구매했습니다.",
      "[1, 2, 3, 4, 5, 6]",
      "3개 일치 (5,000원) - 0개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 1개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 0개",
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("로또가 1번 생길 수 있을 때 이 1한번을 5개에 뽀너스 까지를 정확하게 일치하는 지 확인", async () => {
    // given
    const logSpy = getLogSpy();

    mockRandoms([[1, 2, 3, 4, 5, 6]]);
    mockQuestions(["1000", "1,2,3,4,5,9", "6"]);

    // when
    const app = new App();
    await app.play();

    // then
    const logs = [
      "1개를 구매했습니다.",
      "[1, 2, 3, 4, 5, 6]",
      "3개 일치 (5,000원) - 0개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 1개",
      "6개 일치 (2,000,000,000원) - 0개",
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("로또가 1번 생길 수 있을 때 이 1한번을 6개를 정확하게 일치하는 지 확인", async () => {
    // given
    const logSpy = getLogSpy();

    mockRandoms([[1, 2, 3, 4, 5, 6]]);
    mockQuestions(["1000", "1,2,3,4,5,6", "11"]);

    // when
    const app = new App();
    await app.play();

    // then
    const logs = [
      "1개를 구매했습니다.",
      "[1, 2, 3, 4, 5, 6]",
      "3개 일치 (5,000원) - 0개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 1개",
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
