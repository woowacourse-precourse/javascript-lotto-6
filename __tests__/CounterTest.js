import { MissionUtils } from "@woowacourse/mission-utils";
import { Counter } from "../src/Counter.js";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe("구입 금액에 따른 로또 개수 테스트", () => {
  test("구입 금액에 따라 올바른 개수의 로또를 발행한다.", () => {
    const logSpy = getLogSpy();

    const INPUT = "10000";
    const counter = new Counter(INPUT);
    counter.lottoCountPrinter();

    const log = "10개를 구매했습니다."

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
  });

  test("구매한 로또를 모두 출력한다.", async () => {
    //given
    const logSpy = getLogSpy();
  
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
  
    const money = "8000";
  
    //when
    const counter = new Counter(money);
    counter.lottosPrinter();
  
    //then
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
  })

  test.each([
    [["만 원"]],
    [["10000.0"]],
    [["-500"]],
    [["0b101"]],
    [["1E3"]],
  ])("입력이 숫자가 아닐 경우, 에러가 발생한다.", (inputs) => {

    expect(() => {new Counter(inputs)}).toThrow("[ERROR]");
  });

  test("구입 금액이 로또 금액으로 나눠 떨어지지 않을 경우, 에러가 발생한다.", () => {
    const INPUT = "5500";

    expect(() => {new Counter(INPUT)}).toThrow("[ERROR]");
  });
});