import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class LottoManagement {
  constructor() {}

  getLottoArray(count) {
    return Array.from({ length: count }, () => {
      const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      return new Lotto(randomNumbers.sort((a, b) => a - b));
    });
  }

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
  countBonuses(randomArrs) {
    return randomArrs.map((randomArr) =>
      randomArr.getNumbers().includes(this.bonusNumber) ? 1 : 0
    );
  }
}

export default LottoManagement;
