import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, INPUT_MESSAGE } from '../constants/message.js';
import { lottoValidation, validation } from '../utils/validation.js';
import { utils } from '../utils/utils.js';
import { LOTTO } from '../constants/lotto.js';
import ValidateError from '../error/ValidateError.js';

class InputView {
  async getLottoPurchasePrice() {
    while (true) {
      try {
        const lottoPurchasePrice = await Console.readLineAsync(INPUT_MESSAGE.lottoPurchasePrice);

        this.#validate(lottoPurchasePrice);

        return Number(lottoPurchasePrice);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async getLottoWinningNumbers() {
    while (true) {
      try {
        Console.print(INPUT_MESSAGE.lottoWinningNumbersDescription);

        const lottoWinningNumbers = await Console.readLineAsync(INPUT_MESSAGE.lottoWnningNumbers);

        this.#validateNumbers(lottoWinningNumbers);

        return lottoWinningNumbers;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async getLottoBonusNumber(winningNumbers) {
    while (true) {
      try {
        const lottoBonusNumber = Number(
          await Console.readLineAsync(INPUT_MESSAGE.lottoBonusNumber),
        );

        this.#validateBonusNumber(lottoBonusNumber, winningNumbers);

        return lottoBonusNumber;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  #validate(price) {
    if (validation.isEmpty(price)) throw new ValidateError(ERROR_MESSAGE.empty);

    const numberPrice = Number(price);

    this.#validateNumber(numberPrice);
  }

  #validateNumber(price) {
    if (validation.isNumberZero(price)) throw new ValidateError(ERROR_MESSAGE.notZero);

    if (isNaN(price)) throw new ValidateError(ERROR_MESSAGE.notNumber);

    if (lottoValidation.isNotLottoPurchagePriceRange(price)) {
      throw new ValidateError(ERROR_MESSAGE.lottoPurchasePriceRange);
    }
  }

  #validateNumbers(numbers) {
    if (validation.isEmpty(numbers)) throw new ValidateError(ERROR_MESSAGE.empty);

    if (validation.isNotSeparateCommaNumbers(numbers)) {
      throw new ValidateError(ERROR_MESSAGE.notNumberFormat);
    }

    const separateNumbers = utils.separateNumbers(numbers);

    this.#validateSeparateNumbers(separateNumbers);
  }

  #validateSeparateNumbers(numbers) {
    if (LOTTO.length !== numbers.length) throw new ValidateError(ERROR_MESSAGE.lottoLength);

    if (validation.isExistDuplicateNumbers(numbers)) {
      throw new ValidateError(ERROR_MESSAGE.existDuplicateNumber);
    }

    const isNotNumbersLottoRange = !numbers.every(lottoValidation.isLottoNumberRange);

    if (isNotNumbersLottoRange) throw new ValidateError(ERROR_MESSAGE.lottoNumberRangee);
  }

  #validateBonusNumber(number, winningNumbers) {
    if (validation.isEmpty(number)) throw new ValidateError(ERROR_MESSAGE.empty);

    if (!lottoValidation.isLottoNumberRange(number)) {
      throw new ValidateError(ERROR_MESSAGE.lottoNumberRangee);
    }

    const isWinningNumbersIncludeBonusNumber = winningNumbers.includes(number);

    if (isWinningNumbersIncludeBonusNumber) {
      throw new ValidateError(ERROR_MESSAGE.bonusNumberIncludeWinningNumber);
    }
  }
}

export default InputView;
