import { Console } from "@woowacourse/mission-utils";
import {
  NoInputError,
  NotNumberError,
  InvalidAmountRangeError,
  InvalidAmountUnitError,
  InvalidLottoNumberCountError,
  DuplicatedNumberError,
  InvalidBonusNumberCountError,
  InvalidNumberRangeError,
  NotIntegerError,
} from "../../src/utils/Error.js";
import InputView from "../../src/View/InputView.js";
import { INPUT_MESSAGE } from "../../src/constants/message.js";

Console.readLineAsync = jest.fn();

let inputView;

describe("InputView 객체 테스트", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    inputView = new InputView();
  });
  describe("readLottoPurchaseAmount 메서드 테스트", () => {
    test("readLottoPurchaseAmount 메서드가 존재해야 한다.", () => {
      // then
      expect(typeof inputView.readLottoPurchaseAmount).toBe("function");
    });

    test("readLottoPurchaseAmount 메서드가 호출되면 Console.readLineAsync가 호출되어야 한다.", () => {
      // given
      Console.readLineAsync.mockReturnValue(5000);

      // when
      inputView.readLottoPurchaseAmount();

      // then
      expect(Console.readLineAsync).toBeCalledWith(INPUT_MESSAGE.lottoPurchaseAmount);
    });

    test("readLottoPurchaseAmount 메서드가 promise를 반환하고 그 resolve 값이 입력값이어야 한다.", async () => {
      // given
      const purchaseAmountInput = 3000;
      const resolvedPromise = Promise.resolve(purchaseAmountInput);
      Console.readLineAsync.mockReturnValue(resolvedPromise);

      // when
      const purchaseAmount = await inputView.readLottoPurchaseAmount();

      // then
      expect(purchaseAmount).toBe(purchaseAmountInput);
    });

    describe("lottoPurchaseAmount값에 대한 validation 테스트", () => {
      test.each([
        [
          "아무 입력이 없다면 NoInputError를 throw", 
          "", 
          NoInputError
        ],
        [
          "입력된 값이 숫자가 아니라면 NotNumberError를 throw",
          "a",
          NotNumberError
        ],
        [
          "입력된 값이 1000보다 작다면 InvalidAmountRangeError를 throw",
          "-8000",
          InvalidAmountRangeError,
        ],
        [
          "입력된 값이 1000으로 나누어 떨어지지 않는다면 InvalidAmountUnitError를 throw",
          "48500",
          InvalidAmountUnitError,
        ],
      ])("lottoPurchaseAmount값에 %s 해야한다.", async (description, purchaseAmount, error) => {
        // given
        Console.readLineAsync.mockReturnValue(purchaseAmount);

        // when-then
        await expect(inputView.readLottoPurchaseAmount()).rejects.toThrow(error);
      });
    });
  });

  describe("readLottoWinningNumbers 메서드 테스트", () => {
    test("readLottoWinningNumbers 메서드가 존재해야 한다.", () => {
      // then
      expect(typeof inputView.readLottoWinningNumbers).toBe("function");
    });

    test("readLottoWinningNumbers메서드가 호출되면 Console.readLineAsync가 호출되어야 한다.", () => {
      // given
      const winningNumbersInput = "1,2,3,4,5,6";
      const resolvedPromise = Promise.resolve(winningNumbersInput);
      Console.readLineAsync.mockReturnValue(resolvedPromise);

      // when
      inputView.readLottoWinningNumbers();

      // then
      expect(Console.readLineAsync).toBeCalledWith(INPUT_MESSAGE.lottoWinningNumbers);
    });

    test("readLottoWinningNumbers메서드가 promise를 반환하고 그 resolve 값이 입력값이어야 한다.", async () => {
      // given
      const winningNumbersInput = "1,2,3,4,5,6";
      const winningNumberList = [1, 2, 3, 4, 5, 6];
      const resolvedPromise = Promise.resolve(winningNumbersInput);
      Console.readLineAsync.mockReturnValue(resolvedPromise);

      // when
      const winningNumbers = await inputView.readLottoWinningNumbers();

      // then
      expect(winningNumbers).toEqual(winningNumberList);
    });
    describe("lottoWinningNumbers값에 대한 validation 테스트", () => {
      test.each([
        [
          "6자리 숫자가 들어오지 않으면 InvalidLottoNumberCountError를 throw",
          "1, 2, 3, 4, 5, 6, 7",
          InvalidLottoNumberCountError,
        ],
        [
          "중복된 숫자가 존재하면 DuplicatedNumberError를 throw",
          "1, 2, 3, 4, 5, 1",
          DuplicatedNumberError,
        ],
        [
          "숫자가 아닌 값이 존재하면 NotNumberError를 throw",
          "1, 2, 3, 4, 5, a",
          NotNumberError
        ],
        [
          "45보다 큰 값이 존재하면 InvalidNumberRangeError를 throw",
          "1, 2, 3, 4, 5, 46",
          InvalidNumberRangeError,
        ],
        [
          "1보다 작은 값이 존재하면 InvalidNumberRangeError를 throw",
          "1, 2, 3, 4, 5, -7",
          InvalidNumberRangeError,
        ],
        [
          "정수가 아닌 값이 존재하면 NotIntegerError를 throw",
          "1, 2, 3, 4, 5, 6.5",
          NotIntegerError,
        ],
      ])("lottoWinningNumbers값에 %s 해야한다.", async (description, lottoNumbers, error) => {
        // given
        Console.readLineAsync.mockReturnValue(lottoNumbers);

        // when-then
        await expect(inputView.readLottoWinningNumbers()).rejects.toThrow(error);
      });
    });
  });

  describe("readBonusNumber 메서드 테스트", () => {
    test("readBonusNumber 메서드가 존재해야 한다.", () => {
      // then
      expect(typeof inputView.readBonusNumber).toBe("function");
    });

    test("readBonusNumber메서드가 호출되면 Console.readLineAsync가 호출되어야 한다.", () => {
      // given
      const bonusNumberInput = "7";
      const resolvedPromise = Promise.resolve(bonusNumberInput);
      Console.readLineAsync.mockReturnValue(resolvedPromise);
      const lottoWinningNumbers = [1, 2, 3, 4, 5, 6];

      // when
      inputView.readBonusNumber(lottoWinningNumbers);

      // then
      expect(Console.readLineAsync).toBeCalledWith(INPUT_MESSAGE.lottoBonusNumber);
    });

    test("readBonusNumber메서드가 promise를 반환하고 그 resolve 값이 입력값이어야 한다.", async () => {
      // given
      const bonusNumberInput = "7";
      const NumberedBonusNumber = [7];
      const resolvedPromise = Promise.resolve(bonusNumberInput);
      Console.readLineAsync.mockReturnValue(resolvedPromise);
      const lottoWinningNumbers = [1, 2, 3, 4, 5, 6];

      // when
      const bonusNumber = await inputView.readBonusNumber(lottoWinningNumbers);

      // then
      expect(bonusNumber).toEqual(NumberedBonusNumber);
    });

    describe("bonousNumber값에 대한 validation 테스트", () => {
      test.each([
        [
          "1개의 숫자가 입력되지 않으면 InvalidBonusNumberCountError를 throw",
          "7, 8",
          InvalidBonusNumberCountError,
        ],
        [
          "lottoWinningNumbers와 중복된 값이 입력되면 DuplicatedNumberError를 throw",
          "1",
          DuplicatedNumberError,
        ],
        [
          "숫자가 아닌 값이 입력되면 NotNumberError를 throw",
          "a", 
          NotNumberError
        ],
        [
          "45보다 큰 값이 입력되면 InvalidNumberRangeError를 throw", 
          "50", 
          InvalidNumberRangeError
        ],
        [
          "1보다 작은 값이 입력되면 InvalidNumberRangeError를 throw", 
          "0", 
          InvalidNumberRangeError
        ],
        [
          "정수가 아닌 값이 입력되면 NotIntegerError를 throw", 
          "8.5", 
          NotIntegerError
        ],
      ])("bonousNumber값에 %s 해야한다.", async (description, bonousNumber, error) => {
        // given
        const lottoWinningNumbers = [1, 2, 3, 4, 5, 6];
        Console.readLineAsync.mockReturnValue(bonousNumber);

        // when-then
        await expect(inputView.readBonusNumber(lottoWinningNumbers)).rejects.toThrow(error);
      });
    });
  });
});
