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
    } = NUMBERS;
    const rankObj = {
      [three_match]: [five_place],
      [four_match]: [four_place],
      [five_match]: bonus ? [second_place] : [third_place],
      [six_match]: [first_place],
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
