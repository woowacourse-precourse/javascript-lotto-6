import priceModel from './models/priceModel.js';
import validationUtils from './utils/validationUtils.js';
import VALUE from './constants/value.js';
import MESSAGE from './constants/message.js';

class Price {
  #price;

  #number;

  constructor(price) {
    this.#price = price;
    this.#validate();
  }

  #validate() {
    validationUtils.checkNumber(this.#price);

    this.#check1000Units();

    this.#setNumber();
  }

  #check1000Units() {
    if (this.#price % VALUE.unit.price > 0) {
      throw new Error(MESSAGE.error.priceUnit);
    }
  }

  #setNumber() {
    this.#number = priceModel.calculateNumberOfLotto(this.#price);
  }

  getPriceAndNumber() {
    return { price: this.#price, number: this.#number };
  }
}

export default Price;
