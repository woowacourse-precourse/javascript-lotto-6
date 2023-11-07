import Validate from '../validate/Validate.js'

class Lotto {
  /** @type {number[]} */
  #numbers

  /** @param {number[]} numbers */
  constructor(numbers) {
    Validate.validLottoNumbers(numbers)
    this.#numbers = numbers
  }

  /** @returns {number[]} */
  getLotto() {
    return this.#numbers
  }
}

export default Lotto
