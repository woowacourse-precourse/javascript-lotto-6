import { Console } from "@woowacourse/mission-utils";
import InputView from "../../src/View/InputView.js";
import { INPUT_MESSAGE } from "../../src/constants/message.js";

Console.readLineAsync = jest.fn();

describe("InputView 객체 테스트", () => {
  describe("readLottoPurchaseAmount 메서드 테스트", () => {
    test("readLottoPurchaseAmount 메서드가 존재해야 한다.", () => {
      // then
      expect(typeof InputView.readLottoPurchaseAmount).toBe("function");
    });

    test("readLottoPurchaseAmount 메서드가 호출되면 Console.readLineAsync가 호출되어야 한다.", () => {
      // when
      InputView.readLottoPurchaseAmount();
      // tehn
      expect(Console.readLineAsync).toBeCalledWith(INPUT_MESSAGE.PURCHASE_LOTTO);
    });

    test("readLottoPurchaseAmount 메서드가 promise를 반환하고 그 resolve 값이 입력값이어야 한다.", async () => {
      // given
      const purchaseAmountInput = 3000;
      const resolvedPromise = Promise.resolve(purchaseAmountInput);
      Console.readLineAsync.mockReturnValue(resolvedPromise);
      // when
      const purchaseAmount = await InputView.readLottoPurchaseAmount();
      // then
      expect(purchaseAmount).toBe(purchaseAmountInput);
    });
  });
});
