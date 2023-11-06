import { Console } from '@woowacourse/mission-utils';

export default class OutPutService {
  printTicketCount(message) {
    Console.print(message);
  }

  printTickets(tickets) {
    tickets.forEach((ticket) => {
      const OUTPUT = '[' + ticket.join(', ') + ']';
      Console.print(OUTPUT);
    });
  }
}
