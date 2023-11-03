import MESSAGE from './constants/message.js';
import VALUE from './constants/value.js';

class Price {
  #price;

  constructor(price) {
    this.#price = price;
    this.#validate();
  }

  #validate() {
    this.#checkNumber();
    this.#checkUnit();
  }

  #checkNumber() {
    if (!Number.isSafeInteger(this.#price)) {
      throw new Error(MESSAGE.error.numericPrice);
    }
  }

  #checkUnit() {
    if (this.#price % VALUE.condition.priceDivision > 0) {
      throw new Error(MESSAGE.error.priceUnit);
    }
  }

  finishValidation() {
    return this.#price;
  }
}

export default Price;
