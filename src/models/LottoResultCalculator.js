import NUMBER from '../utils/constants/number';

const { statistics } = NUMBER;
const { winningCriteria, prizes } = statistics;

class LottoResultCalculator {
  #result = {
    first: 0,
    second: 0,
    third: 0,
    fourth: 0,
    fifth: 0,
  };

  calculateResults(tickets, winningNumbers, bonusNumber) {
    tickets.forEach(ticket => {
      this.#updateResult(ticket, winningNumbers, bonusNumber);
    });

    return this.#result;
  }

  #updateResult(ticket, winningNumbers, bonusNumber) {
    const matchCount = this.#countMatchingNumbers(ticket, winningNumbers);
    const hasBonusMatch = ticket.getNumbers().includes(bonusNumber);
    this.#incrementPrizeCount(matchCount, hasBonusMatch);
  }

  #incrementPrizeCount(matchCount, hasBonusMatch) {
    const prizeCategory = this.#findPrizeCategory(matchCount, hasBonusMatch);
    if (prizeCategory) this.#result[prizeCategory] += 1;
  }

  #findPrizeCategory(matchCount, hasBonusMatch) {
    const winningCriterion = Object.values(winningCriteria).find(
      criterion =>
        matchCount === criterion.matchCount &&
        (!criterion.bonusMatch || hasBonusMatch),
    );
    return Object.keys(winningCriteria).find(
      key => winningCriteria[key] === winningCriterion,
    );
  }

  #countMatchingNumbers(ticket, winningNumbers) {
    return ticket.getNumbers().filter(number => winningNumbers.includes(number))
      .length;
  }

  calculateProfitRate(moneyAmount) {
    const totalPrizeMoney = this.#calculateTotalPrizeMoney();
    const profitRate = (totalPrizeMoney / moneyAmount) * 100;
    return profitRate;
  }

  #calculateTotalPrizeMoney() {
    return Object.entries(this.#result).reduce(
      (total, [prizeCategory, count]) => {
        const prizeMoney = prizes[prizeCategory] || 0;
        return total + prizeMoney * count;
      },
      0,
    );
  }
}

export default LottoResultCalculator;
