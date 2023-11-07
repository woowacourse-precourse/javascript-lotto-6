import { STATISTICS, PRIZES } from "../Utilities/Constant.js";

class LottoCalculator {
  #winningNumbers;
  #totalSets;

  constructor(winningNumbers, totalSets) {
    this.#winningNumbers = winningNumbers;
    this.#totalSets = totalSets;
  }

  calculateStatistics(userNumbers) {
    const statistics = { ...STATISTICS };

    userNumbers.forEach((numbers) => {
      const numberOfMatchingNumbers = this.#countMatchingNumbers(numbers);
      this.#updateStatistics(statistics, numberOfMatchingNumbers, numbers);
    });

    this.#calculateProfitAndRate(statistics);

    return statistics;
  }

  #updatePrizeAndCount(statistics, key, prize) {
    statistics[key]++;
    statistics.totalPrize += prize;
  }

  #isBonusNumberMatched(numbers) {
    return numbers.includes(
      this.#winningNumbers.find((number) => !numbers.includes(number))
    );
  }

  #updateStatistics(statistics, numberOfMatchingNumbers, numbers) {
    const prizeKey =
      numberOfMatchingNumbers === 5 && this.#isBonusNumberMatched(numbers)
        ? "5+bonus"
        : numberOfMatchingNumbers.toString();
    const prize = PRIZES[prizeKey] || 0;

    this.#updatePrizeAndCount(statistics, prizeKey, prize);
  }

  #calculateProfitAndRate(statistics) {
    const totalSpent = this.#totalSets * 1000;
    const profit = statistics.totalPrize - totalSpent;
    const profitRate = ((profit / totalSpent) * 100 + 100).toFixed(2);

    statistics.profitRate = parseFloat(profitRate);
  }

  #countMatchingNumbers(userNumbers) {
    return userNumbers.filter((number) => this.#winningNumbers.includes(number))
      .length;
  }
}

export default LottoCalculator;
