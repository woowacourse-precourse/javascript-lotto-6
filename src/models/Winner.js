const PRICE = {
  first: 2000000000,
  second: 30000000,
  third: 1500000,
  forth: 50000,
  fifth: 5000,
};

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

  #priceResult(hi) {
    this.#result[hi] += 1;
    this.#revenue += PRICE[hi];
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

// const winner = new Winner();

// winner.switchNumber(3, false);
// winner.switchNumber(3, false);
// winner.switchNumber(3, false);
// console.log(winner.getResult());
