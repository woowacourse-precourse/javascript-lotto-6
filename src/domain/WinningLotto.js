import Validate from '../validate/Validate.js'
import Lotto from './Lotto.js'

class WinningLotto extends Lotto {
  #bonusNumber

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
