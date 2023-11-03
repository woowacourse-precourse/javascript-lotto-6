import { MAX_LOTTO_NUMBER, MIN_LOTTO_NUMBER, MESSAGES, LOTTO_NUMBERS_COUNT } from "./constants.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO_NUMBERS_COUNT) {
      throw new Error(MESSAGES.lottoNumbersCountError);
    }

    if (!this.#checkAllLottoNumbersInRange(numbers)) {
      throw new Error(MESSAGES.lottoNumberRangeError);
    }

    if (!this.#checkAllNumbersUnique(numbers)) {
      throw new Error(MESSAGES.duplicatedLottoNumberError);
    }
  }

  #checkLottoNumberInRange(lottoNumber) {
    return MIN_LOTTO_NUMBER <= lottoNumber && lottoNumber <= MAX_LOTTO_NUMBER;
  }

  #checkAllLottoNumbersInRange(numbers) {
    const isAllNumbersInRange = numbers.every(this.#checkLottoNumberInRange);

    return isAllNumbersInRange;
  }

  #checkAllNumbersUnique(numbers) {
    const uniqueNumbers = [...new Set(numbers)];

    return uniqueNumbers.length === numbers.length;
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
