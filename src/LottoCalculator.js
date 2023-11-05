import { STATISTICS } from "./Constant.js";

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
      if (numberOfMatchingNumbers === 6) {
        statistics["6"]++;
        statistics.totalPrize += 2_000_000_000;
        return;
      }

      if (numberOfMatchingNumbers === 5) {
        const isBonusNumberMatched = this.#winningNumbers.includes(
          numbers.find((number) => !this.#winningNumbers.includes(number))
        );
        if (isBonusNumberMatched) {
          statistics["5+bonus"]++;
          statistics.totalPrize += 30_000_000;
          return;
        }
        statistics["5"]++;
        statistics.totalPrize += 1_500_000;
        return;
      }

      if (numberOfMatchingNumbers === 4) {
        statistics["4"]++;
        statistics.totalPrize += 50_000;
        return;
      }

      if (numberOfMatchingNumbers === 3) {
        statistics["3"]++;
        statistics.totalPrize += 5_000;
      }
    });

    const totalSpent = this.#totalSets * 1000;
    const profit = statistics.totalPrize - totalSpent;
    const profitRate = ((profit / totalSpent) * 100 + 100).toFixed(2);

    statistics.profitRate = parseFloat(profitRate);

    return statistics;
  }

  #countMatchingNumbers(userNumbers) {
    return userNumbers.filter((number) => this.#winningNumbers.includes(number))
      .length;
  }
}

export default LottoCalculator;
