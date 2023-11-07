import { Console } from '@woowacourse/mission-utils';
import { OUTPUT } from './constants/Messages';

class Output {
  error(message) {
    Console.print(message);
  }

  lottoTicketCount(tickets) {
    Console.print(OUTPUT.ticket_count(tickets.length));
  }

  lottoTicketNumbers(tickets) {
    tickets.forEach((ticket) =>
      Console.print(OUTPUT.ticket_number(ticket.getNumber().join(', ')))
    );
  }

  winningResult(results) {
    Console.print(OUTPUT.statistics);
    Console.print(OUTPUT.divider);

    Console.print(OUTPUT.fifth_prize(results['5']));
    Console.print(OUTPUT.fourth_prize(results['4']));
    Console.print(OUTPUT.third_prize(results['3']));
    Console.print(OUTPUT.second_prize(results['2']));
    Console.print(OUTPUT.fifth_prize(results['1']));
  }

  totalReturnResult(totalReturn) {
    Console.print(OUTPUT.total_return(Math.round(totalReturn * 100) / 100));
  }
}

export default Output;
