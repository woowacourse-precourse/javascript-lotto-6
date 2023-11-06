import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from './Lotto.js'

class TicketManager {
  #tickets = [];
  #first = 0;
  #second = 0;
  #third = 0;
  #fourth = 0;
  #fifth = 0;
  #money = 0;
  #rateOfReturn = 0.0;

  constructor(lottoMoney) {
    this.issueTickets(lottoMoney);
  }

  issueTickets(lottoMoney) {
    let ticketsToIssue = lottoMoney / 1000;

    for (let i = 0; i < ticketsToIssue; i++) {
      let ticketNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      let ticket = new Lotto(ticketNumbers);
      ticket.sortNumbers();
      this.#tickets.push(ticket);
    }
  }

  printTicketInformation() {
    let ticketsIssued = this.#tickets.length;
    Console.print(`${ticketsIssued}개를 구매했습니다.`);
    this.#tickets.forEach((ticket) => {
      ticket.printNumbers();
    });
  }

  checkTickets(winningNumber) {

  }
}

export default TicketManager;