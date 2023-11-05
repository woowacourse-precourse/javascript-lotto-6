import { ERROR_MESSAGES } from '../constants/messages.js';

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
    const numberReg = /^[0-9]+$/;
    if (winningLottoNumbers.length !== 6) {
      throw new Error(ERROR_MESSAGES.ONLY_SIX_NUMBERS);
    }
    winningLottoNumbers.forEach(number => {
      if (!numberReg.test(number)) {
        throw new Error(ERROR_MESSAGES.ONLY_NUMBERS);
      }
      if (number > 45 || number < 1) {
        throw new Error(ERROR_MESSAGES.NUMBER_RANGE);
      }
    });
  }

  #validateBonusLotto(bonusLottoNumber) {
    const numberReg = /^[0-9]+$/;
    if (!numberReg.test(bonusLottoNumber)) {
      throw new Error(ERROR_MESSAGES.ONLY_NUMBERS);
    }
    if (bonusLottoNumber > 45 || bonusLottoNumber < 1) {
      throw new Error(ERROR_MESSAGES.NUMBER_RANGE);
    }
  }
}

export default WinningLotto;
