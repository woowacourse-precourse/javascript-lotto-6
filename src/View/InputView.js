import { Console } from "@woowacourse/mission-utils";
import {
  PURCHASE_AMOUNT_VALIDATOR,
  LOTTO_NUMBERS_VALILDATOR,
  COMMON_NUMBER_VALIDATOR,
  BONUS_NUMBER_VALIDATOR,
} from "../utils/validation.js";
import { INPUT_MESSAGE, MESSAGE_FACTOR } from "../constants/message.js";

class InputView {
  async readLottoPurchaseAmount() {
    const lottoPurchaseAmount = await Console.readLineAsync(INPUT_MESSAGE.lottoPurchaseAmount);
    this.#validatePurchaseAmount(lottoPurchaseAmount);

    return Number(lottoPurchaseAmount);
  }

  async readLottoWinningNumbers() {
    const lottoWinningNumbers = await Console.readLineAsync(INPUT_MESSAGE.lottoWinningNumbers);
    const validatedLottoNumbers = lottoWinningNumbers.split(MESSAGE_FACTOR.seperator).reduce((numbers, number) => {
      const trimmedNumber = number.trim();
      if (trimmedNumber !== MESSAGE_FACTOR.noInput) numbers.push(Number(trimmedNumber));
      return numbers;
    }, []);

    this.#validateLottoNumbersInput(validatedLottoNumbers);

    return validatedLottoNumbers;
  }

  async readBonusNumber(lottoWinningNumbers) {
    const bonusNumber = await Console.readLineAsync(INPUT_MESSAGE.lottoBonusNumber);
    const validatedBonusNumber = bonusNumber && bonusNumber.split(MESSAGE_FACTOR.seperator).map(Number);
    this.#validateBonusNumberInput(validatedBonusNumber, lottoWinningNumbers);

    return validatedBonusNumber;
  }

  #validatePurchaseAmount(purchaseAmount) {
    Object.values(PURCHASE_AMOUNT_VALIDATOR).forEach((validator) => {
      validator(purchaseAmount);
    });
  }

  #validateLottoNumbersInput(numbers) {
    this.#validateLottoNumbers(numbers);
    this.#validateCommonNumber(numbers);
  }

  #validateBonusNumberInput(bonusNumber, lottoWinningNumbers) {
    this.#validateBonusNumber(bonusNumber, lottoWinningNumbers);
    this.#validateCommonNumber(bonusNumber);
  }

  #validateLottoNumbers(numbers) {
    Object.values(LOTTO_NUMBERS_VALILDATOR).forEach((validator) => {
      validator(numbers);
    });
  }

  #validateBonusNumber(bonusNumber, lottoWinningNumbers) {
    Object.values(BONUS_NUMBER_VALIDATOR).forEach((validator) => {
      validator(bonusNumber, lottoWinningNumbers);
    });
  }

  #validateCommonNumber(numbers) {
    Object.values(COMMON_NUMBER_VALIDATOR).forEach((validator) => {
      validator(numbers);
    });
  }
}

export default InputView;
