import Lotto from "./Lotto.js";
import { Console } from "@woowacourse/mission-utils";

class GameResult {
  #lottos;
  #winningNumber;
  #bonusNumber;
  #result;
  #profit;

  constructor(lottos, winningNumber, bonusNumber) {
    this.#lottos = lottos;
    this.#winningNumber = new Lotto(winningNumber);
    this.#bonusNumber = bonusNumber;
    this.#result = this.#calculateResults();
    this.#profit = this.#calculateProfit();
  }

  #calculateResults() {
    const result = { 3: 0, 4: 0, 5: 0, "5+1": 0, 6: 0 };
    this.#lottos.forEach((lotto) => {
      const matchCount = this.#winningNumber.getMatchingCountWith(lotto);
      const hasBonus = lotto.has(this.#bonusNumber);
      if (matchCount === 5 && hasBonus) {
        result["5+1"]++;
      } else if (result.hasOwnProperty(matchCount)) {
        result[matchCount]++;
      }
    });
    return result;
  }

  #calculateProfit() {
    const prize = {
      3: 5000,
      4: 50000,
      5: 15e4,
      "5+1": 3e7,
      6: 2e9,
    };
    let totalPrize = 0;
    const totalCost = this.#lottos.length * 1000;

    for (const [key, count] of Object.entries(this.#result)) {
      totalPrize += (prize[key] || 0) * count;
    }

    return (totalPrize / totalCost) * 100;
  }

  show() {
    Console.print("실행결과\n---");
    Console.print(`3개 일치 (5,000원) - ${this.#result[3]}개`);
    Console.print(`4개 일치 (50,000원) - ${this.#result[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.#result[5]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.#result["5+1"]}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${this.#result[6]}개`);
    Console.print(`총 수익률은 ${this.#profit.toFixed(1)}%입니다.`);
  }
}

export default GameResult;
