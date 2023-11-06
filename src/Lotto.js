import { ERROR_MESSAGE , LOTTO_LENGTH } from "./constants.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a,b) => a-b);
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO_LENGTH) throw ERROR_MESSAGE.TARGET_NUM_SIX;
    if ([...new Set(numbers)].length !== LOTTO_LENGTH) throw ERROR_MESSAGE.TARGET_NUM_SAME;
  }

  getNumbers() {
    return this.#numbers;
  }

  hasNumber(number) {
    return this.#numbers.includes(number);
  }

  getMatchTargetNumber(targetNumber) {
    return targetNumber.filter((number) => this.hasNumber(number)).length;
  }

  getMatchBonusNumber(bonusNumber) {
    return this.hasNumber(bonusNumber);
  }
}

export default Lotto;
