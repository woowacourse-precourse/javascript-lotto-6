import {
  ERROR_LOTTO_RANGE,
  ERROR_LOTTO_REPEAT,
  ERROR_LOTTO_SIX_NUMBERS,
  ERROR_LOTTO_TYPE,
} from './Constant';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#typeValidate(numbers);
    this.#rangeValidate(numbers);
    this.#lengthValidate(numbers);
    this.#repeatValidate(numbers);
    this.#numbers = numbers;
  }

  #lengthValidate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_LOTTO_SIX_NUMBERS);
    }
  }

  #repeatValidate(numbers) {
    const repeatNumbers = [...new Set(numbers)];
    if (repeatNumbers.length !== 6) {
      throw new Error(ERROR_LOTTO_REPEAT);
    }
  }

  #rangeValidate(numbers) {
    numbers.map(number => {
      if (number < 1 || number > 45) {
        throw new Error(ERROR_LOTTO_RANGE);
      }
    });
  }

  #typeValidate(numbers) {
    numbers.map(number => {
      const numberType = Number(number);
      if (isNaN(numberType)) {
        throw new Error(ERROR_LOTTO_TYPE);
      }
    });
  }

  get numbers() {
    return this.#numbers;
  }
}

export default Lotto;
