import { Console } from "@woowacourse/mission-utils";
class Profit {
  constructor() {}

  profitRateAcc(profit, cost) {
    const profitRate = (profit / cost) * 100;
    return profitRate;
  }

  profitRatePrinter(profitRate) {
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}

export default Profit;
