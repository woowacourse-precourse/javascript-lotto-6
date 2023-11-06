import NUMBERS from "../constants/numbers.js";
import PRIZE_MONEY from "../constants/prize.js";
import resultOutput from "../view/output/resultOutput.js";

class LottoGame {
  #userNumbers;
  #numbers;
  #bonusNumber;

  constructor(userNumbers, numbers, bonusNumber) {
    this.#userNumbers = userNumbers;
    this.#numbers = numbers;
    this.#bonusNumber = bonusNumber;
  }

  lottoLogic() {
    const rank = NUMBERS.rank;
    this.#userNumbers.forEach((value) => {
      const match = this.countMatch(value);
      const bounsMatch = value.includes(this.#bonusNumber);
      this.checkRank(match, rank, bounsMatch);
    });
    const profit = this.profitability(rank);
    resultOutput(rank, profit);
  }
  countMatch(numbers) {
    return numbers.filter((number) => this.#numbers.includes(number)).length;
  }
  checkRank(match, rank, bonus) {
    const rankObj = {
      3: 4,
      4: 3,
      5: bonus ? 1 : 2,
      6: 0,
    };
    rank[rankObj[match]] += NUMBERS.stack;
  }

  profitability(rank) {
    const totalPrize = rank
      .map((count, index) => count * PRIZE_MONEY[index + 1])
      .reduce((a, b) => a + b, NUMBERS.zero);
    return !totalPrize
      ? NUMBERS.zero
      : (
          (totalPrize / (this.#userNumbers.length * NUMBERS.purchase_money)) *
          NUMBERS.percent
        ).toFixed(1);
  }
}

export default LottoGame;
