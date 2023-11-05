import rateModel from './models/rateModel.js';
import outputs from './View/outputs.js';

class Rate {
  #total;

  #rate;

  constructor() {
    this.#total = 0;
    this.#rate = 0;
  }

  #setTotalAndRate(revenues, price) {
    this.#total = rateModel.getTotal(revenues);
    this.#rate = rateModel.getRate(this.#total, price);
  }

  controlRate(revenues, price) {
    this.#setTotalAndRate(revenues, price);

    outputs.printRate(this.#rate);
  }
}

export default Rate;
