class Winner {
  #result;

  constructor() {
    this.#result = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };
  }

  switchNumber(number, bonus) {
    if (number === 3) this.#result.fifth += 1;
    if (number === 4) this.#result.fourth += 1;
    if (number === 5) {
      bonus ? (this.#result.second += 1) : (this.#result.third += 1);
    }
    if (number === 6) this.#result.first += 1;
  }

  getResult() {
    return this.#result;
  }
}

export default Winner;

// const winner = new Winner();

// winner.switchNumber(3, false);
// winner.switchNumber(3, false);
// winner.switchNumber(3, false);
// console.log(winner.getResult());
