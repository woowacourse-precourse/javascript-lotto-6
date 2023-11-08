import Lotto from '../Lotto.js';
import { ERROR_MESSAGE } from '../constants/Messages.js';
import { LOTTO_RULES } from '../constants/Rules.js';

export default class WinningNumbers extends Lotto {
  #bonusNumber;

  constructor(winningNumbers) {
    super(winningNumbers);
    this.#bonusNumber = 0;
  }

  setBonusNumber(bonusNumber) {
    this.#validateBonusNumber(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }

  #validateBonusNumber(bonusNumber) {
    this.#validateOnlyDigit(bonusNumber);
    this.#valideIncludeWinningNumbers(bonusNumber);
    this.#validateLottoNumberRange(bonusNumber);
  }

  #validateOnlyDigit(bonusNumber) {
    const ONLY_DIGIT_PATTERN = /^\d+$/;

    if (!ONLY_DIGIT_PATTERN.test(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.notNumber);
    }
  }

  #valideIncludeWinningNumbers(bonusNumber) {
    if (this.getNumbers().includes(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.duplication);
    }
  }

  #validateLottoNumberRange(bonusNumber) {
    if (bonusNumber < LOTTO_RULES.minNumber || bonusNumber > LOTTO_RULES.maxNumber) {
      throw new Error(ERROR_MESSAGE.lottoNumber.notInRange);
    }
  }
}
