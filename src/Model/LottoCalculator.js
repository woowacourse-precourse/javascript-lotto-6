import { STATISTICS } from "../Constants/Constant.js";

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
      this.#updateStatistics(statistics, numberOfMatchingNumbers);
    });

    this.#calculateProfitAndRate(statistics);

    return statistics;
  }

  #updateStatistics(statistics, numberOfMatchingNumbers) {
    if (numberOfMatchingNumbers === 6) {
      return this.#updatePrizeAndCount(statistics, "6", 2_000_000_000);
    }

    if (numberOfMatchingNumbers === 5) {
      const isBonusNumberMatched = this.#isBonusNumberMatched(numbers);
      const prize = isBonusNumberMatched ? 30_000_000 : 1_500_000;
      return this.#updatePrizeAndCount(
        statistics,
        "5" + (isBonusNumberMatched ? "+bonus" : ""),
        prize
      );
    }

    if (numberOfMatchingNumbers === 4) {
      return this.#updatePrizeAndCount(statistics, "4", 50_000);
    }

    if (numberOfMatchingNumbers === 3) {
      return this.#updatePrizeAndCount(statistics, "3", 5_000);
    }
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
