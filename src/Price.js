import validationUtils from './utils/validationUtils.js';
import MESSAGE from './constants/message.js';
import VALUE from './constants/value.js';

class Price {
  #price;

  constructor(price) {
    this.#price = price;
    this.#validate(price);
  }

  #validate(price) {
    validationUtils.checkNumber(price);
    this.#checkUnit();
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
