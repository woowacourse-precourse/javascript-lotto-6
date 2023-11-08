import {
  RANGE_MIN,
  RANGE_MAX,
  LOTTO_LENGTH,
  errorMessages,
} from './constants.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO_LENGTH) throw new Error(errorMessages.LENGTH);
    if (numbers.includes(NaN)) throw new Error(errorMessages.NAN);
    if (this.#containsDecimals(numbers))
      throw new Error(errorMessages.DECIMALS);
    if (this.#containsDuplicates(numbers))
      throw new Error(errorMessages.DUPLICATES);
    if (this.#isOutOfRange(numbers)) throw new Error(errorMessages.RANGE);
  }

  getLottoNumbers() {
    return this.#numbers;
  }

  #containsDuplicates(numbers) {
    const set = new Set(numbers);
    if (set.size !== numbers.length) return true;
    return false;
  }

  #containsDecimals(numbers) {
    let containsDecimals = false;

    numbers.forEach((number) => {
      const numberString = number.toString();
      if (numberString.includes('.')) containsDecimals = true;
    });

    return containsDecimals;
  }

  #isOutOfRange(numbers) {
    let isOutOfRange = false;

    numbers.forEach((number) => {
      if (number < RANGE_MIN || number > RANGE_MAX) isOutOfRange = true;
    });

    return isOutOfRange;
  }
}

export default Lotto;
