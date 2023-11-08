import { Random, Console } from '@woowacourse/mission-utils';

import App, { MESSAGES } from './App.js';
import Lotto from './Lotto.js';

export const RANK = Object.freeze({
  5: '5th',
  4: '4th',
  3: '3rd',
  2: '2nd',
  1: '1st',
});

export const TICKET_PRICE = 1000;

const REWARD = Object.freeze({
  5: 5000,
  4: 50000,
  3: 1500000,
  2: 30000000,
  1: 2000000000,
});

class Game {
  constructor(amount) {
    this.amount = amount;
    this.tickets = [];
    this.drawInfo = {
      [RANK[5]]: { count: 0, reward: REWARD[5] },
      [RANK[4]]: { count: 0, reward: REWARD[4] },
      [RANK[3]]: { count: 0, reward: REWARD[3] },
      [RANK[2]]: { count: 0, reward: REWARD[2] },
      [RANK[1]]: { count: 0, reward: REWARD[1] },
    };
  }

  getLottoTickets() {
    const ticketNum = this.amount / TICKET_PRICE;

    for (let i = 0; i < ticketNum; i++) {
      const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
        (a, b) => a - b
      );
      const ticket = new Lotto(randomNumbers);

      this.tickets.push(ticket);
    }
  }

  draw({ winningNumbers, bonusNumber }) {
    this.tickets.forEach((ticket) => {
      const result = ticket.getWinningInfo(winningNumbers, bonusNumber);

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
    Console.print(MESSAGES.OUTPUT_BUY_TICKETS(this.amount / TICKET_PRICE));
    this.tickets.forEach((ticket) => Console.print(ticket.info));
  }

  getRank(drawResult) {
    const { matchCount, isBonusMatched } = drawResult;

    switch (matchCount) {
      case 6:
        return RANK[1];

      case 5:
        if (isBonusMatched) {
          return RANK[2];
        }

        return RANK[3];

      case 4:
        return RANK[4];

      case 3:
        return RANK[5];
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
