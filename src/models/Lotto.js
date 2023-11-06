import ERROR_MESSAGE from '../constants/erroeMessage.js';
import validateNumber from '../utils/validationValue.js';

const { duplicateError, numbersLengthError } = ERROR_MESSAGE;

class Lotto {
  #numbers; // 로또 당첨 번호

  constructor(numbers) {
    this.#validate(numbers);
    this.#validateDuplicate(numbers);

    numbers.forEach(number => {
      validateNumber(number);
    });

    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(numbersLengthError);
    }
  }

  #validateDuplicate(numbers) {
    const uniqueNumbers = [...new Set(numbers)]; // 중복 제거
    if (uniqueNumbers.length !== numbers.length) {
      throw new Error(duplicateError);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
