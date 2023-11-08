import { Console } from '@woowacourse/mission-utils';

class ProfitRatioInfo {
  #amount;
  #totalProfit;

  constructor({ amount, totalProfit }) {
    this.#amount = Number(amount);
    this.#totalProfit = totalProfit;
  }

  #getProfitRatio() {
    const profitRatio = this.#totalProfit / this.#amount;
    return profitRatio;
  }

  printInfoMessage() {
    const profitRatio = (this.#getProfitRatio() * 100).toFixed(1);
    Console.print(
      `총 수익률은 ${profitRatio.toLocaleString('ko-KR', 1)}%입니다.`,
    );
  }
}

export default ProfitRatioInfo;
