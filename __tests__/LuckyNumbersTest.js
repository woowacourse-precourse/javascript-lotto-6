import LuckyNumbers from "../src/LuckyNumbers.js";
import { Console } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("당첨 번호 입력 테스트", () => {
  const runException = async (input) => {
    // given
    const logSpy = getLogSpy();
    const INPUT_NUMBERS_TO_END = ["1,2,3,4,5,6"];

    mockQuestions([input, ...INPUT_NUMBERS_TO_END]);

    // when
    const luckyNumbers = new LuckyNumbers();
    await luckyNumbers.setWinningNumbers();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  };

  test("당첨 번호 개수 오류", async () => {
    await runException("1, 2, 3, 4, 5, 6, 7");
  });

  test("중복 오류", async () => {
    await runException("1, 1, 3, 4, 5, 6");
  });

  test("공백 입력", async () => {
    await runException("1,, 3, 4, 5, 6");
  });

  test("숫자가 아닌 것을 입력한 경우", async () => {
    await runException("1, 가, 3, 4, 5, 6");
  });

  test("입력값이 정수가 아닌 경우", async () => {
    await runException("1.5, 2, 3, 4, 5, 6");
  });

  test("1부터 45 사이의 숫자가 아닌 경우", async () => {
    await runException("1, 2, 3, 100, 5, 6");
  });
});

describe("보너스 번호 입력 테스트", () => {
  const runException = async (input) => {
    // given
    const logSpy = getLogSpy();
    const INPUT_NUMBER_TO_END = "7";

    mockQuestions(["1,2,3,4,5,6", input, INPUT_NUMBER_TO_END]);

    // when
    const luckyNumbers = new LuckyNumbers();
    await luckyNumbers.setWinningNumbers();
    await luckyNumbers.setBonusNumber();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  };

  test("공백 입력", async () => {
    await runException("");
  });

  // test("숫자가 아닌 것을 입력한 경우",async () => {
  //   expect(() => {
  //     luckyNumbers.setBonusNumber("hi");
  //   }).toThrow(ERRORS.NOT_NUMBER);
  // });

  // test("입력값이 정수가 아닌 경우",async () => {
  //   expect(() => {
  //     luckyNumbers.setBonusNumber("1.5");
  //   }).toThrow(ERRORS.NOT_INTEGER);
  // });

  // test("1부터 45 사이의 숫자가 아닌 경우",async () => {
  //   expect(() => {
  //     luckyNumbers.setBonusNumber("46");
  //   }).toThrow(ERRORS.NUMBER_RANGE_ALERT);
  // });

  // test("보너스 번호가 당첨 번호에 속하는 경우",async () => {
  //   luckyNumbers.setWinningNumbers("1,2,3,4,5,6");
  //   expect(() => {
  //     luckyNumbers.setBonusNumber("6");
  //   }).toThrow(ERRORS.BONUS_NUMBER_DUPLICATE);
  // });
});
