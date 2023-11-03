import MESSAGE from './constants/message.js';
import VALUE from './constants/value.js';

class Price {
  #number;

  constructor(number) {
    this.#number = number;
    this.#validate();
  }

  #validate() {
    this.checkNumber();
    this.checkUnit();
  }

  checkNumber() {
    if (!Number.isSafeInteger(this.#number)) {
      throw new Error(MESSAGE.error.numericPrice);
    }
  }

  checkUnit() {
    if (this.#number % VALUE.condition.priceDivision > 0) {
      throw new Error(MESSAGE.error.priceUnit);
    }
  }

  finishValidation() {
    return this.#number;
  }
}

export default Price;
