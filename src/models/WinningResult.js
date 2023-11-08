import { LOTTO_SETTING, PRIZE_NAME, WINNING_PRIZE } from '../constants/Setting.js';

class WinningResult {
  #boughtPrice;
  #result;
  #prizeAmount;
  #profitRate;

  constructor(boughtAmount) {
    this.#boughtPrice = boughtAmount * LOTTO_SETTING.pricePerLotto;
    this.#result = {
      [PRIZE_NAME.first]: 0,
      [PRIZE_NAME.second]: 0,
      [PRIZE_NAME.third]: 0,
      [PRIZE_NAME.fourth]: 0,
      [PRIZE_NAME.fifth]: 0,
    };
    this.#prizeAmount = 0;
    this.#profitRate = '';
  }

  addPrizeToResult(prizeName) {
    this.#result[prizeName] += 1;
    this.#setPrizeAmount();
    this.#setProfitRate();
  }

  #calculatePrizeAmount() {
    const result = this.#result;
    const prizeAmount = Object.keys(result).reduce((amount, prizeName) => {
      return (amount += result[prizeName] * WINNING_PRIZE[prizeName]);
    }, 0);
    return prizeAmount;
  }

  #calculateProfitRate() {
    const boughtPrice = this.#boughtPrice;
    const prizeAmount = this.#prizeAmount;
    return (Math.round((prizeAmount / boughtPrice) * 1000) / 10).toFixed(1) + '%';
  }

  #setPrizeAmount() {
    this.#prizeAmount = this.#calculatePrizeAmount();
  }

  #setProfitRate() {
    this.#profitRate = this.#calculateProfitRate();
  }

  getResult() {
    const result = {
      ...this.#result,
      profitRate: this.#profitRate,
    };
    return result;
  }
}

export default WinningResult;
