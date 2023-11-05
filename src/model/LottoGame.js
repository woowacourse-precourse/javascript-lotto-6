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
      const match = value.filter((number) =>
        this.#numbers.includes(number)
      ).length;
      this.checkRank(match, rank, value.includes(this.#bonusNumber));
    });
    const profit = this.profitability(rank);
    resultOutput(rank, profit);
  }
  checkRank(match, rank, bonus) {
    switch (match) {
      case 3:
        rank[4] += NUMBERS.stack;
        break;
      case 4:
        rank[3] += NUMBERS.stack;
        break;
      case 5:
        bonus ? (rank[1] += NUMBERS.stack) : (rank[2] += NUMBERS.stack);
        break;
      case 6:
        rank[0] += NUMBERS.stack;
        break;
    }
  }
  profitability(rank) {
    const totalPrize = rank
      .map((count, index) => count * PRIZE_MONEY[index + 1])
      .reduce((a, b) => a + b, NUMBERS.zero);
    const userMoney = this.#userNumbers.length * NUMBERS.purchase_money;
    return totalPrize === NUMBERS.zero
      ? NUMBERS.zero
      : ((totalPrize / userMoney) * NUMBERS.percent).toFixed(1);
  }
}

export default LottoGame;
