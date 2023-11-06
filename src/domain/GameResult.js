export class GameResult {
  #result;
  constructor() {
    this.#result = new Map();
  }

  getResult = () => {
    return this.#result;
  };

  setResult = (rankdata) => {
    if (this.#result.has(rankdata)) {
      this.#result.set(rankdata, this.#result.get(rankdata) + 1);
      return;
    }
    this.#result.set(rankdata, 1);
  };

  calPrize = () => {
    let total = 0;
    this.#result.forEach((value, key) => {
      total += value * key.PRIZE;
    });
    return total;
  };
}
