import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto';

class LottoMachine {
  constructor() {
    this.tickets = [];
  }

  async issueTicket() {
    const numbers = await Random.pickUniqueNumbersInRange(1, 45, 6);
    const ticket = new Lotto(numbers).issue();
    return ticket;
  }

  async getTickets(ticketCount) {
    for (let i = 0; i < ticketCount; i++) {
      const ticket = await this.issueTicket();
      this.tickets.push(ticket);
    }
    console.log(this.tickets);
    return this.tickets;
  }
}

export default LottoMachine;
