import { ERROR_MESSAGES } from '../constants/messages.js';
import InputValidator from '../utils/InputValidator.js';

class WinningLotto {
  #winningLottoNumbers;

  #bonusLottoNumber;

  constructor(winningLottoNumbers, bonusLottoNumber) {
    this.#validateWinningLotto(winningLottoNumbers);
    this.#validateBonusLotto(bonusLottoNumber, winningLottoNumbers);
    this.#winningLottoNumbers = winningLottoNumbers;
    this.#bonusLottoNumber = bonusLottoNumber;
  }

  getWinningLottoNumbers() {
    return this.#winningLottoNumbers;
  }

  getBonusLottoNumber() {
    return this.#bonusLottoNumber;
  }

  #validateWinningLotto(winningLottoNumbers) {
    InputValidator.validateNumbers(winningLottoNumbers);

    winningLottoNumbers.forEach(number => {
      InputValidator.validateNumber(number);
    });
  }

  #validateBonusLotto(bonusLottoNumber, winningLottoNumbers) {
    InputValidator.validateBonusNumber(bonusLottoNumber, winningLottoNumbers);
  }
}

export default WinningLotto;
