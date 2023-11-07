import { PRIZE_CATEGORIES } from "../src/constants.js";

class LottoResult {
  constructor(winningNumbers, bonusNumber) {
    this.winningNumbers = winningNumbers;
    this.bonusNumber = bonusNumber;
  }

  calculateResults(lottos) {
    return lottos.map((lotto) => this.determinePrize(lotto));
  }

  determinePrize(lotto) {
    const matches = this.calculateMatches(lotto.getNumbers());
    const prizeCategory = this.getPrizeCategory(
      matches,
      lotto.getNumbers().includes(this.bonusNumber)
    );

    return prizeCategory;
  }

  calculateMatches(numbers) {
    const matches = numbers.filter((number) =>
      this.winningNumbers.includes(number)
    ).length;

    return matches;
  }

  getPrizeCategory(matchCount, bonusMatch) {
    switch (matchCount) {
      case 6:
        return PRIZE_CATEGORIES.FIRST;
      case 5:
        return bonusMatch ? PRIZE_CATEGORIES.SECOND : PRIZE_CATEGORIES.THIRD;
      case 4:
        return PRIZE_CATEGORIES.FOURTH;
      case 3:
        return PRIZE_CATEGORIES.FIFTH;
      default:
        return PRIZE_CATEGORIES.NONE;
    }
  }
}

export default LottoResult;
