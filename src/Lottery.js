import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, INPUT_MESSAGE } from './constants/message.js';
import { LOTTO } from './constants/lotto.js';
import { COMMON } from './constants/common.js';
import { validation } from './utils/validation.js';
import ValidateError from './error/ValidateError.js';

class Lottery {
  async getLottoWinningNumbers() {
    while (true) {
      try {
        Console.print(INPUT_MESSAGE.lottoWinningNumbersDescription);
        const lottoWinningNumbers = await Console.readLineAsync(INPUT_MESSAGE.lottoWnningNumbers);

        this.#validateNumbers(lottoWinningNumbers);

        return lottoWinningNumbers;
      } catch (error) {
        Console.print(error);
      }
    }
  }

  async getLottoBonusNumber() {
    const lottoBonusNumber = await Console.readLineAsync(INPUT_MESSAGE.lottoBonusNumber);
    return lottoBonusNumber;
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

  #validateNumber(numbers) {}
}

export default Lottery;
