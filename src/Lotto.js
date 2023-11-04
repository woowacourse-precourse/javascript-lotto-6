import validationUtils from './utils/validationUtils.js';
import MESSAGE from './constants/message.js';
import VALUE from './constants/value.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.#validate(numbers);
  }

  #validate(numbers) {
    for (let i = 0; i < numbers.length; i += 1) {
      validationUtils.checkNumber(numbers[i]);
      validationUtils.checkRange(numbers[i]);
      this.#checkDuplicateNumber(numbers[i], i);
    }

    this.#checkLength();
  }

  #checkDuplicateNumber(number, currentIndex) {
    const lastIndex = this.#numbers.lastIndexOf(number);
    if (lastIndex !== currentIndex) {
      throw new Error(MESSAGE.error.duplicateNumber);
    }
  }

  #checkLength() {
    if (this.#numbers.length !== VALUE.range.count) {
      throw new Error(MESSAGE.error.lottoLength);
    }
  }

  finishValidation() {
    return this.#numbers;
  }
}

export default Lotto;
