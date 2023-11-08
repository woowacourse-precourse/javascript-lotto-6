import { Validator } from '../utility/validation.js';
import { getAndValidateInput } from '../utility/console.js';
import { LOTTO_REGEX, MESSAGE, ERROR_MESSAGE } from '../constant/constant.js';

class LottoGameHost {
  #winningNumbers = [];

  #bonusNumber = 0;

  #winningNumbersValidationList = [
    (input) => Validator.isMatchingRegex(input, LOTTO_REGEX.lottoNumberInput),
    this.#isWinningNumberDuplicate,
  ];

  #isWinningNumberDuplicate(input) {
    const numbers = input.split(',').map(Number);
    const uniqueNumbers = new Set(numbers);

    if (uniqueNumbers.size !== numbers.length) {
      throw new Error(ERROR_MESSAGE.wrongLottoNumberInput);
    }
  }

  async setLottoWinningNumbers() {
    const winningNumbers = await getAndValidateInput(
      MESSAGE.winningNumbersInput,
      this.#winningNumbersValidationList,
    );
    this.#winningNumbers = winningNumbers.split(',').map(Number);
  }

  getWinningNumbers() {
    return [...this.#winningNumbers];
  }
}

export default LottoGameHost;