import Result from '../result/Result.js';

export default class ResultService {
  #result;

  constructor() {
    this.#result = new Result();
  }

  setResult(lottos, raffle) {
    this.#result.setResult(lottos, raffle);
  }

  calculateRanks() {
    this.#result.calculateRanks();
  }

  calculateReturns() {
    this.#result.calculateReturns();
  }

  returnRate() {
    return this.#result.returnRate();
  }

  prizes() {
    return this.#result.prizes();
  }
}