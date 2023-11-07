import Validate from '../validate/Validate'

class Lotto {
  #numbers

  constructor(numbers) {
    Validate.validLottoNumbers(numbers)
    this.#numbers = numbers
  }

  getLotto() {
    return this.#numbers
  }
}

export default Lotto
