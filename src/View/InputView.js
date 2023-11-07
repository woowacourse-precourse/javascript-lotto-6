import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE, INPUT_MESSAGE } from "../constants/message.js";
import {
  NoInputError,
  NotNumberError,
  InvalidAmountRangeError,
  InvalidAmountUnitError,
  InvalidLottoNumberCountError,
  DuplicatedNumberError,
  InvalidBonousNumberCountError,
  InvalidNumberRangeError,
  NotIntegerError,
} from "../utils/Error.js";

class InputView {
  async readLottoPurchaseAmount() {
    const lottoPurchaseAmount = await Console.readLineAsync(INPUT_MESSAGE.lottoPurchaseAmount);
    this.#validatePurchaseAmount(lottoPurchaseAmount);
    return Number(lottoPurchaseAmount);
  }

  async readLottoWinningNumbers() {
    const lottoWinningNumbers = await Console.readLineAsync(INPUT_MESSAGE.lottoWinningNumbers);
    const validatedLottoNumbers = lottoWinningNumbers.split(",").reduce((numbers, number) => {
      const trimmedNumber = number.trim();
      if (trimmedNumber !== "") numbers.push(Number(trimmedNumber));
      return numbers;
    }, []);
    this.#validateLottoNumbers(validatedLottoNumbers);
    return validatedLottoNumbers;
  }

  async readBonousNumber(lottoWinningNumbers) {
    const bonousNumber = await Console.readLineAsync(INPUT_MESSAGE.lottoBonousNumber);
    const validatedBonousNumber = Array.from(bonousNumber, Number);
    this.#validateBonousNumber(validatedBonousNumber, lottoWinningNumbers);
    return validatedBonousNumber;
  }

  #validatePurchaseAmount(purchaseAmount) {
    if (purchaseAmount === "") throw new NoInputError(ERROR_MESSAGE.noInput);
    if (isNaN(purchaseAmount)) throw new NotNumberError(ERROR_MESSAGE.notNumber);
    if (purchaseAmount < 1000) throw new InvalidAmountRangeError(ERROR_MESSAGE.invalidAmountRange);
    if (purchaseAmount % 1000 !== 0) throw new InvalidAmountUnitError(ERROR_MESSAGE.invalidAmountUnit);
  }

  #validateLottoNumbers(numbers) {
    if (numbers.length !== 6) throw new InvalidLottoNumberCountError(ERROR_MESSAGE.invalidLottoNumberCount);
    if (new Set(numbers).size !== numbers.length) throw new DuplicatedNumberError(ERROR_MESSAGE.duplicatedNumber);
    this.#validateCommon(numbers);
  }

  #validateBonousNumber(bonousNumber, lottoWinningNumbers) {
    if (bonousNumber.length !== 1) throw new InvalidBonousNumberCountError(ERROR_MESSAGE.invalidBonousNumberCount);
    if (new Set(bonousNumber.concat(lottoWinningNumbers)).size === lottoWinningNumbers.length)
      throw new DuplicatedNumberError(ERROR_MESSAGE.duplicatedNumber);
    this.#validateCommon(bonousNumber);
  }

  #validateCommon(numbers) {
    if (numbers.some(isNaN)) throw new NotNumberError(ERROR_MESSAGE.notNumber);
    if (numbers.some((number) => number < 1 || number > 45))
      throw new InvalidNumberRangeError(ERROR_MESSAGE.invalidNumberRange);
    if (numbers.some((number) => !Number.isInteger(number))) throw new NotIntegerError(ERROR_MESSAGE.notInteger);
  }
}

export default InputView;
