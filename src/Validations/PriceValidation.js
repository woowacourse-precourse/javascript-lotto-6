import validationUtils from '../utils/validationUtils.js';
import MESSAGE from '../constants/message.js';
import VALUE from '../constants/value.js';

class PriceValidation {
  #answer;

  constructor(priceAnswer) {
    this.#answer = priceAnswer;
  }

  #check1000Units() {
    const number = Number(this.#answer);

    if (number % VALUE.condition.priceDivision > 0) {
      throw new Error(MESSAGE.error.priceUnit);
    }
  }

  finishValidation() {
    validationUtils.checkNumberRegExp(this.#answer);

    this.#check1000Units(this.#answer);
  }
}

export default PriceValidation;
