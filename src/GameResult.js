import Lotto from "./Lotto.js";
import { Console } from "@woowacourse/mission-utils";

class GameResult {
  #lottos;
  #winningNumber;
  #bonusNumber;
  result;
  profit;

  constructor(lottos, winningNumber, bonusNumber) {
    this.#lottos = lottos;
    this.#winningNumber = new Lotto(winningNumber);
    this.#bonusNumber = bonusNumber;
    this.result = this.#calculateResults();
    this.profit = this.#calculateProfit();
  }

  #calculateResults() {
    const result = { 3: 0, 4: 0, 5: 0, "5+1": 0, 6: 0 };
    this.#lottos.forEach((lotto) => {
      const matchCount = this.#winningNumber.getMatchingCountWith(lotto);
      const hasBonus = lotto.has(this.#bonusNumber);
      if (matchCount === 5 && hasBonus) {
        result["5+1"] += 1;
      } else if (result.hasOwnProperty(matchCount)) {
        result[matchCount] += 1;
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

    const totalCost = this.#lottos.length * 1000;

    let totalPrize = 0;
    Object.entries(this.result).forEach(([key, count]) => {
      totalPrize += (prize[key] || 0) * count;
    });

    return (totalPrize / totalCost) * 100;
  }
}

export default GameResult;
