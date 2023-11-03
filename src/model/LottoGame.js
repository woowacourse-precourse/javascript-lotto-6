import PRIZE_MONEY from "../constants/prize.js";
import resultOutput from "../view/output/resultOutput.js";

class LottoGame {
  #numbers;
  #userNumbers;
  #bonusNumber;

  constructor(userNumbers, numbers, bonusNumber) {
    this.#userNumbers = userNumbers;
    this.#numbers = numbers;
    this.#bonusNumber = bonusNumber;
  }

  lottoLogic() {
    const rank = [0, 0, 0, 0, 0];
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
        rank[4] += 1;
        break;
      case 4:
        rank[3] += 1;
        break;
      case 5:
        bonus ? (rank[1] += 1) : (rank[2] += 1);
        break;
      case 6:
        rank[0] += 1;
        break;
    }
  }
  profitability(rank) {
    const totalPrize = rank
      .map((count, index) => count * PRIZE_MONEY[index + 1])
      .reduce((a, b) => a + b, 0);
    const userMoney = this.#userNumbers.length * 1000;
    return totalPrize === 0 ? 0 : ((totalPrize / userMoney) * 100).toFixed(1);
  }
}

export default LottoGame;
