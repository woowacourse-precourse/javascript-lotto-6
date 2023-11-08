import { Random } from '@woowacourse/mission-utils';

class LottoMachine {
  constructor() {
    this.ticket = [];
  }

  makeTicket() {
    while (this.ticket.length !== 6) {
      const number = Random.pickNumberInRange(1, 45);
      this.ticket.push(number);
      const validTicket = new Set(this.ticket);
      this.ticket = [...validTicket];
    }
    return this.ticket;
  }
}

export default LottoMachine;
