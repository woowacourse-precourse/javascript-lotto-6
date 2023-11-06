import validationUtils from './utils/validationUtils.js';
import MESSAGE from './constants/message.js';
import VALUE from './constants/value.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.#validate();
  }

  #validate() {
    this.#numbers.forEach((number, index) => {
      validationUtils.checkNumber(number);

      validationUtils.checkRange(number);

      this.#checkDuplicateNumber(number, index);
    });

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

  getLotto() {
    return this.#numbers;
  }
}

export default Lotto;
