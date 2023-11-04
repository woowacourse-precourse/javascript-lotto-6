import Validator from "../utils/Validator.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    Validator.lottoNumber(numbers);
  }

  getRank(winningNumber, bonusNumber) {
    const sameNumberCount = this.getSameNumberCount(winningNumber);
    if (sameNumberCount === 3) return 5;
    if (sameNumberCount === 4) return 4;
    if (sameNumberCount === 5 && this.#numbers.includes(bonusNumber)) return 2;
    if (sameNumberCount === 5) return 3;
    if (sameNumberCount === 6) return 1;
  }

  getSameNumberCount(winningNumber) {
    return winningNumber
      .map(Number)
      .filter((number) => this.#numbers.includes(number)).length;
  }
}

export default Lotto;
