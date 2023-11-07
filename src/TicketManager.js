import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from './Lotto.js'
import { LOTTO_SCOPE, TICKET_PRICE } from "./Constant.js";

class TicketManager {
  #tickets = [];

  constructor(lottoMoney) {
    this.issueTickets(lottoMoney);
  }

  issueTickets(lottoMoney) {
    let ticketsToIssue = lottoMoney / TICKET_PRICE;
    Console.print(`${ticketsToIssue}개를 구매했습니다.`);

    for (let i = 0; i < ticketsToIssue; i++) {
      let ticketNumbers = Random.pickUniqueNumbersInRange(LOTTO_SCOPE.MIN, LOTTO_SCOPE.MAX, LOTTO_SCOPE.LENGTH);
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