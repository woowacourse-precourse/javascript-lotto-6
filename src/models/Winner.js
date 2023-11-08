import CONSTANTS from './constants.js';

class Winner {
  #result;

  #revenue;

  constructor() {
    this.#result = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };
    this.#revenue = 0;
  }

  #priceResult(number) {
    this.#result[number] += 1;
    this.#revenue += CONSTANTS.PRICE[number];
  }

  switchNumber(number, bonus) {
    if (number === 3) this.#priceResult('fifth');
    if (number === 4) this.#priceResult('fourth');
    if (number === 5) {
      bonus ? this.#priceResult('second') : this.#priceResult('third');
    }
    if (number === 6) this.#priceResult('first');
  }

  getResult() {
    return this.#result;
  }

  getRevenue() {
    return this.#revenue;
  }
}

export default Winner;
