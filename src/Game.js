import { Random, Console } from '@woowacourse/mission-utils';

import App, { MESSAGES } from './App.js';
import Lotto from './Lotto.js';

export const RANK = Object.freeze({
  _5th: '5th',
  _4th: '4th',
  _3rd: '3rd',
  _2nd: '2nd',
  _1st: '1st',
});

class Game {
  constructor(amount) {
    this.amount = amount;
    this.tickets = [];
    this.drawInfo = {
      [RANK._5th]: { count: 0, reward: 5000 },
      [RANK._4th]: { count: 0, reward: 50000 },
      [RANK._3rd]: { count: 0, reward: 1500000 },
      [RANK._2nd]: { count: 0, reward: 30000000 },
      [RANK._1st]: { count: 0, reward: 2000000000 },
    };
  }

  getLottoTickets() {
    const ticketNumber = this.amount / 1000;

    for (let i = 0; i < ticketNumber; i++) {
      const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
        (a, b) => a - b
      );
      const ticket = new Lotto(randomNumbers);

      this.tickets.push(ticket);
    }
  }

  draw({ winningNumbers, bonusNumber }) {
    this.tickets.forEach((ticket) => {
      const result = ticket.getWinningInfo(winningNumbers, bonusNumber); // {count, bonus}

      if (result.matchCount >= 3) {
        this.recordResult(result);
      }
    });
  }

  recordResult(drawResult) {
    const rank = this.getRank(drawResult);
    this.drawInfo[rank].count += 1;
  }

  printTickets() {
    Console.print(MESSAGES.OUTPUT_BUY_TICKETS(this.amount / 1000));
    this.tickets.forEach((ticket) => Console.print(ticket.info));
  }

  getRank(drawResult) {
    const { matchCount, isBonusMatched } = drawResult;

    switch (matchCount) {
      case 6:
        return RANK._1st;

      case 5:
        if (isBonusMatched) {
          return RANK._2nd;
        }

        return RANK._3rd;

      case 4:
        return RANK._4th;

      case 3:
        return RANK._5th;
    }
  }

  getReturn() {
    let totalReturn = 0;

    for (const { count, reward } of Object.values(this.drawInfo)) {
      totalReturn += Number(count * reward);
    }

    return totalReturn;
  }
}

export default Game;
