import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, INPUT_MESSAGE } from '../constants/message.js';
import { validation } from '../utils/validation.js';
import ValidateError from '../error/ValidateError.js';
import { COMMON } from '../constants/common.js';
import { LOTTO } from '../constants/lotto.js';

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

  #validate(price) {
    if (validation.isEmpty(price)) {
      throw new ValidateError(ERROR_MESSAGE.empty);
    }

    const numberPrice = Number(price);

    this.#numberValidate(numberPrice);
  }

  #numberValidate(price) {
    if (validation.isNumberZero(price)) {
      throw new ValidateError(ERROR_MESSAGE.notZero);
    }

    if (isNaN(price)) {
      throw new ValidateError(ERROR_MESSAGE.notNumber);
    }

    if (validation.isNotLottoPurchagePriceRange(price)) {
      throw new ValidateError(ERROR_MESSAGE.lottoPurchasePriceRange);
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

  #validateNumbers(numbers) {
    if (validation.isEmpty(numbers)) {
      throw new ValidateError(ERROR_MESSAGE.empty);
    }

    if (validation.isNotSeparateCommaNumbers(numbers)) {
      throw new ValidateError(ERROR_MESSAGE.notNumberFormat);
    }

    const separateNumbers = numbers.split(COMMON.comma).map((number) => parseInt(number));

    this.#validateSeparateNumbers(separateNumbers);
  }

  #validateSeparateNumbers(numbers) {
    if (LOTTO.length !== numbers.length) {
      throw new ValidateError(ERROR_MESSAGE.lottoLength);
    }

    if (validation.isExistDuplicateNumbers(numbers)) {
      throw new ValidateError(ERROR_MESSAGE.existDuplicateNumber);
    }

    const isNotNumbersLottoRange = !numbers.every(validation.isLottoNumberRange);

    if (isNotNumbersLottoRange) {
      throw new ValidateError(ERROR_MESSAGE.lottoNumberRangee);
    }
  }

  async getLottoBonusNumber() {
    while (true) {
      try {
        const lottoBonusNumber = await Console.readLineAsync(INPUT_MESSAGE.lottoBonusNumber);

        this.#validateNumber(Number(lottoBonusNumber));

        return lottoBonusNumber;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  #validateNumber(number) {
    if (validation.isEmpty(number)) {
      throw new ValidateError(ERROR_MESSAGE.empty);
    }

    if (!validation.isLottoNumberRange(number)) {
      throw new ValidateError(ERROR_MESSAGE.lottoNumberRangee);
    }

    // TODO: 보너스번호가 당첨번호에 포함되는지 체크하기
    // const isWinningNumbersIncludeBonusNumber = this.#winningNumbers.includes(number);

    // if (isWinningNumbersIncludeBonusNumber) {
    //   throw new ValidateError(ERROR_MESSAGE.bonusNumberIncludeWinningNumber);
    // }
  }
}

export default InputView;
