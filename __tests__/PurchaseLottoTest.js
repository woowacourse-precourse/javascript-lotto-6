import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App.js";

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

describe("로또 구매 테스트", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test("구매 개수만큼 랜덤한 로또 구매 후 출력", async () => {
    // given
    const logSpy = getLogSpy();

    mockRandoms([
      [8, 21, 41, 23, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 35, 16, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 42, 43, 40],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ]);

    // when
    const app = new App();

    app.purchaseAmount = 8000;

    app.purchaseLotto();

    // then

    const logs = [
      "[8, 21, 23, 41, 42, 43]",
      "[3, 5, 11, 16, 32, 38]",
      "[7, 11, 16, 35, 36, 44]",
      "[1, 8, 11, 31, 41, 42]",
      "[13, 14, 16, 38, 42, 45]",
      "[7, 11, 30, 40, 42, 43]",
      "[2, 13, 22, 32, 38, 45]",
      "[1, 3, 5, 14, 22, 45]",
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
