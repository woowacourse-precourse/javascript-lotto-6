import { MissionUtils } from "@woowacourse/mission-utils";

import inputView from "../src/views/Input";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("정상 입력 테스트", () => {
  beforeAll(() => {
    const input = ["1000", "1,2,3", "1"];
    mockQuestions(input);
  });

  test("구매금액을 입력하면 숫자로 반환한다.", async () => {
    const amount = await inputView.enterPurchaseAmount();
    expect(amount).toEqual(1000);
  });

  test("입력한 로또번호는 숫자로 전환된다.", async () => {
    const numbers = await inputView.returnValidNumber("2");
    expect(numbers).toEqual(2);
  });

  test("로또번호를 입력하면 숫자가 담긴 배열로 반환한다.", async () => {
    const numbers = await inputView.enterWinningNumber();
    expect(numbers).toContain(1, 2, 3);
  });

  test("보너스 번호를 입력하면 숫자로 반환한다.", async () => {
    const number = await inputView.enterBonusNumber();
    expect(number).toEqual(1);
  });
});

describe("구매금액 입력 예외 테스트", () => {
  beforeAll(() => {
    const input = ["", "1000", "abc", "1000"];
    mockQuestions(input);
  });

  let logSpy;
  beforeEach(() => {
    logSpy = getLogSpy();
  });

  afterEach(() => {
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });

  test("구매금액을 입력하지 않으면 예외가 발생한다.", async () => {
    await inputView.enterPurchaseAmount();
  });

  test("구매금액이 숫자인 문자가 아니면 예외가 발생한다", async () => {
    await inputView.enterPurchaseAmount();
  });
});

describe("로또번호 입력 예외 테스트", () => {
  beforeAll(() => {
    const input = ["1,2,", "1,2,3", "1,2,a", "1,2,3"];
    mockQuestions(input);
  });

  let logSpy;
  beforeEach(() => {
    logSpy = getLogSpy();
  });

  afterEach(() => {
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });

  test("로또번호를 입력하지 않으면 예외가 발생한다.", async () => {
    await inputView.enterWinningNumber();
  });

  test("로또번호가 숫자인 문자가 아니면 예외가 발생한다.", async () => {
    await inputView.enterWinningNumber();
  });
});

describe("보너스 번호 입력 예외 테스트", () => {
  beforeAll(() => {
    const input = ["", "1", "abc", "1"];
    mockQuestions(input);
  });

  let logSpy;
  beforeEach(() => {
    logSpy = getLogSpy();
  });

  test("보너스 번호를 입력하지 않으면 예외가 발생한다.", async () => {
    await inputView.enterBonusNumber();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });

  test("보너스 번호가 숫자인 문자가 아니면 예외가 발생한다.", async () => {
    await inputView.enterBonusNumber();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });
});
