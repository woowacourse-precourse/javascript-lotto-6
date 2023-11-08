import { LOTTO_SETTING, PRIZE_NAME } from '../constants/Setting.js';

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
  }

  addPrizeToResult(prizeName) {
    this.#result[prizeName] += 1;
  }
  #setPrizeAmount() {}
  #setProfitRate() {}

  getResult() {
    return this.#result;
  }
}

export default WinningResult;
