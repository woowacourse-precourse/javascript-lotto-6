import { Console } from '@woowacourse/mission-utils';
import {
  PRIZE_VALUES,
  LOTTO_RESULT_MESSAGES,
  LOTTO_GAME,
} from './utils/constants.js';

class LottoResult {
  #results;
  #prizes;

  constructor() {
    this.#results = [];
    this.#prizes = new Map();
  }

  checkWinningNumbers(lottoTickets, winningNumbers, bonusNumber) {
    const numbers = winningNumbers.split(',').map(Number);
    lottoTickets.forEach((ticket) => {
      const result = ticket.checkWinning(numbers, bonusNumber);

      this.#results.push({
        numbers: ticket.getNumbers(),
        winCount: result.count,
        hasBonus: result.bonus,
      });

      this.#distributePrize(result);
    });
  }

  #distributePrize(result) {
    const key = this.#getPrizeKey(result);
    this.#prizes.set(key, this.#getPrizeCount(key) + 1);
  }

  displayPrizes() {
    Console.print(LOTTO_RESULT_MESSAGES.WINNING_STATISTICS);
    this.#disaplayPrizeMatcher();
  }

  #disaplayPrizeMatcher() {
    Object.entries(PRIZE_VALUES).forEach(([key, value]) => {
      const prizeCount = this.#getPrizeCount(key);
      const message = this.#generateMessage(key, value, prizeCount);

      Console.print(message);
    });
  }

  #generateMessage(key, value, prizeCount) {
    switch (key) {
      case '3':
      case '4':
      case '5':
      case '6':
        return LOTTO_RESULT_MESSAGES.MATCHING_NUMBERS(key, value, prizeCount);
      case '5B':
        return LOTTO_RESULT_MESSAGES.MATCHING_NUMBERS_WITH_BONUS(
          value,
          prizeCount
        );
      default:
        return '';
    }
  }

  #getPrizeCount(key) {
    return this.#prizes.get(key) || 0;
  }

  #getPrizeKey(result) {
    if (result.count === 6) {
      return '6';
    } else if (result.count === 5) {
      return result.bonus ? '5B' : '5';
    }
    return String(result.count);
  }

  calculateReturnRate(userInput) {
    const prizeSum = this.#calculateTotalPrize();
    const rawReturnRate =
      (prizeSum / (userInput * LOTTO_GAME.PRICE_UNIT)) * 100;
    const roundedReturnRate = parseFloat(rawReturnRate.toFixed(2));
    Console.print(LOTTO_RESULT_MESSAGES.RETURN_RATE(roundedReturnRate));
  }

  #calculateTotalPrize() {
    return Array.from(this.#prizes.entries())
      .filter(([key, value]) => value > 0 && PRIZE_VALUES[key])
      .reduce(
        (totalPrize, [key, value]) => totalPrize + PRIZE_VALUES[key] * value,
        0
      );
  }
}

export default LottoResult;
