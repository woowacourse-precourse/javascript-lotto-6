import { MissionUtils } from '@woowacourse/mission-utils';
import Validator from './Validator.js';
import { message } from './constant.js';
import { numbers } from './constant.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    Validator.validateNumbers(numbers);
  }

  getNumbers() {
    return this.#numbers.sort((a, b) => a - b);
  }

  getMatchCount(winningNumbers) {
    let matchCount = 0;
    this.#numbers.forEach((num) => {
      if (winningNumbers.includes(num)) {
        matchCount += 1;
      }
    });
    return matchCount;
  }

  hasBonusNumber(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }

  getPrize(rank) {
    const prizes = {
      [message.THREE_MATCHED]: numbers.FIFTH_PRIZE_MONEY,
      [message.FOUR_MATCHED]: numbers.FOURTH_PRIZE_MONEY,
      [message.FIVE_MATCHED]: numbers.THIRD_PRIZE_MONEY,
      [message.FIVE_WITH_BONUS_MATCHED]: numbers.SECOND_PRIZE_MONEY,
      [message.SIX_MATCHED]: numbers.FIRST_PRIZE_MONEY,
    };
    return prizes[rank];
  }

  calculateEarningsRate(lottoTickets, winningNumbers, bonusNumber) {
    const result = this.calculateResults(lottoTickets, winningNumbers, bonusNumber);
    const { totalPrize, resultString } = this.generateResultString(result);

    const totalCost = lottoTickets.length * numbers.THOUSAND;
    const earningsRate = (totalPrize / totalCost) * numbers.PERCENT;

    const finalResultString = `${resultString}총 수익률은 ${earningsRate.toFixed(1).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}%입니다.`;
    MissionUtils.Console.print(finalResultString);
  }

  calculateResults(lottoTickets, winningNumbers, bonusNumber) {
    const result = {
      [message.THREE_MATCHED]: 0,
      [message.FOUR_MATCHED]: 0,
      [message.FIVE_MATCHED]: 0,
      [message.FIVE_WITH_BONUS_MATCHED]: 0,
      [message.SIX_MATCHED]: 0,
    };

    for (const lottoTicket of lottoTickets) {
      const matchCount = lottoTicket.getMatchCount(winningNumbers);
      const hasBonus = lottoTicket.hasBonusNumber(bonusNumber);

      switch (matchCount) {
        case 3:
          result[message.THREE_MATCHED] += 1;
          break;
        case 4:
          result[message.FOUR_MATCHED] += 1;
          break;
        case 5:
          if (hasBonus) {
            result[message.FIVE_WITH_BONUS_MATCHED] += 1;
          } else {
            result[message.FIVE_MATCHED] += 1;
          }
          break;
        case 6:
          result[message.SIX_MATCHED] += 1;
          break;
      }
    }
    return result;
  }

  generateResultString(result) {
    let totalPrize = 0;
    let resultString = "";

    for (const rank in result) {
      const prize = this.getPrize(rank);
      const count = result[rank];
      totalPrize += prize * count;
      resultString += `${rank} - ${count}개\n`;
    }
    return { totalPrize, resultString };
  }
}

export default Lotto;