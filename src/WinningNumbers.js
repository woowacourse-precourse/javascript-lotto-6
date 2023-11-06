import { ERROR } from './constant/index.js';
import LottoNumbers from './LottoNumbers.js';

class WinningNumbers extends LottoNumbers {
  #bonusNumber;

  constructor(numbers, bonusNumber) {
    super(numbers);
    this.#validateBonusNumber(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  getWinningNumbers() {
    return {
      lottoNumbers: super.getNumbers(),
      bonusNumber: this.#bonusNumber,
    };
  }

  #validateBonusNumber(bonusNumber) {
    if (!/^[1-9][0-9]*$/.test(bonusNumber)) {
      throw new Error(ERROR.BONUS_NUMBER.NUMBER);
    }

    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error(ERROR.BONUS_NUMBER.RANGE);
    }

    if (super.getNumbers().includes(Number(bonusNumber))) {
      throw new Error(ERROR.BONUS_NUMBER.UNIQUE);
    }
  }
}

export default WinningNumbers;
