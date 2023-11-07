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
    const objArray = Object.entries(object);

    const profit = objArray.reduce((sum, cur, index) => {
      const key = objArray[index][0];
      const value = objArray[index][1];
      if (value === 0) {
        return sum;
      }
      return sum + value * this.prizeMoney[key];
    }, 0);

    return profit;
  }

  static print(invest, profit) {
    const roi = ((profit / invest) * 100).toFixed(1);
    IO.print(`총 수익률은 ${roi}%입니다.`);
    return roi;
  }
}
