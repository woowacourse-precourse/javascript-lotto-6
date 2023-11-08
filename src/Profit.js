import { Console } from "@woowacourse/mission-utils";

class Profit {
  constructor() {
    this.profitRate = 0;
  }

  profitRateAcc(profit, cost) {
    this.profitRate = Number(((profit / cost) * 100).toFixed(2));
    return this.profitRate;
  }

  profitPrinter(rate) {
    const profitRate = this.profitRate;
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}

export default Profit;
