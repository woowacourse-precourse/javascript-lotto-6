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
      const bounsMatch = value.includes(Number(this.#bonusNumber));
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
      [NUMBERS.three_match]: [NUMBERS.five_place],
      [NUMBERS.four_match]: [NUMBERS.four_place],
      [NUMBERS.five_match]: bonus ? [NUMBERS.second_place] : [NUMBERS.third_place],
      [NUMBERS.six_match]: [NUMBERS.first_place],
    };
    const matchingRank = rankObj[match];
    if (matchingRank) {
      rank[matchingRank] += NUMBERS.stack;
    }
  }

  profitability(rank) {
    const totalPrize = rank
      .map((count, index) => count * PRIZE_MONEY[index + NUMBERS.rank_index])
      .reduce((a, b) => a + b, NUMBERS.zero);
    return !totalPrize
      ? NUMBERS.zero
      : (
          (totalPrize / (this.#userNumbers.length * NUMBERS.purchase_money)) * NUMBERS.percent
        ).toFixed(NUMBERS.profit_rounded);
  }
}

export default LottoGame;
