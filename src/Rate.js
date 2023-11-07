import rateModel from './models/rateModel.js';

class Rate {
  #total;

  #rate;

  constructor(revenues, price) {
    this.#total = rateModel.getTotal(revenues);
    this.#rate = rateModel.getRate(this.#total, price);
  }

  getRate() {
    return this.#rate;
  }
}

export default Rate;
