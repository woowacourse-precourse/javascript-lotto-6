import { Console } from '@woowacourse/mission-utils';
import { OUTPUT } from '../constants/Messages.js';
import { LOTTO_NUMBER, PRIZE } from '../constants/Condition.js';

class Output {
  error(message) {
    Console.print(message);
  }

  lottoTicketsCount(tickets) {
    Console.print(OUTPUT.ticket_count(tickets.length));
  }

  lottoTicketsNumbers(tickets) {
    tickets.forEach((ticket) =>
      Console.print(OUTPUT.ticket_number(ticket.getNumbers().join(`${LOTTO_NUMBER.seperator} `)))
    );
  }

  lottoTickets(tickets) {
    this.lottoTicketsCount(tickets);
    this.lottoTicketsNumbers(tickets);
  }

  winningResult(results) {
    Console.print(OUTPUT.statistics);
    Console.print(OUTPUT.divider);

    Console.print(OUTPUT.fifth_prize(results[PRIZE.FIFTH_PRIZE.rank]));
    Console.print(OUTPUT.fourth_prize(results[PRIZE.FOURTH_PRIZE.rank]));
    Console.print(OUTPUT.third_prize(results[PRIZE.THIRD_PRIZE.rank]));
    Console.print(OUTPUT.second_prize(results[PRIZE.SECOND_PRIZE.rank]));
    Console.print(OUTPUT.first_prize(results[PRIZE.FIRST_PRIZE.rank]));
  }

  totalReturnResult(totalReturn) {
    Console.print(OUTPUT.total_return(totalReturn));
  }

  gameResult(result) {
    const { results, totalReturn } = result;

    this.winningResult(results);
    this.totalReturnResult(totalReturn);
  }
}

export default Output;
