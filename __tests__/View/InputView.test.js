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
      expect(Console.readLineAsync).toBeCalledWith(INPUT_MESSAGE.lottoPurchaseAmount);
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

  describe("readLottoWinningNumbers 메서드 테스트", () => {
    test("readLottoWinningNumbers 메서드가 존재해야 한다.", () => {
      expect(typeof InputView.readLottoWinningNumbers).toBe("function");
    });

    test("readLottoWinningNumbers메서드가 호출되면 Console.readLineAsync가 호출되어야 한다.", () => {
      InputView.readLottoWinningNumbers();
      expect(Console.readLineAsync).toBeCalledWith(INPUT_MESSAGE.lottoWinningNumbers);
    });

    test("readLottoWinningNumbers메서드가 promise를 반환하고 그 resolve 값이 입력값이어야 한다.", async () => {
      const winningNumbersInput = "1,2,3,4,5,6";
      const resolvedPromise = Promise.resolve(winningNumbersInput);
      Console.readLineAsync.mockReturnValue(resolvedPromise);

      const winningNumbers = await InputView.readLottoWinningNumbers();
      expect(winningNumbers).toBe(winningNumbersInput);
    });
  });

  describe("readBonousNumber 메서드 테스트", () => {
    test("readBonousNumber 메서드가 존재해야 한다.", () => {
      expect(typeof InputView.readBonousNumber).toBe("function");
    });

    test("readBonousNumber메서드가 호출되면 Console.readLineAsync가 호출되어야 한다.", () => {
      InputView.readBonousNumber();
      expect(Console.readLineAsync).toBeCalledWith(INPUT_MESSAGE.lottoBonousNumber);
    });

    test("readBonousNumber메서드가 promise를 반환하고 그 resolve 값이 입력값이어야 한다.", async () => {
      const bonousNumberInput = "7";
      const resolvedPromise = Promise.resolve(bonousNumberInput);
      Console.readLineAsync.mockReturnValue(resolvedPromise);

      const bonousNumber = await InputView.readBonousNumber();
      expect(bonousNumber).toBe(bonousNumberInput);
    });
  });
});
