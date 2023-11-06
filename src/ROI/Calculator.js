import IO from "../Util/IOHandler.js";

export default class Calculator {
  static prizeMoney = {
    3: 5000,
    4: 50000,
    5: 1500000,
    5.1: 30000000,
    6: 2000000000,
  };

  static profit(object) {
    let sum = 0;
    for (let key in object) {
      const value = object[key];
      if (value) {
        sum += value * this.prizeMoney[key];
      }
    }
    return sum;
  }

  static print(invest, profit) {
    const roi = ((profit / invest) * 100).toFixed(1);
    IO.print(`총 수익률은 ${roi}%입니다.`);
    return roi;
  }
}
