import bonusNumberValidator from '../validators/bonusNumberValidator.js';
import lottoNumberValidator from '../validators/lottoNumbersValidator.js';

class LottoWinnigInfo {
  #winningNumbers;

  #bonusNumber;

  constructor() {
    this.#winningNumbers = null;
    this.#bonusNumber = null;
  }

  #validateWinningNumbers(winningNumbers) {
    lottoNumberValidator.validateType(winningNumbers);
    lottoNumberValidator.validateCount(winningNumbers);
    lottoNumberValidator.validateRange(winningNumbers);
    lottoNumberValidator.validateUniqueness(winningNumbers);
  }

  #validateBounsNumber(bonusNumber) {
    bonusNumberValidator.validateType(bonusNumber);
    bonusNumberValidator.validateRange(bonusNumber);
    bonusNumberValidator.validateUniqueness(this.#winningNumbers, bonusNumber);
  }

  setWinningNumbers(numbers) {
    this.#validateWinningNumbers(numbers);
    this.#winningNumbers = numbers;
  }

  setBonusNumber(number) {
    this.#validateBounsNumber(number);
    this.#bonusNumber = number;
  }

  getWinningNumbers() {
    return [...this.#winningNumbers];
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default LottoWinnigInfo;
