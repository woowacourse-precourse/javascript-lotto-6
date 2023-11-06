import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from './Lotto.js'

class TicketManager {
  #tickets = [];

  constructor(lottoMoney) {
    this.issueTickets(lottoMoney);
  }

  issueTickets(lottoMoney) {
    let ticketsToIssue = lottoMoney / 1000;
    Console.print(`${ticketsToIssue}개를 구매했습니다.`);

    for (let i = 0; i < ticketsToIssue; i++) {
      let ticketNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      let ticket = new Lotto(ticketNumbers);
      ticket.sortNumbers();
      ticket.printNumbers();
      this.#tickets.push(ticket.getNumbers());
    }
  }

  getTickets() {
    return this.#tickets;
  }

}

export default TicketManager;