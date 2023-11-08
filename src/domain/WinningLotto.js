import Validate from '../validate/Validate.js'
import Lotto from './Lotto.js'

class WinningLotto extends Lotto {
  /** @type {number} */
  #bonusNumber

  /**
   * @param {number[]} numbers
   * @param {number} bonusNumber
   */
  constructor(numbers, bonusNumber) {
    super(numbers)
    Validate.validBonusNumber(numbers, bonusNumber)

    this.#bonusNumber = bonusNumber
  }

  getBonusNumber() {
    return this.#bonusNumber
  }
}

export default WinningLotto
