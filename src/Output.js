import { Console } from '@woowacourse/mission-utils';
import { OUTPUT } from './constants/Messages';
import {
  LOTTO_NUMBER_SEPERATOR,
  FIRST_PRIZE,
  SECOND_PRIZE,
  THIRD_PRIZE,
  FOURTH_PRIZE,
  FIFTH_PRIZE,
} from './constants/Condition';

class Output {
  error(message) {
    Console.print(message);
  }

  lottoTicketCount(tickets) {
    Console.print(OUTPUT.ticket_count(tickets.length));
  }

  lottoTicketNumbers(tickets) {
    tickets.forEach((ticket) =>
      Console.print(
        OUTPUT.ticket_number(
          ticket.getNumber().join(`${LOTTO_NUMBER_SEPERATOR} `)
        )
      )
    );
  }

  winningResult(results) {
    Console.print(OUTPUT.statistics);
    Console.print(OUTPUT.divider);

    Console.print(OUTPUT.fifth_prize(results[FIFTH_PRIZE.rank]));
    Console.print(OUTPUT.fourth_prize(results[FOURTH_PRIZE.rank]));
    Console.print(OUTPUT.third_prize(results[THIRD_PRIZE.rank]));
    Console.print(OUTPUT.second_prize(results[SECOND_PRIZE.rank]));
    Console.print(OUTPUT.fifth_prize(results[FIRST_PRIZE.rank]));
  }

  totalReturnResult(totalReturn) {
    Console.print(OUTPUT.total_return(Math.round(totalReturn * 100) / 100));
  }
}

export default Output;
