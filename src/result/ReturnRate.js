import SETTINGS from '../constants/Settings.js';

export default class ReturnRate {
  #returnRate;

  construnctor() {
    this.#returnRate = 0;
  }

  calculate(returns, balance) {
    this.#returnRate = (returns / balance * 100).toFixed(SETTINGS.returnRateDecimal);

    return this.#returnRate;
  }
}