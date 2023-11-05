import { Console, Random } from "@woowacourse/mission-utils";
import Input from "../src/view/Input";
import Output from "../src/view/Output";
import Player from "../src/model/Player";
import LottoGame from "../src/LottoGame";

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickUniqueNumbersInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("Output class 출력 테스트", () => {
  test("사용자가 로또를 8개 구입했을때 출력 테스트", async () => {
    //given
    const INPUT_STRING = ["8000"];
    const logSpy = getLogSpy();

    //when
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
    mockQuestions(INPUT_STRING);

    //then
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
    ];
    const money = await Input.getMoney();
    const player = new Player(money);
    Output.printLotto(player);
    logs.forEach((log) =>
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log))
    );
  });

  test("당첨 금액과 수익률 출력 테스트", async () => {
    //given
    const logSpy = getLogSpy();

    //when
    const game = new LottoGame();
    game.print([0, 0, 0, 0, 0, 1], "50.0");

    //then
    const logs = [
      "당첨 통계",
      "---",
      "3개 일치 (5,000원) - 1개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 0개",
      "총 수익률은 50.0% 입니다.",
    ];

    logs.forEach((log) =>
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log))
    );
  });
});
