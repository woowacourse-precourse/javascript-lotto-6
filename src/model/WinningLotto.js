import { ERROR_MESSAGES } from '../constants/messages.js';
import InputValidator from '../utils/InputValidator.js';

class WinningLotto {
  #winningLottoNumbers;

  #bonusLottoNumber;

  constructor(winningLottoNumbers, bonusLottoNumber) {
    this.#validateWinningLotto(winningLottoNumbers);
    this.#validateBonusLotto(bonusLottoNumber);
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

  #validateBonusLotto(bonusLottoNumber) {
    InputValidator.validateNumber(bonusLottoNumber);
  }
}

export default WinningLotto;
