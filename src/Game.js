import { Random } from '@woowacourse/mission-utils';

import App, { MESSAGES } from './App.js';
import Lotto from './Lotto.js';

class Game {
  constructor(amount) {
    this.amount = amount;
    this.tickets = [];
  }

  async getLottoTickets() {
    const ticketNumber = this.amount / 1000;

    for (let i = 0; i < ticketNumber; i++) {
      const randomNumbers = await Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      ).sort((a, b) => a - b);
      const ticket = new Lotto(randomNumbers);

      this.tickets.push(ticket);
    }
  }
}

export default Game;
