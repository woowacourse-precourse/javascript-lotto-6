import User from "../src/User.js";
import LottoManager from "../src/LottoManager.js";
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

const runException = async (input) => {
  // given
  const logSpy = getLogSpy();
  const INPUT_NUMBERS_TO_END = ["1000"];

  mockQuestions([input, ...INPUT_NUMBERS_TO_END]);

  // when
  const user = new User();
  await user.buyLotto();

  // then
  expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
};

describe("구입 금액 입력 테스트", () => {
  test("공백 입력", async () => {
    await runException("");
  });

  test("문자열 입력", async () => {
    await runException("hi");
  });

  test("구입 금액이 1000원 단위가 아닌 경우", async () => {
    await runException("1500");
  });

  test("로또 구입 개수 테스트", async () => {
    // given
    mockQuestions(["8000"]);

    // when
    const user = new User();
    const lottoManager = new LottoManager();
    lottoManager.setUser(user);

    await user.buyLotto();
    lottoManager.calculateLottoCount();

    // then
    expect(lottoManager.lottoCount).toBe(8);
  });
});
