import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE, INPUT_MESSAGE } from "../constants/message.js";
import { NoInputError, NotNumberError, InvalidAmountRangeError, InvalidAmountUnitError } from "../utils/Error.js";

class InputView {
  async readLottoPurchaseAmount() {
    const lottoPurchaseAmount = await Console.readLineAsync(INPUT_MESSAGE.lottoPurchaseAmount);
    this.#validatePurchaseAmount(lottoPurchaseAmount);
    return Number(lottoPurchaseAmount);
  }

  async readLottoWinningNumbers() {
    const lottoWinningNumbers = await Console.readLineAsync(INPUT_MESSAGE.lottoWinningNumbers);
    return lottoWinningNumbers.split(",").reduce((numbers, number) => {
      const trimmedNumber = number.trim();
      if (trimmedNumber !== "") numbers.push(Number(trimmedNumber));
      return numbers;
    }, []);
  }

  async readBonousNumber() {
    const bonousNumber = await Console.readLineAsync(INPUT_MESSAGE.lottoBonousNumber);
    return Array.from(bonousNumber, Number);
  }

  #validatePurchaseAmount(purchaseAmount) {
    if (purchaseAmount === "") throw new NoInputError(ERROR_MESSAGE.noInput);
    if (isNaN(purchaseAmount)) throw new NotNumberError(ERROR_MESSAGE.notNumber);
    if (purchaseAmount < 1000) throw new InvalidAmountRangeError(ERROR_MESSAGE.invalidAmountRange);
    if (purchaseAmount % 1000 !== 0) throw new InvalidAmountUnitError(ERROR_MESSAGE.invalidAmountUnit);
  }
}

export default InputView;
