import { Console, MissionUtils } from "@woowacourse/mission-utils";
import Game from "../src/Game";
import Lotto from "../src/Lotto";

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

describe("Game 클래스 관련 테스트", () => {
  describe("금액 입력 관련 테스트", () => {
    test("금액 입력 테스트", async () => {
      mockQuestions(["8000"]);
      const game = new Game();
      await game.getMoney();

      expect(game.lottos.length).toEqual(8);
    });

    test("금액 입력 오류 테스트(1000원으로 나누어 떨어지지 않는 경우)", async () => {
      const game = new Game();

      mockQuestions(["150"]);

      await expect(game.getMoney()).rejects.toThrow("[ERROR]");
    });

    test("금액 입력 오류 테스트(숫자가 아닌 값이 입력된 경우)", async () => {
      const game = new Game();

      mockQuestions(["금액"]);

      await expect(game.getMoney()).rejects.toThrow("[ERROR]");
    });
  });

  describe("당첨 번호 입력 관련 테스트", () => {
    test("당첨 번호 입력 테스트", async () => {
      mockQuestions(["1,2,3,4,5,6"]);
      const game = new Game();
      await game.getChoiceNumbers();

      expect(game.choice.numbers).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test("당첨 번호 입력 오류 테스트(입력한 번호가 6개 미만일 때)", async () => {
      const game = new Game();

      mockQuestions(["1,2,3,4,5"]);

      await expect(game.getChoiceNumbers()).rejects.toThrow("[ERROR]");
    });

    test("당첨 번호 입력 오류 테스트(입력한 번호가 6개 초과일 때)", async () => {
      const game = new Game();

      mockQuestions(["1,2,3,4,5,6,7"]);

      await expect(game.getChoiceNumbers()).rejects.toThrow("[ERROR]");
    });

    test("당첨 번호 입력 오류 테스트(입력한 번호가 1과 45 사이의 수가 아닐 때)", async () => {
      const game = new Game();

      mockQuestions(["0, 1, 2, 3, 4, 5"]);

      await expect(game.getChoiceNumbers()).rejects.toThrow("[ERROR]");
    });

    test("당첨 번호 입력 오류 테스트(입력한 번호가 수가 아닐 때)", async () => {
      const game = new Game();

      mockQuestions(["0, 1, 2, 3, 4, 오"]);

      await expect(game.getChoiceNumbers()).rejects.toThrow("[ERROR]");
    });
  });

  describe("보너스 번호 입력 관련 테스트", () => {
    test("보너스 번호 입력 테스트", async () => {
      mockQuestions(["7"]);
      const game = new Game();
      await game.getBonusNumber();

      expect(game.bonus).toEqual(7);
    });

    test("보너스 번호 입력 오류 테스트(입력한 번호가 1과 45 사이의 수가 아닐 때)", async () => {
      const game = new Game();

      mockQuestions(["0"]);

      await expect(game.getChoiceNumbers()).rejects.toThrow("[ERROR]");
    });

    test("보너스 번호 입력 오류 테스트(입력한 번호가 수가 아닐 때)", async () => {
      const game = new Game();

      mockQuestions(["오"]);

      await expect(game.getChoiceNumbers()).rejects.toThrow("[ERROR]");
    });

    test("보너스 번호 입력 오류 테스트(당첨 번호와 중복되는 번호일 때)", async () => {
      const game = new Game();

      mockQuestions(["1,2,3,4,5,6", "1"]);
      await game.getChoiceNumbers();
      await expect(game.getBonusNumber()).rejects.toThrow("[ERROR]");
    });
  });

  describe("당첨 결과 관련 테스트", () => {
    test("당첨 결과 출력 테스트", async () => {
      const game = new Game();
      const logSpy = getLogSpy();

      mockQuestions(["8000", "1,2,3,4,5,6", "7"]);
      mockRandoms([
        [8, 21, 23, 41, 42, 43],
        [3, 5, 11, 16, 32, 38],
        [7, 11, 16, 35, 36, 44],
        [1, 8, 11, 31, 41, 42],
        [13, 14, 16, 38, 42, 45],
        [7, 11, 30, 40, 42, 43],
        [2, 13, 22, 32, 38, 45],
        [1, 3, 5, 14, 22, 45],
      ]);

      const logs = [
        "8개를 구매했습니다.",
        "[8, 21, 23, 41, 42, 43]",
        "[3, 5, 11, 16, 32, 38]",
        "[7, 11, 16, 35, 36, 44]",
        "[1, 8, 11, 31, 41, 42]",
        "[13, 14, 16, 38, 42, 45]",
        "[7, 11, 30, 40, 42, 43]",
        "[2, 13, 22, 32, 38, 45]",
        "[1, 3, 5, 14, 22, 45]",
        "3개 일치 (5,000원) - 1개",
        "4개 일치 (50,000원) - 0개",
        "5개 일치 (1,500,000원) - 0개",
        "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
        "6개 일치 (2,000,000,000원) - 0개",
      ];

      await game.getMoney();
      await game.getChoiceNumbers();
      await game.getBonusNumber();

      game.printLottos();
      game.getResult();

      logs.forEach((log) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
      });
    });

    test("수익률 출력 테스트", async () => {
      const game = new Game();
      const logSpy = getLogSpy();

      mockQuestions(["8000", "1,2,3,4,5,6", "7"]);
      mockRandoms([
        [8, 21, 23, 41, 42, 43],
        [3, 5, 11, 16, 32, 38],
        [7, 11, 16, 35, 36, 44],
        [1, 8, 11, 31, 41, 42],
        [13, 14, 16, 38, 42, 45],
        [7, 11, 30, 40, 42, 43],
        [2, 13, 22, 32, 38, 45],
        [1, 3, 5, 14, 22, 45],
      ]);

      const logs = [
        "8개를 구매했습니다.",
        "[8, 21, 23, 41, 42, 43]",
        "[3, 5, 11, 16, 32, 38]",
        "[7, 11, 16, 35, 36, 44]",
        "[1, 8, 11, 31, 41, 42]",
        "[13, 14, 16, 38, 42, 45]",
        "[7, 11, 30, 40, 42, 43]",
        "[2, 13, 22, 32, 38, 45]",
        "[1, 3, 5, 14, 22, 45]",
        "3개 일치 (5,000원) - 1개",
        "4개 일치 (50,000원) - 0개",
        "5개 일치 (1,500,000원) - 0개",
        "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
        "6개 일치 (2,000,000,000원) - 0개",
        "총 수익률은 62.5%입니다.",
      ];

      await game.getMoney();
      await game.getChoiceNumbers();
      await game.getBonusNumber();

      game.printLottos();
      game.getResult();

      logs.forEach((log) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
      });
    });
  });
});
