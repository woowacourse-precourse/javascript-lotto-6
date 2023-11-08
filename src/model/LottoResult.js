import { GAME_SETTINGS } from '../constants/GameSettings';
import { PRIZES } from '../constants/Prizes';

export default class LottoResult {
  #winningNumbers;

  #bonusNumber;

  #tickets;

  #result;

  constructor(winningNumbers, bonusNumber, tickets) {
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
    this.#tickets = tickets;
    this.#result = this.#initializeResult();
    this.#calculateResults();
  }

  #initializeResult() {
    return Object.keys(PRIZES).reduce((acc, key) => {
      acc[key] = { count: 0, prize: PRIZES[key] };
      return acc;
    }, {});
  }

  #calculateResults() {
    this.#tickets.forEach((ticket) => {
      const matchCount = ticket.matchNumbers(this.#winningNumbers);
      const isBonusMatch = matchCount === 5 && ticket.includesBonusNumber(this.#bonusNumber);
      const key = isBonusMatch ? '5+1' : matchCount;
      if (this.#result[key]) {
        this.#result[key].count += 1;
      }
    });
  }

  getFormattedResultString() {
    const sortOrder = [3, 4, 5, '5+1', 6];
    return sortOrder
      .map((match) => {
        const data = this.#result[match];
        const matchText = GAME_SETTINGS.MATCH_TEXTS[match];
        return `${matchText} (${data.prize.toLocaleString()}원) - ${data.count}개`;
      })
      .join('\n');
  }

  calculateProfitRate() {
    const totalSpent = this.#tickets.length * GAME_SETTINGS.TICKET_PRICE;
    const totalPrize = this.#calculateTotalPrize();
    return Number(((totalPrize / totalSpent) * 100).toFixed(2));
  }

  #calculateTotalPrize() {
    return Object.values(this.#result).reduce((acc, { count, prize }) => acc + count * prize, 0);
  }
}
