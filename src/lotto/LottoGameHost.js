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

  #bonusNumberValidationList = [
    (input) => Validator.isMatchingRegex(input, LOTTO_REGEX.bonusNumberInput),
    (input) => this.#isBonusNumberDuplicate(Number(input)),
  ];

  #isWinningNumberDuplicate(input) {
    const numbers = input.split(',').map(Number);
    const uniqueNumbers = new Set(numbers);

    if (uniqueNumbers.size !== numbers.length) {
      throw new Error(ERROR_MESSAGE.wrongLottoNumberInput);
    }
  }

  #isBonusNumberDuplicate(bonusNumber) {
    if (this.#winningNumbers.includes(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.wrongBonusNumberInput);
    }
  }

  async setLottoWinningNumbers() {
    const winningNumbers = await getAndValidateInput(
      MESSAGE.winningNumbersInput,
      this.#winningNumbersValidationList,
    );
    this.#winningNumbers = winningNumbers.split(',').map(Number);

    const bonusNumber = await getAndValidateInput(
      MESSAGE.bonusNumberInput,
      this.#bonusNumberValidationList,
    );
    this.#bonusNumber = Number(bonusNumber);
  }

  getWinningNumbers() {
    return [...this.#winningNumbers];
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default LottoGameHost;