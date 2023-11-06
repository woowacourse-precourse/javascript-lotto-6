import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App.js";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

describe("로또 구매 금액 입력 테스트", () => {
  test("1000원 단위로 입력할 경우 구매할 개수를 반환", () => {
    const INPUT_PURCHASE_AMOUNT = ["11000"];
    const RESULT = 11;
    mockQuestions(INPUT_PURCHASE_AMOUNT);

    const app = new App();

    const purchaseAmount = app.inputPurchaseAmount();

    expect(purchaseAmount).toEqual(RESULT);
  });

  test("1000원 단위가 아닐경우 에러 발생", () => {
    const INPUT_PURCHASE_AMOUNT = ["11500"];

    mockQuestions(INPUT_PURCHASE_AMOUNT);

    const app = new App();

    expect(() => {
      app.inputPurchaseAmount();
    }).toThrow("[ERROR]");
  });
});
