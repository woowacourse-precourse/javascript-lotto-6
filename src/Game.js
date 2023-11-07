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
}

export default Game;
