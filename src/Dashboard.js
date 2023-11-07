import {
  DESCENDING_PRIZE_AMOUNTS,
  FIFTH,
  FIRST,
  FOURTH,
  SECOND,
  THIRD,
} from "./libs/constants.js";

class Dashboard {
  #winning;
  #bonus;

  constructor(luckyNumbers) {
    this.rankCountArray = Array(5).fill(0);

    this.#winning = luckyNumbers.winning;
    this.#bonus = luckyNumbers.bonus;
  }

  getMatchedNumberCount(numbers) {
    const intersection = numbers.filter((num) => this.#winning.includes(num));
    return intersection.length;
  }

  isLottoHasBonus(numbers) {
    return numbers.includes(this.#bonus);
  }

  assignLottoRank(lotto) {
    const lottoNumbers = lotto.numbers;
    const matchedNumberCount = this.getMatchedNumberCount(lottoNumbers);

    if (matchedNumberCount === 3) return FIFTH;
    if (matchedNumberCount === 4) return FOURTH;
    if (matchedNumberCount === 5) {
      return !this.isLottoHasBonus(lottoNumbers) ? THIRD : SECOND;
    }
    if (matchedNumberCount === 6) return FIRST;

    return null;
  }

  updateDashboard(rank) {
    if (!rank) return;

    const rankIndex = rank - 1;
    this.rankCountArray[rankIndex] += 1;
  }

  calculateEarnings(investment) {
    const winningAmounts = DESCENDING_PRIZE_AMOUNTS;

    const totalEarnings = this.rankCountArray.reduce((total, count, index) => {
      return total + count * winningAmounts[index];
    }, 0);

    const earningsRate = ((totalEarnings / investment) * 100).toFixed(1) + "%";
    return earningsRate;
  }
}

export default Dashboard;
