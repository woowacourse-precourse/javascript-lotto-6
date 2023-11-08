import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App.js";

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

describe("로또 구매 금액 입력 테스트", () => {
  test("1000원 단위로 입력할 경우 App인스턴스에 구매 금액 저장", async () => {
    const INPUT_PURCHASE_AMOUNT = ["11000"];
    const RESULT = 11000;

    mockQuestions(INPUT_PURCHASE_AMOUNT);

    const app = new App();

    await app.inputPurchaseAmount();

    expect(app.purchaseAmount).toEqual(RESULT);
  });

  test("1000원 단위가 아닐경우 에러 발생", async () => {
    const logSpy = getLogSpy();

    const INPUT_PURCHASE_AMOUNT = ["11500", "1000"];

    mockQuestions(INPUT_PURCHASE_AMOUNT);

    const app = new App();

    await app.inputPurchaseAmount();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });

  test("숫자가 아닐경우 에러 발생", async () => {
    const logSpy = getLogSpy();
    const INPUT_PURCHASE_AMOUNT = ["money", "1000"];

    mockQuestions(INPUT_PURCHASE_AMOUNT);

    const app = new App();

    await app.inputPurchaseAmount();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });
});
