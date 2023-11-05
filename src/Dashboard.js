class Dashboard {
  #winning;
  #bonus;

  constructor(luckyNumbers) {
    this.rankCount = Array(5).fill(0);

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
    const numbers = lotto.numbers;
    const matchedNumberCount = this.getMatchedNumberCount(numbers);

    if (matchedNumberCount === 3) return 5;
    if (matchedNumberCount === 4) return 4;
    if (matchedNumberCount === 5) {
      return !this.isLottoHasBonus(numbers) ? 3 : 2;
    }
    if (matchedNumberCount === 6) return 1;

    return null;
  }

  updateDashboard(rank) {
    if (!rank) return;
    const rankIndex = rank - 1;
    this.rankCount[rankIndex] += 1;
  }
}

export default Dashboard;
