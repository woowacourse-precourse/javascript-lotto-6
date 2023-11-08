import Constants from '../utils/Constants.js';

class Statistics {
  //상수는 static 하게 사용
  #constants = new Constants();
  #money;

  constructor(money) {
    this.#money = money;
  }

  async getRate(result) {
    const money = await this.#money.getMoney();
    const sum = await this.getSum(result);
    return ((sum / money) * 100).toFixed(1);
  }

  async getSum(res) {
    const result = res;
    const sum =
      result[1] * this.#constants.getPrize()[6] +
      result[2] * this.#constants.getPrize()['b'] +
      result[3] * this.#constants.getPrize()[5] +
      result[4] * this.#constants.getPrize()[4] +
      result[5] * this.#constants.getPrize()[3];
    return sum;
  }
}

export default Statistics;
