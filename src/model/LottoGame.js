import NUMBERS from "../constants/numbers.js";
import PRIZE_MONEY from "../constants/prize.js";
import resultOutput from "../view/output/resultOutput.js";

const {
  three_match,
  four_match,
  five_match,
  six_match,
  five_place,
  four_place,
  third_place,
  second_place,
  first_place,
  rank_stack,
  stack_add,
  zero,
  purchase_money,
  percent,
  profit_rounded,
  rank_index,
} = NUMBERS;

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
    const rank = rank_stack;
    this.#userNumbers.forEach((value) => {
      const match = this.#countMatch(value);
      const bounsMatch = value.includes(Number(this.#bonusNumber));
      this.#checkRank(match, rank, bounsMatch);
    });
    const profit = this.profitability(rank);
    resultOutput(rank, profit);
  }

  #countMatch(numbers) {
    return numbers.filter((number) => this.#numbers.includes(number)).length;
  }

  #checkRank(match, rank, bonus) {
    const rankObj = {
      [three_match]: [five_place],
      [four_match]: [four_place],
      [five_match]: bonus ? [second_place] : [third_place],
      [six_match]: [first_place],
    };
    const matchingRank = rankObj[match];
    if (matchingRank) {
      rank[matchingRank] += stack_add;
    }
  }

  profitability(rank) {
    const totalPrize = rank
      .map((count, index) => count * PRIZE_MONEY[index + rank_index])
      .reduce((a, b) => a + b, zero);
    const profit = (totalPrize / (this.#userNumbers.length * purchase_money)) * percent;
    return !totalPrize ? zero : profit.toFixed(profit_rounded);
  }
}

export default LottoGame;
