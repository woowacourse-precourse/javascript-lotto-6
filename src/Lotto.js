import { ERROR_MESSAGE, GAME_NUMBER } from './Constants.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#typeValidate(numbers);
    this.#rangeValidate(numbers);
    this.#lengthValidate(numbers);
    this.#duplicationValidate(numbers);
    this.#numbers = numbers;
  }

  #typeValidate(numbers) {
    if (numbers.some(number => isNaN(number))) {
      throw new Error(ERROR_MESSAGE.typeError);
    }
  }
  #rangeValidate(numbers) {
    if (
      numbers.some(
        number =>
          number < GAME_NUMBER.numberMin || number > GAME_NUMBER.numberMax,
      )
    ) {
      throw new Error(ERROR_MESSAGE.rangeError);
    }
  }
  #lengthValidate(numbers) {
    if (numbers.length !== GAME_NUMBER.numberLength) {
      throw new Error(ERROR_MESSAGE.lottoLengthError);
    }
  }
  #duplicationValidate(numbers) {
    if (new Set(numbers).size !== numbers.length) {
      throw new Error(ERROR_MESSAGE.duplicationError);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
