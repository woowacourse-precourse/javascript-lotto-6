import { Console, Random } from "@woowacourse/mission-utils";
import {
  THREE_MATCH_PRICE,
  FOUR_MATCH_PRICE,
  FIVE_MATCH_PRICE,
  FIVE_AND_BONUS_MATCH_PRICE,
  SIX_MATCH_PRICE,
} from "./constant/lotto.js";

class LottoResultChecker {
  constructor() {}

  compareInputNumAndRandomNum(inputArr, randomArrs) {
    const counts = [];

    for (const randomArr of randomArrs) {
      const matchingCount = inputArr.reduce((accumalator, inputValue) => {
        return accumalator + (randomArr.includes(inputValue) ? 1 : 0);
      }, 0);
      counts.push(matchingCount);
    }

    return counts;
  }

  getMatchingCounts(counts, bonus) {
    const matchingCounts = {
      three: 0,
      four: 0,
      five: 0,
      fiveAndBonus: 0,
      six: 0,
    };
    counts.map((count, i) => {
      if (count === 3) {
        matchingCounts.three += 1;
      }
      if (count === 4) {
        matchingCounts.four += 1;
      }
      if (count === 5 && bonus[i] === 0) {
        matchingCounts.five += 1;
      }
      if (count === 5 && bonus[i] === 1) {
        matchingCounts.fiveAndBonus += 1;
      }
      if (count === 6) {
        matchingCounts.six += 1;
      }
    });

    return matchingCounts;
  }
  calculateTotalProfit(matchingCountsResult) {
    const totalProfit =
      THREE_MATCH_PRICE * matchingCountsResult.three +
      FOUR_MATCH_PRICE * matchingCountsResult.four +
      FIVE_MATCH_PRICE * matchingCountsResult.five +
      FIVE_AND_BONUS_MATCH_PRICE * matchingCountsResult.fiveAndBonus +
      SIX_MATCH_PRICE * matchingCountsResult.six;
    return totalProfit;
  }

  roundProfitRate(profitRate) {
    return profitRate.toFixed(1);
  }

  calculateProfitRate(totalProfit, purchasePrice) {
    return (totalProfit / purchasePrice) * 100;
  }

  printResult(matchingCountsResult, roundedProfitRate) {
    Console.print("당첨 통계\n---");
    Console.print(`3개 일치 (5,000원) - ${matchingCountsResult.three}개`);
    Console.print(`4개 일치 (50,000원) - ${matchingCountsResult.four}개`);
    Console.print(`5개 일치 (1,500,000원) - ${matchingCountsResult.five}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${matchingCountsResult.fiveAndBonus}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${matchingCountsResult.six}개`);
    Console.print(`총 수익률은 ${roundedProfitRate}%입니다.`);
  }
}

export default LottoResultChecker;
